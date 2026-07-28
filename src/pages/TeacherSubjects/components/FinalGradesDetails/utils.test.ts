import { describe, expect, it } from '@jest/globals';

import type { StudentExam } from './types';
import {
  buildGradeRows,
  formatPercent,
  getGradeDisplay,
  getGradeWeightedAverageValue,
  getProposedGrade,
  getWeightedAverage,
  getWeightedAverageValue,
  mergeExpandedKeys,
} from './utils';

// Minimal StudentExam stubs: the averages only read `weight` plus one field of `result`.
const exam = (weight: number | undefined, result: number | string | null): StudentExam =>
  ({ weight, result: { result } } as StudentExam);

const gradeExam = (weight: number | undefined, grade: string | number | null): StudentExam =>
  ({ weight, result: { grade } } as StudentExam);

// Percentage-based; still what getProposedGrade consumes.
describe('getWeightedAverageValue', () => {
  it('computes the weighted average over weighted, numeric results', () => {
    // (5*2 + 2*1) / (2 + 1) = 4
    expect(getWeightedAverageValue([exam(2, 5), exam(1, 2)])).toBe(4);
  });

  it('returns null when there is no result with a weight', () => {
    expect(getWeightedAverageValue([])).toBeNull();
    expect(getWeightedAverageValue([exam(undefined, 5), exam(0, 4)])).toBeNull();
  });

  it('ignores the `grade` field entirely', () => {
    expect(getWeightedAverageValue([gradeExam(1, '5')])).toBeNull();
  });
});

describe('getGradeWeightedAverageValue', () => {
  it('weights the backend grades by exam weight', () => {
    // (5*2 + 2*1) / (2 + 1) = 4
    expect(getGradeWeightedAverageValue([gradeExam(2, '5'), gradeExam(1, '2')])).toBe(4);
  });

  it('accepts numeric as well as string grades', () => {
    expect(getGradeWeightedAverageValue([gradeExam(1, 4), gradeExam(1, '5')])).toBe(4.5);
  });

  it('skips a blank or absent grade rather than counting it as 0', () => {
    // Number('') and Number(null) are both 0 — a pass/fail exam with no grade must not
    // drag the average down to 0.
    expect(getGradeWeightedAverageValue([gradeExam(2, null), gradeExam(1, '3')])).toBe(3);
    expect(getGradeWeightedAverageValue([gradeExam(2, ''), gradeExam(1, '3')])).toBe(3);
    expect(getGradeWeightedAverageValue([gradeExam(2, '  '), gradeExam(1, '3')])).toBe(3);
  });

  it('skips a non-numeric grade (e.g. a pass/fail label)', () => {
    expect(getGradeWeightedAverageValue([gradeExam(2, 'zal'), gradeExam(1, '3')])).toBe(3);
  });

  it('ignores the `result` percentage entirely', () => {
    expect(getGradeWeightedAverageValue([exam(1, 80)])).toBeNull();
  });

  it('returns null when nothing is weighted', () => {
    expect(getGradeWeightedAverageValue([])).toBeNull();
    expect(getGradeWeightedAverageValue([gradeExam(undefined, '5'), gradeExam(0, '4')])).toBeNull();
  });
});

// The displayed "średnia ważona" — grade-based.
describe('getWeightedAverage', () => {
  it('uses only grades that have a weight; grades without weight are ignored', () => {
    // second exam has no weight -> only the first (8 / 2 = 4) counts
    expect(getWeightedAverage([gradeExam(2, '4'), gradeExam(undefined, '5')])).toBe('4.00');
  });

  it('ignores grades that are not numeric', () => {
    // null and label grades are skipped -> only 3 (weight 1) counts
    expect(getWeightedAverage([gradeExam(2, null), gradeExam(2, 'abc'), gradeExam(1, '3')])).toBe(
      '3.00',
    );
  });

  it('rounds mathematically to 2 decimal places', () => {
    // 10 / 3 = 3.3333... -> 3.33
    expect(getWeightedAverage([gradeExam(1, '3'), gradeExam(1, '4'), gradeExam(1, '3')])).toBe(
      '3.33',
    );
    // 14 / 3 = 4.6666... -> 4.67
    expect(getWeightedAverage([gradeExam(1, '4'), gradeExam(2, '5')])).toBe('4.67');
  });

  it('rounds half up at float boundaries (1.005 -> "1.01", not "1.00")', () => {
    // 201 / 200 = 1.005 -> "1.01" (plain Math.round(1.005*100) would give "1.00")
    expect(getWeightedAverage([gradeExam(200, 1.005)])).toBe('1.01');
    // 203 / 200 = 1.015 -> "1.02"
    expect(getWeightedAverage([gradeExam(200, 1.015)])).toBe('1.02');
  });

  it('returns the empty state for a non-finite grade instead of "NaN"', () => {
    expect(getWeightedAverage([gradeExam(1, NaN)])).toBe('-');
  });

  it('always shows two decimal places', () => {
    // 14 / 4 = 3.5 -> "3.50", not "3.5"
    expect(getWeightedAverage([gradeExam(1, '5'), gradeExam(3, '3')])).toBe('3.50');
  });

  it('shows an empty state ("-") instead of a divide-by-zero value when no grade has a weight', () => {
    expect(getWeightedAverage([])).toBe('-');
    expect(getWeightedAverage([gradeExam(undefined, '5')])).toBe('-');
  });
});

