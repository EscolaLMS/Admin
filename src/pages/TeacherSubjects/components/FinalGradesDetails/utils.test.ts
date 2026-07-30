import { describe, expect, it } from '@jest/globals';

import { ExamGradeType } from '../../../../services/escola-lms/enums';
import type { StudentExam } from './types';
import {
  buildGeneratedItemRows,
  formatPercent,
  getGradeDisplay,
  getGradeWeightedAverageValue,
  getProposedGrade,
  getWeightedAverage,
  getWeightedAverageValue,
  isGeneratedExam,
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

// AW-44: `isGeneratedExam` marks the exams the backend generates from a quiz/project topic.
// They count towards the weighted average AND the proposed grade, like any other exam.
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
    // (2*100 + 5*100) / 200 = 3.5
    const exams = [
      typedExam(ExamGradeType.Manual, 100, 40, '2'),
      typedExam(ExamGradeType.Quiz, 100, 100, '5'),
    ];

    expect(getWeightedAverage(exams)).toBe('3.50');
  });

  it('counts generated grades in the proposed grade too', () => {
    // Manual 40% + Quiz 100% -> 70% -> reaches the grade_value:50 scale ("dst")
    const exams = [
      typedExam(ExamGradeType.Manual, 100, 40, '2'),
      typedExam(ExamGradeType.Quiz, 100, 100, '5'),
    ];

    expect(getProposedGrade(exams, scales)).toBe('dst');
  });

  it('produces a proposed grade from generated exams alone', () => {
    // Quiz 100% + Project 87% -> 93.5% -> reaches the grade_value:90 scale ("bdb")
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

const generatedRow = (
  id: number,
  type: ExamGradeType,
  title: string,
  weight: number | null,
  result: number | string | null,
  grade: string | null,
): StudentExam => ({ id, type, title, weight, result: { result, grade } } as StudentExam);

// AW-44: the quiz/project table is built straight from the generated exam rows — no join.
describe('buildGeneratedItemRows (AW-44)', () => {
  it('returns an empty list when there are no exams', () => {
    expect(buildGeneratedItemRows([])).toEqual([]);
  });

  it('keeps only the generated quiz/project exams, dropping hand-created ones', () => {
    const rows = buildGeneratedItemRows([
      generatedRow(1, ExamGradeType.Quiz, 'Q', 100, 100, '5'),
      generatedRow(2, ExamGradeType.Manual, 'Written exam', 50, 80, '4'),
      generatedRow(3, ExamGradeType.Project, 'P', 75, 87, '4'),
      generatedRow(4, ExamGradeType.ManualGrades, 'Oral', null, null, '3'),
    ]);

    expect(rows.map((row) => row.name)).toEqual(['Q', 'P']);
    expect(rows.map((row) => row.kind)).toEqual(['quiz', 'project']);
  });

  it('reads name, weight, grade and percentage straight off the exam row', () => {
    const [row] = buildGeneratedItemRows([generatedRow(9, ExamGradeType.Quiz, 'Q', 45, 100, '5')]);

    expect(row).toEqual({
      key: 'exam-9',
      name: 'Q',
      kind: 'quiz',
      weight: 45,
      grade: '5',
      result_percent: 100,
    });
  });

  it('shows every same-titled quiz with its own weight — no pairing, nothing to get wrong', () => {
    // the real case: four quizzes all called "Quiz testowy AN", all 100%, distinct weights
    const rows = buildGeneratedItemRows([
      generatedRow(84, ExamGradeType.Quiz, 'Quiz testowy AN', 100, 100, '5'),
      generatedRow(82, ExamGradeType.Quiz, 'Quiz testowy AN', 15, 100, '5'),
      generatedRow(81, ExamGradeType.Quiz, 'Quiz testowy AN', 25, 100, '5'),
      generatedRow(79, ExamGradeType.Quiz, 'Quiz testowy AN', 45, 100, '5'),
    ]);

    expect(rows.map((row) => row.weight)).toEqual([100, 15, 25, 45]);
    expect(rows.every((row) => row.grade === '5' && row.result_percent === 100)).toBe(true);
    // each row keyed by its own exam id, so they are never confused
    expect(rows.map((row) => row.key)).toEqual(['exam-84', 'exam-82', 'exam-81', 'exam-79']);
  });

  it('treats a non-numeric result (a pass/fail label) as no percentage', () => {
    const [row] = buildGeneratedItemRows([
      generatedRow(1, ExamGradeType.Quiz, 'Q', 100, 'zal', '5'),
    ]);

    expect(row.result_percent).toBeNull();
    expect(row.grade).toBe('5');
  });

  it('leaves weight and grade null when the exam row carries none', () => {
    const [row] = buildGeneratedItemRows([
      generatedRow(1, ExamGradeType.Quiz, 'Q', null, 66.67, null),
    ]);

    expect(row).toMatchObject({ weight: null, grade: null, result_percent: 66.67 });
  });
});
