import type { Key } from 'react';

import type { StudentExam, StudentGradeRow } from './types';

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

// AW-23: display form of a 0–100 percentage; "-" when there is no finite value.
export const formatPercent = (value: number | null | undefined): string =>
  value === null || value === undefined || !Number.isFinite(value) ? '-' : `${value}%`;

// AW-23: next set of expanded row keys so the user's manual expand/collapse survives data
// changes: keep previously-expanded keys that still exist, plus auto-expand any keys not
// seen before (first load → every course; a newly-appearing course → expanded).
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

// AW-23: flatten the nested courses-grades payload into a single tree: one parent row
// per course, with its flagged quizzes/projects as child rows. A quiz row summarises the
// backend-provided `result` (best attempt); a course with no items has no `children`
// (rendered as a leaf).
export const buildGradeRows = (courses: API.StudentCourseGrades[]): StudentGradeRow[] =>
  courses.map((course) => {
    const quizRows: StudentGradeRow[] = course.quizzes.map((quiz) => ({
      key: `quiz-${course.course_id}-${quiz.quiz_id}`,
      name: quiz.title,
      kind: 'quiz',
      result_percent: quiz.result?.result_percent ?? null,
      score: quiz.result?.result_score ?? null,
      max_score: quiz.result?.max_score ?? null,
      is_passed: quiz.result?.is_passed ?? null,
      attempts: quiz.attempts_count,
    }));

    const projectRows: StudentGradeRow[] = course.projects.map((project) => ({
      key: `project-${course.course_id}-${project.topic_id}`,
      name: project.title,
      kind: 'project',
      result_percent: project.result_percent,
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