describe('getProposedGrade (regression: empty weighted grades no longer NaN)', () => {
  const scales = [
    { grade_value: 0, name: 'F' },
    { grade_value: 3, name: 'C' },
  ] as API.GradeScale[];

  it('still maps a student with no weighted grade to the lowest scale (average treated as 0)', () => {
    expect(getProposedGrade([], scales)).toBe('F');
  });

  it('maps the weighted average onto the matching scale', () => {
    // average 3 -> reaches the grade_value:3 scale
    expect(getProposedGrade([exam(1, 3)], scales)).toBe('C');
  });
});

describe('formatPercent (AW-23)', () => {
  it('renders a finite value with a percent sign', () => {
    expect(formatPercent(0)).toBe('0%');
    expect(formatPercent(85)).toBe('85%');
  });

  it('renders "-" for null / undefined / non-finite values', () => {
    expect(formatPercent(null)).toBe('-');
    expect(formatPercent(undefined)).toBe('-');
    expect(formatPercent(NaN)).toBe('-');
  });
});

describe('getGradeDisplay (AW-23)', () => {
  it('returns both parts when the item has a grade and a percentage', () => {
    expect(getGradeDisplay(4, 80)).toEqual({ grade: '4', percent: '80%' });
    expect(getGradeDisplay('B', 85)).toEqual({ grade: 'B', percent: '85%' });
  });

  it('keeps a zero grade and a zero percentage (falsy but real values)', () => {
    expect(getGradeDisplay(0, 0)).toEqual({ grade: '0', percent: '0%' });
  });

  it('returns no percentage part when there is none to show', () => {
    expect(getGradeDisplay(4, null)).toEqual({ grade: '4', percent: null });
    expect(getGradeDisplay(4, undefined)).toEqual({ grade: '4', percent: null });
    expect(getGradeDisplay(4, NaN)).toEqual({ grade: '4', percent: null });
  });

  it('returns only the percentage while the backend grade field is absent', () => {
    expect(getGradeDisplay(null, 80)).toEqual({ grade: null, percent: '80%' });
    expect(getGradeDisplay(undefined, 80)).toEqual({ grade: null, percent: '80%' });
    // a blank grade is treated as no grade, so the cell never renders an empty bold value
    expect(getGradeDisplay('', 80)).toEqual({ grade: null, percent: '80%' });
    expect(getGradeDisplay('  ', 80)).toEqual({ grade: null, percent: '80%' });
  });

  it('trims a padded grade', () => {
    expect(getGradeDisplay(' 4 ', 80)).toEqual({ grade: '4', percent: '80%' });
  });

  it('returns neither part when the item is ungraded (cell renders "-")', () => {
    expect(getGradeDisplay(null, null)).toEqual({ grade: null, percent: null });
  });
});

const mkAttempt = (over: Partial<API.QuizAttemptGrade> = {}): API.QuizAttemptGrade =>
  ({
    attempt_id: 1,
    result_score: 10,
    max_score: 10,
    result_percent: 100,
    correct_answers_count: 1,
    is_passed: null,
    end_at: '2026-01-01T10:00:00Z',
    ...over,
  } as API.QuizAttemptGrade);

const mkCourse = (over: Partial<API.StudentCourseGrades> = {}): API.StudentCourseGrades =>
  ({
    course_id: 1,
    course_title: 'Course',
    is_completed: false,
    quizzes: [],
    projects: [],
    ...over,
  } as API.StudentCourseGrades);

