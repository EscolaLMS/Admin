import { describe, expect, it } from '@jest/globals';

import { isValidGradeWeight } from './gradebook';

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
