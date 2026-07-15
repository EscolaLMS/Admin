// Pure attendance helpers for the ClassRegister group view. Kept import-light
// (only the AttendanceValue enum, via a relative path) so they can be unit
// tested without pulling in the component graph / the `@/` module alias.
import { AttendanceValue } from '../../../../services/escola-lms/enums';

// A user belongs to the group roster if they have no academic teacher, OR they
// appear in the teacher's final-grades roster. Used both for the group-wide
// summary calculation and the row-build filter so the two never drift.
export const isGroupStudent = (
  academicTeacherId: number | null,
  studentId: number,
  finalGrades: API.FinalGradeItem[],
): boolean =>
  academicTeacherId === null || finalGrades.some((teacher) => teacher.user.id === studentId);

// Individually-meaningful statuses the group-wide bulk action must never
// overwrite, and which are excluded from the "all present" header calc: a
// teacher set them deliberately per-student, so "mark group present" leaves
// them untouched and they don't count for/against the header toggle.
const FROZEN_STATUSES: readonly API.AttendanceValue[] = [
  AttendanceValue.EXCUSED_ABSENCE,
  AttendanceValue.PRESENT_NOT_EXERCISING,
];

export const isFrozenAttendance = (value: API.AttendanceValue | null): boolean =>
  value !== null && FROZEN_STATUSES.includes(value);

// Derives the "mark group present" header checkbox state for a single schedule
// from the whole-group attendance map. Only literal PRESENT counts; frozen
// statuses (excused absence, present-not-exercising) are excluded from the
// calc, and absent / null read as empty.
export const getScheduleAttendanceHeaderState = (
  attendanceBySchedule: Record<number, Record<number, API.AttendanceValue>>,
  scheduleId: number,
  groupStudentIds: number[],
): { allPresent: boolean; allEmpty: boolean } => {
  const valueOf = (id: number) => attendanceBySchedule[scheduleId]?.[id] ?? null;
  const relevantIds = groupStudentIds.filter((id) => !isFrozenAttendance(valueOf(id)));
  const presentCount = relevantIds.filter((id) => valueOf(id) === AttendanceValue.PRESENT).length;
  const allPresent = relevantIds.length > 0 && presentCount === relevantIds.length;
  const allEmpty = presentCount === 0;

  return { allPresent, allEmpty };
};
