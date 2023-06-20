import type { StudentExam } from './types';

export const getProposedGrade = (
  studentExams: StudentExam[],
  tutorGradeScales: API.GradeScale[],
): string => {
  const [sum, weightsSum] = studentExams.reduce<[number, number]>(
    (acc, { result, weight }) => [acc[0] + result.result * weight, acc[1] + weight],
    [0, 0],
  );
  const weightedAverage = Number.isNaN(sum / weightsSum) ? 0 : sum / weightsSum;

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
