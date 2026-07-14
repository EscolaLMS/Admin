import { describe, expect, it } from '@jest/globals';

import { AttendanceValue } from '../../../../services/escola-lms/enums';
import { getScheduleAttendanceHeaderState, isGroupStudent } from './helpers';

const finalGrade = (userId: number) => ({ user: { id: userId } } as API.FinalGradeItem);

describe('isGroupStudent', () => {
  it('includes a student with no academic teacher regardless of final grades', () => {
    expect(isGroupStudent(null, 1, [])).toBe(true);
  });

  it('includes a student with an academic teacher when present in final grades', () => {
    expect(isGroupStudent(99, 1, [finalGrade(1)])).toBe(true);
  });

  it('excludes a student with an academic teacher who is absent from final grades', () => {
    expect(isGroupStudent(99, 1, [finalGrade(2)])).toBe(false);
  });
});

describe('getScheduleAttendanceHeaderState', () => {
  const SCHEDULE = 10;
  const state = (values: Record<number, API.AttendanceValue>, ids: number[]) =>
    getScheduleAttendanceHeaderState({ [SCHEDULE]: values }, SCHEDULE, ids);

  it('is "all present" only when every non-excused student is PRESENT', () => {
    expect(state({ 1: AttendanceValue.PRESENT, 2: AttendanceValue.PRESENT }, [1, 2])).toEqual({
      allPresent: true,
      allEmpty: false,
    });
  });

  it('excludes excused-absence students from the calc (still "all present")', () => {
    expect(
      state({ 1: AttendanceValue.PRESENT, 2: AttendanceValue.EXCUSED_ABSENCE }, [1, 2]),
    ).toEqual({ allPresent: true, allEmpty: false });
  });

  it('treats absent, null and not-exercising all as empty (not present)', () => {
    expect(state({ 1: AttendanceValue.ABSENT }, [1])).toEqual({
      allPresent: false,
      allEmpty: true,
    });
    // no entry for the student -> null -> empty
    expect(state({}, [1])).toEqual({ allPresent: false, allEmpty: true });
    expect(state({ 1: AttendanceValue.PRESENT_NOT_EXERCISING }, [1])).toEqual({
      allPresent: false,
      allEmpty: true,
    });
  });

  it('is indeterminate (neither all-present nor all-empty) on a mixed schedule', () => {
    expect(state({ 1: AttendanceValue.PRESENT, 2: AttendanceValue.ABSENT }, [1, 2])).toEqual({
      allPresent: false,
      allEmpty: false,
    });
  });

  it('is empty (not present) when the whole group is excused', () => {
    expect(state({ 1: AttendanceValue.EXCUSED_ABSENCE }, [1])).toEqual({
      allPresent: false,
      allEmpty: true,
    });
  });

  it('is empty when the group roster is empty', () => {
    expect(state({}, [])).toEqual({ allPresent: false, allEmpty: true });
  });
});
