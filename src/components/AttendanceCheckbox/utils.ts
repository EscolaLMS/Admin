import { AttendanceValue } from '@/services/escola-lms/enums';
import type { AttendanceMap, Status } from './types';

export function parseToStatus(attendance: AttendanceValue | null): Status {
  const attendanceMapped = attendance === null ? AttendanceValue.ABSENT : attendance;

  const attendanceMap: AttendanceMap = {
    [AttendanceValue.PRESENT]: { ch1: true, ch2: false },
    [AttendanceValue.PRESENT_NOT_EXERCISING]: { ch1: true, ch2: true },
    [AttendanceValue.ABSENT]: { ch1: false, ch2: false },
    [AttendanceValue.EXCUSED_ABSENCE]: { ch1: false, ch2: true },
  };

  return attendanceMap[attendanceMapped] ?? { ch1: false, ch2: false };
}

export function parseToAttendanceValue({ ch1, ch2 }: Status): AttendanceValue {
  const statusStr = `${ch1}_${ch2}`;

  const statusMap = {
    true_false: AttendanceValue.PRESENT,
    true_true: AttendanceValue.PRESENT_NOT_EXERCISING,
    false_false: AttendanceValue.ABSENT,
    false_true: AttendanceValue.EXCUSED_ABSENCE,
  };

  //@ts-ignore
  return statusMap[statusStr] ?? AttendanceValue.ABSENT;
}
