import { describe, expect, it } from '@jest/globals';

import {
  formatSkippedStudentGroups,
  NO_VALUE,
  partitionSkippedStudents,
  readParseExamResponse,
} from './skippedStudents.helpers';

const otherGroupStudent: API.SkippedStudent = {
  result: 85,
  first_name: 'Jan',
  last_name: 'Kowalski',
  email: 'jan@example.com',
  found_in_system: true,
  user_groups: [
    { id: 2, name: 'Group B' },
    { id: 3, name: 'Group C' },
  ],
};

const notInSystemStudent: API.SkippedStudent = {
  result: 70,
  first_name: 'Anna',
  last_name: 'Nowak',
  email: 'anna@example.com',
  found_in_system: false,
  user_groups: [],
};

// Off-contract but plausible: the user exists, yet the backend reports no group for them.
const foundWithoutGroupStudent: API.SkippedStudent = {
  result: 55,
  first_name: 'Piotr',
  last_name: 'Zieliński',
  email: 'piotr@example.com',
  found_in_system: true,
  user_groups: [],
};

describe('partitionSkippedStudents', () => {
  it('splits a mixed list into other-group and not-in-system buckets', () => {
    const { otherGroup, notInSystem } = partitionSkippedStudents([
      otherGroupStudent,
      notInSystemStudent,
    ]);

    expect(otherGroup).toEqual([otherGroupStudent]);
    expect(notInSystem).toEqual([notInSystemStudent]);
  });

  it('puts every student in other-group when all are found in the system', () => {
    const { otherGroup, notInSystem } = partitionSkippedStudents([otherGroupStudent]);

    expect(otherGroup).toHaveLength(1);
    expect(notInSystem).toHaveLength(0);
  });

  it('puts every student in not-in-system when none are found', () => {
    const { otherGroup, notInSystem } = partitionSkippedStudents([notInSystemStudent]);

    expect(otherGroup).toHaveLength(0);
    expect(notInSystem).toHaveLength(1);
  });

  it('treats a student found without any group as unplaceable, not as another group', () => {
    const { otherGroup, notInSystem } = partitionSkippedStudents([foundWithoutGroupStudent]);

    // otherwise the row would render a blank "Assigned group" cell under advice telling the
    // teacher to go to a group that does not exist
    expect(otherGroup).toHaveLength(0);
    expect(notInSystem).toEqual([foundWithoutGroupStudent]);
  });

  it('returns empty buckets for an empty list', () => {
    const { otherGroup, notInSystem } = partitionSkippedStudents([]);

    expect(otherGroup).toHaveLength(0);
    expect(notInSystem).toHaveLength(0);
  });
});

describe('formatSkippedStudentGroups', () => {
  it('joins multiple group names with commas', () => {
    expect(formatSkippedStudentGroups(otherGroupStudent.user_groups)).toBe('Group B, Group C');
  });

  it('returns a single group name unchanged', () => {
    expect(formatSkippedStudentGroups([{ id: 1, name: 'Group A' }])).toBe('Group A');
  });

  it('falls back to a placeholder when there are no groups', () => {
    expect(formatSkippedStudentGroups([])).toBe(NO_VALUE);
  });
});

// The reader only touches these three fields. `Pick` keeps them checked against the real
// `ParseExamResponse` contract, so a backend rename breaks this test rather than silently
// producing an empty modal.
type ConsumedParseExamFields = Pick<
  API.ParseExamResponse,
  'results' | 'group_id' | 'skipped_students'
>;

const successResponse = (data: ConsumedParseExamFields) =>
  ({ success: true, message: 'OK', data } as unknown as API.DefaultResponse<API.ParseExamResponse>);

const matchedResult: API.ExamResult = {
  result: 90,
  user_id: 11,
  first_name: 'Ewa',
  last_name: 'Lis',
  email: 'ewa@example.com',
};

// Shaped exactly like the payload the modal was previewed against, so this asserts the real
// contract documented on `API.ParseExamResponse`.
const realisticPayload: ConsumedParseExamFields = {
  group_id: 1,
  results: [matchedResult],
  skipped_students: [otherGroupStudent, notInSystemStudent],
};

describe('readParseExamResponse', () => {
  it('reads matched results, skipped students and the group id from a full payload', () => {
    const { examResults, skippedStudents, groupId } = readParseExamResponse(
      successResponse(realisticPayload),
    );

    expect(examResults).toEqual([matchedResult]);
    expect(skippedStudents).toEqual([otherGroupStudent, notInSystemStudent]);
    expect(groupId).toBe(1);
  });

  it('feeds the modal sections that a full payload should display', () => {
    const { skippedStudents } = readParseExamResponse(successResponse(realisticPayload));
    const { otherGroup, notInSystem } = partitionSkippedStudents(skippedStudents);

    expect(otherGroup.map((student) => student.email)).toEqual(['jan@example.com']);
    expect(formatSkippedStudentGroups(otherGroup[0].user_groups)).toBe('Group B, Group C');
    expect(notInSystem.map((student) => student.email)).toEqual(['anna@example.com']);
  });

  it('yields no skipped students when the backend omits the field', () => {
    const { examResults, skippedStudents } = readParseExamResponse(
      successResponse({ group_id: 1, results: [matchedResult] }),
    );

    // this is today's backend: the import still works and no modal opens
    expect(examResults).toEqual([matchedResult]);
    expect(skippedStudents).toEqual([]);
  });

  it('drops rows the backend could not match to a user', () => {
    const unmatchedResult = { ...matchedResult, user_id: null as unknown as number };

    const { examResults } = readParseExamResponse(
      successResponse({ group_id: 1, results: [matchedResult, unmatchedResult] }),
    );

    expect(examResults).toEqual([matchedResult]);
  });

  it('returns nothing importable for a failed parse', () => {
    const failed: API.DefaultResponse<API.ParseExamResponse> = {
      success: false,
      message: 'Invalid file',
      errors: { file: ['Invalid file'] },
    };

    expect(readParseExamResponse(failed)).toEqual({
      examResults: [],
      skippedStudents: [],
      groupId: null,
    });
  });

  it('returns nothing importable when the response body is missing', () => {
    expect(readParseExamResponse(undefined)).toEqual({
      examResults: [],
      skippedStudents: [],
      groupId: null,
    });
  });
});
