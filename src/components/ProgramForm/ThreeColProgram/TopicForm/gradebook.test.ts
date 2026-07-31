import { describe, expect, it } from '@jest/globals';

import {
  DEFAULT_GRADE_WEIGHT,
  MAX_GRADE_WEIGHT,
  MIN_GRADE_WEIGHT,
  gradebookInitialValues,
  isValidGradeWeight,
} from './gradebook';

describe('isValidGradeWeight', () => {
  it('treats an empty value as valid (falls back to the default weight)', () => {
    expect(isValidGradeWeight(null)).toBe(true);
    expect(isValidGradeWeight(undefined)).toBe(true);
    expect(isValidGradeWeight('')).toBe(true);
  });

  it('accepts whole percentages across the 1-100 range, inclusive (numeric strings too)', () => {
    expect(isValidGradeWeight(MIN_GRADE_WEIGHT)).toBe(true);
    expect(isValidGradeWeight(MAX_GRADE_WEIGHT)).toBe(true);
    expect(isValidGradeWeight(50)).toBe(true);
    expect(isValidGradeWeight('50')).toBe(true);
  });

  it('rejects decimals — whole percent only, matching ExamForm', () => {
    expect(isValidGradeWeight(2.5)).toBe(false);
    expect(isValidGradeWeight(99.9)).toBe(false);
    expect(isValidGradeWeight('12.5')).toBe(false);
  });

  it('rejects values below the 1% floor — the old scale treated these as valid', () => {
    expect(isValidGradeWeight(0)).toBe(false);
    expect(isValidGradeWeight(0.25)).toBe(false);
    expect(isValidGradeWeight(-1)).toBe(false);
  });

  it('rejects values above 100%', () => {
    expect(isValidGradeWeight(101)).toBe(false);
    expect(isValidGradeWeight('150')).toBe(false);
  });

  it('rejects non-numeric values', () => {
    expect(isValidGradeWeight('abc')).toBe(false);
    expect(isValidGradeWeight(NaN)).toBe(false);
    expect(isValidGradeWeight(Infinity)).toBe(false);
  });
});

describe('grade weight scale (AW-44)', () => {
  it('defaults to a full-weight item, i.e. 100%', () => {
    expect(DEFAULT_GRADE_WEIGHT).toBe(100);
    expect(DEFAULT_GRADE_WEIGHT).toBe(MAX_GRADE_WEIGHT);
  });
});

describe('gradebookInitialValues', () => {
  it('defaults to not counting to grade with the default weight', () => {
    expect(gradebookInitialValues(undefined)).toEqual({
      counts_to_grade: false,
      weight: DEFAULT_GRADE_WEIGHT,
    });
    expect(gradebookInitialValues(null)).toEqual({
      counts_to_grade: false,
      weight: DEFAULT_GRADE_WEIGHT,
    });
    expect(gradebookInitialValues({})).toEqual({
      counts_to_grade: false,
      weight: DEFAULT_GRADE_WEIGHT,
    });
  });

  it('keeps the saved flag and weight', () => {
    expect(gradebookInitialValues({ counts_to_grade: true, weight: 50 })).toEqual({
      counts_to_grade: true,
      weight: 50,
    });
  });

  it('seeds a stored out-of-range weight as-is, leaving the field to flag it', () => {
    expect(gradebookInitialValues({ counts_to_grade: true, weight: 2.5 })).toEqual({
      counts_to_grade: true,
      weight: 2.5,
    });
  });

  it('falls back to the default weight when the flag is set but the weight is not', () => {
    expect(gradebookInitialValues({ counts_to_grade: true })).toEqual({
      counts_to_grade: true,
      weight: DEFAULT_GRADE_WEIGHT,
    });
  });
});
