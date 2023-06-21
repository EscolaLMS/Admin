export type ClassRegisterTableItemBase = {
  id: number;
  full_name: string;
  proposed_grade: string;
  final_grades?: API.FinalGradeItem;
};

export type ClassRegisterTableItemAttendance = Record<`attendance-${string}`, API.AttendanceValue>;

export type ClassRegisterTableItemExamResult = Record<`exam-${string}`, API.ExamResult>;

export type ClassRegisterTableItemFinalGrade = Record<
  `final-grade-${string}`,
  API.FinalGradeItemGrade
>;

export type ClassRegisterTableItem = ClassRegisterTableItemBase &
  ClassRegisterTableItemAttendance &
  ClassRegisterTableItemExamResult &
  ClassRegisterTableItemFinalGrade;
