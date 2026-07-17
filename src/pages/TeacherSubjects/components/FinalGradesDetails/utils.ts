import type { StudentExam } from './types';

export const getStudentExamsFromExams = (exams: API.Exam[], student_id: number): StudentExam[] =>
  exams.reduce<StudentExam[]>((acc, { results, ...exam }) => {
    const result = results.find((examResult) => examResult.user_id === student_id);
    if (!result) return acc;

    return [...acc, { ...exam, result }];
  }, []);

// Weighted average of a student's exam results. Only exams that carry a weight
// (backend field `exam.weight`) AND a numeric result are counted; everything
// else is skipped. Returns null when there is no weighted grade to average, or
// when the result is not finite, so callers can render an empty state instead
// of a divide-by-zero / NaN value.
export const getWeightedAverageValue = (studentExams: StudentExam[]): number | null => {
  const [sum, weightsSum] = studentExams.reduce<[number, number]>(
    (acc, { result, weight }) => {
      if (weight && typeof result.result === 'number') {
        return [acc[0] + result.result * weight, acc[1] + weight];
      } else {
        return acc;
      }
    },
    [0, 0],
  );

  if (weightsSum === 0) return null;

  const average = sum / weightsSum;

  return Number.isFinite(average) ? average : null;
};

// Display form of the weighted average: mathematically rounded to 2 decimal
// places, or "-" when there is no weighted grade to average. The Number.EPSILON
// nudge avoids the classic float half-boundary error (e.g. 1.005 -> "1.01").
export const getWeightedAverage = (studentExams: StudentExam[]): string => {
  const value = getWeightedAverageValue(studentExams);
  if (value === null) return '-';

  return (Math.round((value + Number.EPSILON) * 100) / 100).toFixed(2);
};

export const getProposedGrade = (
  studentExams: StudentExam[],
  tutorGradeScales: API.GradeScale[],
): string => {
  const weightedAverage = getWeightedAverageValue(studentExams) ?? 0;

  const sortedGradeScales = tutorGradeScales
    .sort((a, b) => a.grade_value - b.grade_value)
    .reduce<(API.GradeScale & { isWeightedAverageGreater: boolean })[]>(
      (acc, curr) => [
        ...acc,
        {
          ...curr,
          isWeightedAverageGreater: weightedAverage >= curr.grade_value,
        },
      ],
      [],
    );

  if (sortedGradeScales.every(({ isWeightedAverageGreater }) => isWeightedAverageGreater)) {
    return sortedGradeScales.at(-1)?.name ?? '';
  }

  const firstFalseIndex = sortedGradeScales.findIndex(
    ({ isWeightedAverageGreater }) => !isWeightedAverageGreater,
  );
  if (firstFalseIndex < 0) return '';

  return sortedGradeScales[firstFalseIndex - 1]?.name;
};

export const getScalesBySubjectScaleFormId = (
  s_subject_scale_form_id: number,
  tutorGrades: API.SubjectTutorGradeScale[],
): API.GradeScale[] | undefined =>
  tutorGrades.find(
    (subjectTutorGradeScale) =>
      subjectTutorGradeScale.s_subject_scale_form_id === s_subject_scale_form_id,
  )?.scale;
