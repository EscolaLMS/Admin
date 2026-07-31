import { AttendanceValue, ExamGradeType } from '../../../../services/escola-lms/enums';

export const isGroupStudent = (
  academicTeacherId: number | null,
  studentId: number,
  finalGrades: API.FinalGradeItem[],
): boolean =>
  academicTeacherId === null || finalGrades.some((teacher) => teacher.user.id === studentId);

const NON_PERCENT_EXAM_TYPES: readonly ExamGradeType[] = [
  ExamGradeType.ManualPass,
  ExamGradeType.ManualGrades,
];

export const isPercentExam = (type: ExamGradeType): boolean =>
  !NON_PERCENT_EXAM_TYPES.includes(type);

export const examTitleMessageId = (weight: number | null | undefined): string =>
  weight ? 'examTitleWithWeight' : 'examTitleWithoutWeight';

const FROZEN_STATUSES: readonly API.AttendanceValue[] = [
  AttendanceValue.EXCUSED_ABSENCE,
  AttendanceValue.PRESENT_NOT_EXERCISING,
];

export const isFrozenAttendance = (value: API.AttendanceValue | null): boolean =>
  value !== null && FROZEN_STATUSES.includes(value);

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
