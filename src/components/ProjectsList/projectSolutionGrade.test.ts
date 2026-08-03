import { describe, expect, it } from '@jest/globals';

import { MIN_SCORE, resolveEffectiveMaxScore, validateScore } from './projectSolutionGrade';

describe('resolveEffectiveMaxScore', () => {
  it('prefers the explicit override over the solution value', () => {
    expect(resolveEffectiveMaxScore(10, 5)).toBe(10);
  });

  it('falls back to the solution value when no override is given', () => {
    expect(resolveEffectiveMaxScore(undefined, 5)).toBe(5);
  });

  it('returns undefined when neither is known', () => {
    expect(resolveEffectiveMaxScore(undefined, undefined)).toBeUndefined();
  });

  it('treats an override of 0 as a real value (not falsy fallback)', () => {
    expect(resolveEffectiveMaxScore(0, 5)).toBe(0);
  });
});

describe('validateScore', () => {
  it('treats a nullish score as valid (presence is the required rule)', () => {
    expect(validateScore(null, 10)).toBeNull();
    expect(validateScore(undefined, 10)).toBeNull();
  });

  it('accepts the min score and any value up to the max, inclusive', () => {
    expect(validateScore(MIN_SCORE, 10)).toBeNull();
    expect(validateScore(5, 10)).toBeNull();
    expect(validateScore(10, 10)).toBeNull();
  });

  it('rejects a negative score', () => {
    expect(validateScore(-1, 10)).toBe('negative');
  });

  it('rejects a score above the max', () => {
    expect(validateScore(11, 10)).toBe('exceeds_max');
  });

  it('skips the max check when the max is unknown', () => {
    expect(validateScore(9999, undefined)).toBeNull();
    expect(validateScore(-1, undefined)).toBe('negative');
  });
});