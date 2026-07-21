import { describe, expect, it } from '@jest/globals';

import type { StudentExam } from './types';
import { getProposedGrade, getWeightedAverage, getWeightedAverageValue } from './utils';

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