describe('buildGradeRows (AW-23)', () => {
  it('returns an empty list for no courses', () => {
    expect(buildGradeRows([])).toEqual([]);
  });

  it('maps a course to a parent row with quiz/project child rows keyed by course_id', () => {
    const rows = buildGradeRows([
      mkCourse({
        course_id: 7,
        course_title: 'Maths',
        is_completed: true,
        quizzes: [
          {
            quiz_id: 3,
            topic_id: 30,
            title: 'Quiz A',
            attempts_count: 2,
            // the backend-provided representative (best) attempt drives the row
            result: mkAttempt({ attempt_id: 12, result_percent: 80, result_score: 8, grade: 4 }),
            attempts: [mkAttempt({ result_percent: 50 }), mkAttempt({ result_percent: 80 })],
          } as API.CourseQuizGrade,
        ],
        projects: [
          {
            topic_id: 40,
            title: 'Project B',
            solution_id: 5,
            score: 4,
            max_score: 5,
            result_percent: 80,
            grade: 4,
            graded_at: null,
          } as API.CourseProjectGrade,
        ],
      }),
    ]);

    expect(rows).toHaveLength(1);
    const course = rows[0];
    expect(course).toMatchObject({
      key: 'course-7',
      name: 'Maths',
      kind: 'course',
      is_completed: true,
    });
    expect(course.children).toHaveLength(2);

    // quiz child summarises the backend `result` (grade 4, percent 80, score 8)
    expect(course.children?.[0]).toMatchObject({
      key: 'quiz-7-3',
      kind: 'quiz',
      grade: 4,
      result_percent: 80,
      score: 8,
    });
    // project child keyed by topic_id, no pass/fail
    expect(course.children?.[1]).toMatchObject({
      key: 'project-7-40',
      kind: 'project',
      grade: 4,
      result_percent: 80,
      score: 4,
      is_passed: null,
    });
  });

  it('reads a quiz grade placed beside `result` instead of inside it', () => {
    const [course] = buildGradeRows([
      mkCourse({
        quizzes: [
          {
            quiz_id: 1,
            topic_id: 10,
            title: 'Q',
            attempts_count: 1,
            grade: 3,
            result: mkAttempt({ result_percent: 60 }),
            attempts: [],
          } as API.CourseQuizGrade,
        ],
      }),
    ]);
    expect(course.children?.[0]).toMatchObject({ grade: 3, result_percent: 60 });
  });

  it('leaves the grade null while the backend does not send one', () => {
    const [course] = buildGradeRows([
      mkCourse({
        quizzes: [
          {
            quiz_id: 1,
            topic_id: 10,
            title: 'Q',
            attempts_count: 1,
            result: mkAttempt({ result_percent: 60 }),
            attempts: [],
          } as API.CourseQuizGrade,
        ],
        projects: [
          {
            topic_id: 40,
            title: 'P',
            solution_id: null,
            score: null,
            max_score: null,
            result_percent: null,
            graded_at: null,
          } as API.CourseProjectGrade,
        ],
      }),
    ]);
    expect(course.children?.[0]).toMatchObject({ grade: null, result_percent: 60 });
    expect(course.children?.[1]).toMatchObject({ grade: null, result_percent: null });
  });

  it('renders an ungraded quiz/project with null result as empty values, not a crash', () => {
    const [course] = buildGradeRows([
      mkCourse({
        course_id: 8,
        quizzes: [
          {
            quiz_id: 1,
            topic_id: 10,
            title: 'Q',
            attempts_count: 0,
            result: null,
            attempts: [],
          } as API.CourseQuizGrade,
        ],
      }),
    ]);
    expect(course.children?.[0]).toMatchObject({ result_percent: null, score: null, grade: null });
  });

  it('leaves a course with no flagged items as a childless leaf', () => {
    const [course] = buildGradeRows([mkCourse({ course_id: 2, quizzes: [], projects: [] })]);
    expect(course.children).toBeUndefined();
  });
});

describe('mergeExpandedKeys (AW-23)', () => {
  it('expands every course on first load (nothing seen yet)', () => {
    expect(mergeExpandedKeys([], ['course-1', 'course-2'], new Set())).toEqual([
      'course-1',
      'course-2',
    ]);
  });

  it('preserves a manual collapse of an already-seen course', () => {
    const seen = new Set(['course-1', 'course-2']);
    // course-1 was collapsed by the user (absent from prev); nothing new to auto-expand
    expect(mergeExpandedKeys(['course-2'], ['course-1', 'course-2'], seen)).toEqual(['course-2']);
  });

  it('drops keys that no longer exist and auto-expands the new ones', () => {
    const seen = new Set(['course-1']);
    expect(mergeExpandedKeys(['course-1'], ['course-2'], seen)).toEqual(['course-2']);
  });

  it('auto-expands a newly-added course while keeping the current collapse state', () => {
    const seen = new Set(['course-1', 'course-2']);
    // user collapsed course-2 (absent from prev); course-3 is brand new -> expand it
    expect(mergeExpandedKeys(['course-1'], ['course-1', 'course-2', 'course-3'], seen)).toEqual([
      'course-1',
      'course-3',
    ]);
  });
});
