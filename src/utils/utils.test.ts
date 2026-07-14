import { expect } from '@jest/globals';
import { TUTOR_FEEDBACK_MAX_LENGTH, isUrl, normalizeTutorFeedback } from './utils';

describe('isUrl tests', () => {
  it('should return false for invalid and corner case inputs', () => {
    expect(isUrl([] as any)).toBeFalsy();
    expect(isUrl({} as any)).toBeFalsy();
    expect(isUrl(false as any)).toBeFalsy();
    expect(isUrl(true as any)).toBeFalsy();
    expect(isUrl(NaN as any)).toBeFalsy();
    expect(isUrl(null as any)).toBeFalsy();
    expect(isUrl(undefined as any)).toBeFalsy();
    expect(isUrl('')).toBeFalsy();
  });

  it('should return false for invalid URLs', () => {
    expect(isUrl('foo')).toBeFalsy();
    expect(isUrl('bar')).toBeFalsy();
    expect(isUrl('bar/test')).toBeFalsy();
    expect(isUrl('http:/example.com/')).toBeFalsy();
    expect(isUrl('ttp://example.com/')).toBeFalsy();
  });

  it('should return true for valid URLs', () => {
    expect(isUrl('http://example.com/')).toBeTruthy();
    expect(isUrl('https://example.com/')).toBeTruthy();
    expect(isUrl('http://example.com/test/123')).toBeTruthy();
    expect(isUrl('https://example.com/test/123')).toBeTruthy();
    expect(isUrl('http://example.com/test/123?foo=bar')).toBeTruthy();
    expect(isUrl('https://example.com/test/123?foo=bar')).toBeTruthy();
    expect(isUrl('http://www.example.com/')).toBeTruthy();
    expect(isUrl('https://www.example.com/')).toBeTruthy();
    expect(isUrl('http://www.example.com/test/123')).toBeTruthy();
    expect(isUrl('https://www.example.com/test/123')).toBeTruthy();
    expect(isUrl('http://www.example.com/test/123?foo=bar')).toBeTruthy();
    expect(isUrl('https://www.example.com/test/123?foo=bar')).toBeTruthy();
  });
});

describe('normalizeTutorFeedback tests', () => {
  it('should return null for empty, blank, or missing input', () => {
    expect(normalizeTutorFeedback(undefined)).toBeNull();
    expect(normalizeTutorFeedback(null)).toBeNull();
    expect(normalizeTutorFeedback('')).toBeNull();
    expect(normalizeTutorFeedback('   ')).toBeNull();
    expect(normalizeTutorFeedback('\n\t  ')).toBeNull();
  });

  it('should trim surrounding whitespace', () => {
    expect(normalizeTutorFeedback('  hi  ')).toBe('hi');
    expect(normalizeTutorFeedback('\n feedback \t')).toBe('feedback');
  });

  it('should return already-clean text unchanged', () => {
    expect(normalizeTutorFeedback('hello')).toBe('hello');
  });

  it('should preserve internal whitespace and newlines', () => {
    expect(normalizeTutorFeedback('a b\nc')).toBe('a b\nc');
  });
});

describe('TUTOR_FEEDBACK_MAX_LENGTH', () => {
  it('should be 2000', () => {
    expect(TUTOR_FEEDBACK_MAX_LENGTH).toBe(2000);
  });
});
