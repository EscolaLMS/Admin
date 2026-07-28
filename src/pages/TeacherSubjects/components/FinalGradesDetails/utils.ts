import type { Key } from 'react';

import type { StudentExam, StudentGradeRow } from './types';

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

export const buildGradeRows = (courses: API.StudentCourseGrades[]): StudentGradeRow[] =>
  courses.map((course) => {
    const quizRows: StudentGradeRow[] = course.quizzes.map((quiz) => ({
      key: `quiz-${course.course_id}-${quiz.quiz_id}`,
      name: quiz.title,
      kind: 'quiz',
      result_percent: quiz.result?.result_percent ?? null,
      grade: quiz.result?.grade ?? quiz.grade ?? null,
      score: quiz.result?.result_score ?? null,
      max_score: quiz.result?.max_score ?? null,
      is_passed: quiz.result?.is_passed ?? null,
    }));

    const projectRows: StudentGradeRow[] = course.projects.map((project) => ({
      key: `project-${course.course_id}-${project.topic_id}`,
      name: project.title,
      kind: 'project',
      result_percent: project.result_percent,
      grade: project.grade ?? null,
      score: project.score,
      max_score: project.max_score,
      is_passed: null,
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
