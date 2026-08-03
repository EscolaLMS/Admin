import { describe, expect, it } from '@jest/globals';

import { ExamGradeType } from '../../../../services/escola-lms/enums';
import type { StudentExam } from './types';
import {
  buildGradeRows,
  formatPercent,
  formatWeightPercent,
  getGradeDisplay,
  getGradeWeightedAverageValue,
  getProposedGrade,
  getWeightedAverage,
  getWeightedAverageValue,
  isGeneratedExam,
  mergeExpandedKeys,
} from './utils';

const exam = (weight: number | undefined, result: number | string | null): StudentExam =>
  ({ weight, result: { result } } as StudentExam);

const gradeExam = (weight: number | undefined, grade: string | number | null): StudentExam =>
  ({ weight, result: { grade } } as StudentExam);

describe('getWeightedAverageValue', () => {
  it('computes the weighted average over weighted, numeric results', () => {
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

    expect(getGradeWeightedAverageValue([gradeExam(2, '5'), gradeExam(1, '2')])).toBe(4);
  });

  it('accepts numeric as well as string grades', () => {
    expect(getGradeWeightedAverageValue([gradeExam(1, 4), gradeExam(1, '5')])).toBe(4.5);
  });

  it('skips a blank or absent grade rather than counting it as 0', () => {
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

describe('getWeightedAverage', () => {
  it('uses only grades that have a weight; grades without weight are ignored', () => {
    expect(getWeightedAverage([gradeExam(2, '4'), gradeExam(undefined, '5')])).toBe('4.00');
  });

  it('ignores grades that are not numeric', () => {
    expect(getWeightedAverage([gradeExam(2, null), gradeExam(2, 'abc'), gradeExam(1, '3')])).toBe(
      '3.00',
    );
  });

  it('rounds mathematically to 2 decimal places', () => {
    expect(getWeightedAverage([gradeExam(1, '3'), gradeExam(1, '4'), gradeExam(1, '3')])).toBe(
      '3.33',
    );
    expect(getWeightedAverage([gradeExam(1, '4'), gradeExam(2, '5')])).toBe('4.67');
  });

  it('rounds half up at float boundaries (1.005 -> "1.01", not "1.00")', () => {
    expect(getWeightedAverage([gradeExam(200, 1.005)])).toBe('1.01');
    expect(getWeightedAverage([gradeExam(200, 1.015)])).toBe('1.02');
  });

  it('returns the empty state for a non-finite grade instead of "NaN"', () => {
    expect(getWeightedAverage([gradeExam(1, NaN)])).toBe('-');
  });

  it('always shows two decimal places', () => {
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
    expect(getProposedGrade([exam(1, 3)], scales)).toBe('C');
  });
});

describe('generated quiz/project exams (AW-44)', () => {
  const scales = [
    { grade_value: 0, name: 'ndst' },
    { grade_value: 50, name: 'dst' },
    { grade_value: 90, name: 'bdb' },
  ] as API.GradeScale[];

  const typedExam = (
    type: ExamGradeType,
    weight: number,
    result: number,
    grade: string,
  ): StudentExam => ({ type, weight, result: { result, grade } } as StudentExam);

  it('flags only the generated types', () => {
    expect(isGeneratedExam(ExamGradeType.Quiz)).toBe(true);
    expect(isGeneratedExam(ExamGradeType.Project)).toBe(true);
    expect(isGeneratedExam(ExamGradeType.Manual)).toBe(false);
    expect(isGeneratedExam(ExamGradeType.ManualGrades)).toBe(false);
    expect(isGeneratedExam(ExamGradeType.TeamsForms)).toBe(false);
  });

  it('counts generated grades in the displayed weighted average', () => {
    const exams = [
      typedExam(ExamGradeType.Manual, 100, 40, '2'),
      typedExam(ExamGradeType.Quiz, 100, 100, '5'),
    ];

    expect(getWeightedAverage(exams)).toBe('3.50');
  });

  it('counts generated grades in the proposed grade too', () => {
    const exams = [
      typedExam(ExamGradeType.Manual, 100, 40, '2'),
      typedExam(ExamGradeType.Quiz, 100, 100, '5'),
    ];

    expect(getProposedGrade(exams, scales)).toBe('dst');
  });

  it('produces a proposed grade from generated exams alone', () => {
    const exams = [
      typedExam(ExamGradeType.Quiz, 100, 100, '5'),
      typedExam(ExamGradeType.Project, 100, 87, '4'),
    ];

    expect(getWeightedAverage(exams)).toBe('4.50');
    expect(getProposedGrade(exams, scales)).toBe('bdb');
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

describe('formatWeightPercent', () => {
  it('renders a weight with a percent sign', () => {
    expect(formatWeightPercent(0)).toBe('0%');
    expect(formatWeightPercent(100)).toBe('100%');
  });

  it('renders blank (not "-") when the weight is absent', () => {
    expect(formatWeightPercent(null)).toBe('');
    expect(formatWeightPercent(undefined)).toBe('');
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

const quiz = (
  quiz_id: number,
  title: string,
  weight: number,
  result: Partial<API.QuizAttemptGrade> | null,
): API.CourseQuizGrade =>
  ({
    quiz_id,
    topic_id: quiz_id + 1000,
    title,
    weight,
    attempts_count: result ? 1 : 0,
    result,
    attempts: [],
  } as API.CourseQuizGrade);

const project = (
  topic_id: number,
  title: string,
  weight: number,
  fields: Partial<API.CourseProjectGrade>,
): API.CourseProjectGrade =>
  ({
    topic_id,
    title,
    weight,
    solution_id: null,
    score: null,
    max_score: null,
    result_percent: null,
    graded_at: null,
    ...fields,
  } as API.CourseProjectGrade);

const course = (
  course_id: number,
  course_title: string,
  quizzes: API.CourseQuizGrade[],
  projects: API.CourseProjectGrade[],
  is_completed = false,
): API.StudentCourseGrades => ({ course_id, course_title, is_completed, quizzes, projects });

describe('buildGradeRows', () => {
  it('returns an empty list when there are no courses', () => {
    expect(buildGradeRows([])).toEqual([]);
  });

  it('builds a course parent with its quiz and project children', () => {
    const [row] = buildGradeRows([
      course(
        130,
        'Kurs A',
        [quiz(43, 'Quiz testowy AN', 15, { result_percent: 100, grade: '5' })],
        [
          project(1039, 'Projekt testowy AN', 75, {
            score: 87,
            max_score: 100,
            result_percent: 87,
          }),
        ],
        false,
      ),
    ]);

    expect(row).toMatchObject({
      key: 'course-130',
      name: 'Kurs A',
      kind: 'course',
      is_completed: false,
    });
    expect(row.children).toEqual([
      {
        key: 'quiz-130-43',
        name: 'Quiz testowy AN',
        kind: 'quiz',
        weight: 15,
        grade: '5',
        result_percent: 100,
      },
      {
        key: 'project-130-1039',
        name: 'Projekt testowy AN',
        kind: 'project',
        weight: 75,
        grade: null,
        result_percent: 87,
      },
    ]);
  });

  it('keys rows on ids so identically-titled courses stay separate', () => {
    const rows = buildGradeRows([
      course(130, '[TEST-AN] Kurs automatyczny', [quiz(43, 'Quiz testowy AN', 15, null)], []),
      course(131, '[TEST-AN] Kurs automatyczny', [quiz(44, 'Quiz testowy AN', 45, null)], []),
    ]);

    expect(rows.map((row) => row.key)).toEqual(['course-130', 'course-131']);
    expect(rows.map((row) => row.children?.[0].key)).toEqual(['quiz-130-43', 'quiz-131-44']);
  });

  it('reads the quiz grade from the best attempt (result), null when absent', () => {
    const [graded, ungraded] = buildGradeRows([
      course(1, 'A', [quiz(10, 'Q', 20, { result_percent: 66.67, grade: 3 })], []),
      course(2, 'B', [quiz(11, 'Q', 20, null)], []),
    ]);

    expect(graded.children?.[0]).toMatchObject({ grade: 3, result_percent: 66.67 });
    expect(ungraded.children?.[0]).toMatchObject({ grade: null, result_percent: null });
  });

  it('leaves an ungraded project with null grade and percentage', () => {
    const [row] = buildGradeRows([course(1, 'A', [], [project(20, 'P', 30, {})])]);

    expect(row.children?.[0]).toMatchObject({
      key: 'project-1-20',
      weight: 30,
      grade: null,
      result_percent: null,
    });
  });

  it('drops a course with no flagged quiz/project items (no empty parents)', () => {
    expect(buildGradeRows([course(1, 'A', [], [], true)])).toEqual([]);
  });
});

describe('mergeExpandedKeys', () => {
  it('auto-expands a course the first time it is seen', () => {
    expect(mergeExpandedKeys([], ['course-1', 'course-2'], new Set())).toEqual([
      'course-1',
      'course-2',
    ]);
  });

  it('does not re-expand a seen course the user has collapsed', () => {
    expect(mergeExpandedKeys([], ['course-1'], new Set(['course-1']))).toEqual([]);
  });

  it('keeps a still-present course the user had expanded', () => {
    expect(mergeExpandedKeys(['course-1'], ['course-1'], new Set(['course-1']))).toEqual([
      'course-1',
    ]);
  });

  it('drops an expanded key that no longer exists', () => {
    expect(mergeExpandedKeys(['course-9'], ['course-1'], new Set(['course-9']))).toEqual([
      'course-1',
    ]);
  });
});
