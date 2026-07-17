import { describe, expect, it } from '@jest/globals';

import { buildSemesterSearch, parseSemesterId } from './helpers';

describe('parseSemesterId', () => {
  it('reads a numeric semester id from the query string', () => {
    expect(parseSemesterId('?semester_id=5')).toBe(5);
  });

  it('returns undefined when the param is absent', () => {
    expect(parseSemesterId('')).toBeUndefined();
    expect(parseSemesterId('?other=1')).toBeUndefined();
  });

  it('returns undefined for a non-numeric value', () => {
    expect(parseSemesterId('?semester_id=abc')).toBeUndefined();
  });
});

describe('buildSemesterSearch', () => {
  it('sets the semester id when one is selected', () => {
    expect(buildSemesterSearch('', 5)).toBe('semester_id=5');
  });

  it('removes the semester id when cleared', () => {
    expect(buildSemesterSearch('?semester_id=5', undefined)).toBe('');
  });

  it('preserves unrelated params', () => {
    expect(buildSemesterSearch('?page=2', 5)).toBe('page=2&semester_id=5');
    expect(buildSemesterSearch('?page=2&semester_id=5', undefined)).toBe('page=2');
  });
});
