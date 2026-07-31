import type { Key } from 'react';

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

// Keeps the courses the user still has expanded and auto-expands each one the first time it
// appears (tracked in `seen`), so grades show on open without re-expanding by hand.
export const mergeExpandedKeys = (
  prevExpanded: Key[],
  currentKeys: string[],
  seen: Set<string>,
): Key[] => {
  const currentSet = new Set(currentKeys);
  const kept = prevExpanded.filter((key) => currentSet.has(String(key)));
  const fresh = currentKeys.filter((key) => !seen.has(key));
  return Array.from(new Set<Key>([...kept, ...fresh]));
};

/**
 * The per-course quiz/project grades tree from courses-grades: a parent row per course, child
 * rows per flagged item. Keys use ids, never titles — courses can share a title and collide.
 * `grade` is absent until the backend ships it, so the cell falls back to the percentage.
 * Courses with no flagged items are dropped so the table shows no empty parents.
 */
export const buildGradeRows = (courses: API.StudentCourseGrades[]): StudentGradeRow[] =>
  courses
    .filter((course) => course.quizzes.length || course.projects.length)
    .map((course) => {
      const quizRows: StudentGradeRow[] = course.quizzes.map((quiz) => ({
        key: `quiz-${course.course_id}-${quiz.quiz_id}`,
        name: quiz.title,
        kind: 'quiz',
        weight: quiz.weight ?? null,
        grade: quiz.result?.grade ?? null,
        result_percent: quiz.result?.result_percent ?? null,
      }));

      const projectRows: StudentGradeRow[] = course.projects.map((project) => ({
        key: `project-${course.course_id}-${project.topic_id}`,
        name: project.title,
        kind: 'project',
        weight: project.weight ?? null,
        grade: project.grade ?? null,
        result_percent: project.result_percent,
      }));

      const children = [...quizRows, ...projectRows];

      return {
        key: `course-${course.course_id}`,
        name: course.course_title,
        kind: 'course',
        is_completed: course.is_completed,
        children: children.length ? children : undefined,
      };
    });

export const getScalesBySubjectScaleFormId = (
  s_subject_scale_form_id: number,
  tutorGrades: API.SubjectTutorGradeScale[],
): API.GradeScale[] | undefined =>
  tutorGrades.find(
    (subjectTutorGradeScale) =>
      subjectTutorGradeScale.s_subject_scale_form_id === s_subject_scale_form_id,
  )?.scale;
