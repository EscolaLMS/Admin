// Relative, not `@/` — jest has no alias resolution and this module is unit tested.
// enums.ts is import-free, so this pulls in no component graph.
import { ExamGradeType } from '../../../../services/escola-lms/enums';
import type { StudentExam, StudentGradeRow } from './types';

/**
 * AW-44: exams the backend generates from a counts_to_grade quiz/project topic. They are
 * never graded by hand, so they are read-only in the Exams list, and they count towards the
 * displayed weighted average but NOT towards the proposed grade — see getProposedGrade.
 */
const GENERATED_EXAM_TYPES: readonly ExamGradeType[] = [ExamGradeType.Quiz, ExamGradeType.Project];

export const isGeneratedExam = (type: ExamGradeType): boolean =>
  GENERATED_EXAM_TYPES.includes(type);

export const getStudentExamsFromExams = (exams: API.Exam[], student_id: number): StudentExam[] =>
  exams.reduce<StudentExam[]>((acc, { results, ...exam }) => {
    const result = results.find((examResult) => examResult.user_id === student_id);
    if (!result) return acc;

    return [...acc, { ...exam, result }];
  }, []);

// Only exams carrying a weight AND a usable value are counted; everything else is skipped.
// Returns null when there is nothing to average, so callers render an empty state instead of
// a divide-by-zero / NaN value.
const getWeightedAverageOf = (
  studentExams: StudentExam[],
  valueOf: (result: API.ExamResult) => number | null,
): number | null => {
  const [sum, weightsSum] = studentExams.reduce<[number, number]>(
    (acc, { result, weight }) => {
      const value = valueOf(result);

      return weight && value !== null ? [acc[0] + value * weight, acc[1] + weight] : acc;
    },
    [0, 0],
  );

  if (weightsSum === 0) return null;

  const average = sum / weightsSum;

  return Number.isFinite(average) ? average : null;
};

// Percentage-based. Feeds getProposedGrade, whose scale thresholds (`grade_value`) are
// percentages — do not switch this to grades.
export const getWeightedAverageValue = (studentExams: StudentExam[]): number | null =>
  getWeightedAverageOf(studentExams, ({ result }) => (typeof result === 'number' ? result : null));

// Grade-based, from the backend `grade` on each exam result. A blank/absent grade must not
// fall through to Number('') === 0, which would drag the average down.
export const getGradeWeightedAverageValue = (studentExams: StudentExam[]): number | null =>
  getWeightedAverageOf(studentExams, ({ grade }) => {
    if (grade === null || grade === undefined || String(grade).trim() === '') return null;

    const value = Number(grade);

    return Number.isFinite(value) ? value : null;
  });

// The displayed "średnia ważona" — grades weighted by exam weight, rounded to 2 decimal
// places. The Number.EPSILON nudge avoids the float half-boundary error (1.005 -> "1.01").
export const getWeightedAverage = (studentExams: StudentExam[]): string => {
  const value = getGradeWeightedAverageValue(studentExams);
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

export const formatPercent = (value: number | null | undefined): string =>
  value === null || value === undefined || !Number.isFinite(value) ? '-' : `${value}%`;

export const getGradeDisplay = (
  grade: string | number | null | undefined,
  percent: number | null | undefined,
): { grade: string | null; percent: string | null } => {
  const trimmedGrade = grade === null || grade === undefined ? '' : String(grade).trim();
  const formattedPercent = formatPercent(percent);

  return {
    grade: trimmedGrade === '' ? null : trimmedGrade,
    percent: formattedPercent === '-' ? null : formattedPercent,
  };
};

/**
 * AW-44: the quiz/project grades table is built ENTIRELY from the generated exam rows. That is
 * the one place the backend publishes each item's grade AND weight alongside its name, type and
 * percentage — so every cell is authoritative and nothing is joined, paired or derived. There
 * is no way for a field to land on the wrong row.
 *
 * The trade-off, forced by the data: an exam row carries no `course_id` and no raw score
 * (`result_score`/`max_score` live only in courses-grades), so this table is a flat list with
 * no per-course grouping and no score column. courses-grades is no longer read for it.
 *
 * Only the generated types appear — a hand-created exam is not a quiz/project grade. Every
 * generated row has a result (the backend creates it at grading time), so there is nothing to
 * filter out.
 */
export const buildGeneratedItemRows = (studentExams: StudentExam[]): StudentGradeRow[] =>
  studentExams
    .filter((exam) => isGeneratedExam(exam.type))
    .map((exam) => ({
      key: `exam-${exam.id}`,
      name: exam.title,
      kind: exam.type === ExamGradeType.Project ? 'project' : 'quiz',
      weight: exam.weight ?? null,
      grade: exam.result.grade ?? null,
      // Only a numeric result is a percentage — a pass/fail label is not.
      result_percent: typeof exam.result.result === 'number' ? exam.result.result : null,
    }));

export const getScalesBySubjectScaleFormId = (
  s_subject_scale_form_id: number,
  tutorGrades: API.SubjectTutorGradeScale[],
): API.GradeScale[] | undefined =>
  tutorGrades.find(
    (subjectTutorGradeScale) =>
      subjectTutorGradeScale.s_subject_scale_form_id === s_subject_scale_form_id,
  )?.scale;
