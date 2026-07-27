import { describe, expect, it } from '@jest/globals';

import type { StudentExam } from './types';
import {
  buildGradeRows,
  formatPercent,
  getProposedGrade,
  getWeightedAverage,
  getWeightedAverageValue,
  mergeExpandedKeys,
} from './utils';

// Minimal StudentExam: getWeightedAverage only reads `weight` and `result.result`.
const exam = (weight: number | undefined, result: number | string | null): StudentExam =>
  ({ weight, result: { result } } as StudentExam);

describe('getWeightedAverageValue', () => {
  it('computes the weighted average over weighted, numeric grades', () => {
    // (5*2 + 2*1) / (2 + 1) = 4
    expect(getWeightedAverageValue([exam(2, 5), exam(1, 2)])).toBe(4);
  });

  it('returns null when there is no grade with a weight', () => {
    expect(getWeightedAverageValue([])).toBeNull();
    expect(getWeightedAverageValue([exam(undefined, 5), exam(0, 4)])).toBeNull();
  });
});

describe('getWeightedAverage', () => {
  it('uses only grades that have a weight; grades without weight are ignored', () => {
    // second exam has no weight -> only the first (8 / 2 = 4) counts
    expect(getWeightedAverage([exam(2, 4), exam(undefined, 5)])).toBe('4.00');
  });

  it('ignores grades whose result is not numeric', () => {
    // null and string results are skipped -> only 3 (weight 1) counts
    expect(getWeightedAverage([exam(2, null), exam(2, 'abc'), exam(1, 3)])).toBe('3.00');
  });

  it('rounds mathematically to 2 decimal places', () => {
    // 10 / 3 = 3.3333... -> 3.33
    expect(getWeightedAverage([exam(1, 3), exam(1, 4), exam(1, 3)])).toBe('3.33');
    // 14 / 3 = 4.6666... -> 4.67
    expect(getWeightedAverage([exam(1, 4), exam(2, 5)])).toBe('4.67');
  });

  it('rounds half up at float boundaries (1.005 -> "1.01", not "1.00")', () => {
    // 201 / 200 = 1.005 -> "1.01" (plain Math.round(1.005*100) would give "1.00")
    expect(getWeightedAverage([exam(200, 1.005)])).toBe('1.01');
    // 203 / 200 = 1.015 -> "1.02"
    expect(getWeightedAverage([exam(200, 1.015)])).toBe('1.02');
  });

  it('returns the empty state for a non-finite result instead of "NaN"', () => {
    // typeof NaN === 'number' so it passes the weight/number filter; the finite
    // guard must still keep it out of the displayed value.
    expect(getWeightedAverage([exam(1, NaN)])).toBe('-');
  });

  it('always shows two decimal places', () => {
    // 14 / 4 = 3.5 -> "3.50", not "3.5"
    expect(getWeightedAverage([exam(1, 5), exam(3, 3)])).toBe('3.50');
  });

  it('shows an empty state ("-") instead of a divide-by-zero value when no grade has a weight', () => {
    expect(getWeightedAverage([])).toBe('-');
    expect(getWeightedAverage([exam(undefined, 5)])).toBe('-');
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
            result: mkAttempt({ attempt_id: 12, result_percent: 80, result_score: 8 }),
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

    // quiz child summarises the backend `result` (percent 80, score 8) + attempts_count
    expect(course.children?.[0]).toMatchObject({
      key: 'quiz-7-3',
      kind: 'quiz',
      result_percent: 80,
      score: 8,
      attempts: 2,
    });
    // project child keyed by topic_id, no pass/fail
    expect(course.children?.[1]).toMatchObject({
      key: 'project-7-40',
      kind: 'project',
      result_percent: 80,
      score: 4,
      is_passed: null,
    });
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
    expect(course.children?.[0]).toMatchObject({ result_percent: null, score: null, attempts: 0 });
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
