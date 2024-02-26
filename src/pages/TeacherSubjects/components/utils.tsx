import { ExamGradePassType, ExamGradeType } from '@/services/escola-lms/enums';

export const defaultResaltGrade = (examType: ExamGradeType) => {
  switch (examType) {
    case ExamGradeType.ManualGrades:
      return 2;
    case ExamGradeType.ManualPass:
      return ExamGradePassType.Failed;
    default:
      return 0;
  }
};
