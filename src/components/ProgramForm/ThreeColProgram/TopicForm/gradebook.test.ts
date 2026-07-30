import { describe, expect, it } from '@jest/globals';

import { DEFAULT_GRADE_WEIGHT, gradebookInitialValues, isValidGradeWeight } from './gradebook';

describe('isValidGradeWeight (AW-23)', () => {
  it('treats an empty value as valid (falls back to the default weight)', () => {
    expect(isValidGradeWeight(null)).toBe(true);
    expect(isValidGradeWeight(undefined)).toBe(true);
    expect(isValidGradeWeight('')).toBe(true);
  });

  it('accepts positive numbers (including numeric strings)', () => {
    expect(isValidGradeWeight(1)).toBe(true);
    expect(isValidGradeWeight(0.25)).toBe(true);
    expect(isValidGradeWeight('2.5')).toBe(true);
  });

  it('rejects zero, negatives and non-numeric values', () => {
    expect(isValidGradeWeight(0)).toBe(false);
    expect(isValidGradeWeight(-1)).toBe(false);
    expect(isValidGradeWeight('abc')).toBe(false);
    expect(isValidGradeWeight(NaN)).toBe(false);
  });
});

describe('gradebookInitialValues (AW-23)', () => {
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
