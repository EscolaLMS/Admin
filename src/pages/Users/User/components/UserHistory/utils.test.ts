import {
  displayText,
  EMPTY_PLACEHOLDER,
  formatCount,
  formatFinalGrades,
  formatResultPercent,
} from './utils';

describe('user-history utils', () => {
  describe('displayText', () => {
    it('returns the value when present', () => {
      expect(displayText('Group A')).toBe('Group A');
    });
    it('falls back for empty or whitespace', () => {
      expect(displayText('')).toBe(EMPTY_PLACEHOLDER);
      expect(displayText('   ')).toBe(EMPTY_PLACEHOLDER);
      expect(displayText(null)).toBe(EMPTY_PLACEHOLDER);
      expect(displayText(undefined)).toBe(EMPTY_PLACEHOLDER);
    });
  });

  describe('formatCount', () => {
    it('renders a count', () => {
      expect(formatCount(8)).toBe('8');
    });
    it('keeps a legitimate zero', () => {
      expect(formatCount(0)).toBe('0');
    });
    it('falls back for missing / non-numeric input', () => {
      expect(formatCount(null)).toBe(EMPTY_PLACEHOLDER);
      expect(formatCount(undefined)).toBe(EMPTY_PLACEHOLDER);
      expect(formatCount(Number.NaN)).toBe(EMPTY_PLACEHOLDER);
    });
  });

  describe('formatResultPercent', () => {
    it('appends a percent sign', () => {
      expect(formatResultPercent('90')).toBe('90%');
      expect(formatResultPercent(75)).toBe('75%');
    });
    it('keeps a value that already carries a percent sign', () => {
      expect(formatResultPercent('80%')).toBe('80%');
    });
    it('keeps a legitimate zero', () => {
      expect(formatResultPercent(0)).toBe('0%');
    });
    it('falls back for missing / empty input', () => {
      expect(formatResultPercent(null)).toBe(EMPTY_PLACEHOLDER);
      expect(formatResultPercent(undefined)).toBe(EMPTY_PLACEHOLDER);
      expect(formatResultPercent('   ')).toBe(EMPTY_PLACEHOLDER);
    });
  });

  describe('formatFinalGrades', () => {
    it('returns the placeholder for missing / empty input', () => {
      expect(formatFinalGrades(undefined)).toBe(EMPTY_PLACEHOLDER);
      expect(formatFinalGrades(null)).toBe(EMPTY_PLACEHOLDER);
      expect(formatFinalGrades([])).toBe(EMPTY_PLACEHOLDER);
    });
    it('joins grade names with commas', () => {
      expect(
        formatFinalGrades([
          { grade_name: '4', grade_value: 4, grade_date: '2026-07-10' },
          { grade_name: '5', grade_value: 5, grade_date: '2026-07-12' },
        ]),
      ).toBe('4, 5');
    });
    it('falls back to the numeric value when the name is missing', () => {
      expect(formatFinalGrades([{ grade_value: 3 }])).toBe('3');
    });
    it('keeps a zero grade value', () => {
      expect(formatFinalGrades([{ grade_value: 0 }])).toBe('0');
    });
    it('skips entries with neither a name nor a numeric value', () => {
      expect(
        formatFinalGrades([{ grade_name: '  ' }, { grade_value: null }, { grade_name: '4' }]),
      ).toBe('4');
    });
    it('returns the placeholder when nothing is renderable', () => {
      expect(formatFinalGrades([{ grade_name: '' }, { grade_value: null }])).toBe(
        EMPTY_PLACEHOLDER,
      );
    });
  });
});