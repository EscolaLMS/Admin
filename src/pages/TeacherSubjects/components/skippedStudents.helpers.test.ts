import { describe, expect, it } from '@jest/globals';

import { formatSkippedStudentGroups, partitionSkippedStudents } from './skippedStudents.helpers';

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

  it('returns an empty string when there are no groups', () => {
    expect(formatSkippedStudentGroups([])).toBe('');
  });
});
