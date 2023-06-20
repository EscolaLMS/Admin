export type ClassRegisterTableItemBase = { id: number; full_name: string; proposed_grade: string };

export type ClassRegisterTableItemAttendance = Record<`attendance-${string}`, API.AttendanceValue>;

export type ClassRegisterTableItemExamResult = Record<`exam-${string}`, API.ExamResult>;

export type ClassRegisterTableItem = ClassRegisterTableItemBase &
  ClassRegisterTableItemAttendance &
  ClassRegisterTableItemExamResult;
