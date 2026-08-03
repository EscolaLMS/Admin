import {
  displayText,
  EMPTY_PLACEHOLDER,
  formatAttendanceSummary,
  formatGradesSummary,
  normalizePercent,
  roundTo,
} from './utils';

describe('user-history utils', () => {
  describe('roundTo', () => {
    it('keeps integers without decimals', () => {
      expect(roundTo(4)).toBe('4');
    });
    it('trims trailing zeros', () => {
      expect(roundTo(4.2)).toBe('4.2');
    });
    it('rounds to the requested precision', () => {
      expect(roundTo(4.267, 2)).toBe('4.27');
      expect(roundTo(66.666, 1)).toBe('66.7');
    });
  });

  describe('formatAttendanceSummary', () => {
    it('returns the placeholder for missing input', () => {
      expect(formatAttendanceSummary(undefined)).toBe(EMPTY_PLACEHOLDER);
      expect(formatAttendanceSummary(null)).toBe(EMPTY_PLACEHOLDER);
      expect(formatAttendanceSummary({})).toBe(EMPTY_PLACEHOLDER);
    });
    it('combines count and rounded percentage', () => {
      expect(formatAttendanceSummary({ present: 12, total: 15, percentage: 80 })).toBe(
        '12/15 (80%)',
      );
    });
    it('rounds fractional percentages', () => {
      expect(formatAttendanceSummary({ present: 2, total: 3, percentage: 66.67 })).toBe(
        '2/3 (67%)',
      );
    });
    it('shows present alone when total is absent', () => {
      expect(formatAttendanceSummary({ present: 9 })).toBe('9');
    });
    it('shows percentage alone when counts are absent', () => {
      expect(formatAttendanceSummary({ percentage: 100 })).toBe('100%');
    });
    it('derives the percentage from counts, ignoring a mismatched reported field', () => {
      expect(formatAttendanceSummary({ present: 12, total: 15, percentage: 999 })).toBe(
        '12/15 (80%)',
      );
    });
    it('accepts a 0–1 fraction for the reported percentage', () => {
      expect(formatAttendanceSummary({ percentage: 0.8 })).toBe('80%');
    });
    it('ignores non-numeric values', () => {
      expect(
        formatAttendanceSummary({ present: null, total: undefined, percentage: null }),
      ).toBe(EMPTY_PLACEHOLDER);
    });
  });

  describe('normalizePercent', () => {
    it('passes through a 0–100 percentage', () => {
      expect(normalizePercent(80)).toBe(80);
      expect(normalizePercent(100)).toBe(100);
    });
    it('scales a 0–1 fraction up', () => {
      expect(normalizePercent(0.8)).toBe(80);
      expect(normalizePercent(0.666)).toBe(67);
    });
    it('reads a lone 1 as 100%', () => {
      expect(normalizePercent(1)).toBe(100);
    });
    it('keeps zero', () => {
      expect(normalizePercent(0)).toBe(0);
    });
    it('returns undefined for non-numeric input', () => {
      expect(normalizePercent(null)).toBeUndefined();
      expect(normalizePercent(undefined)).toBeUndefined();
    });
  });

  describe('formatGradesSummary', () => {
    it('returns the placeholder for missing input', () => {
      expect(formatGradesSummary(undefined)).toBe(EMPTY_PLACEHOLDER);
      expect(formatGradesSummary({})).toBe(EMPTY_PLACEHOLDER);
    });
    it('shows final grade and average together', () => {
      expect(formatGradesSummary({ final_grade: 5, average: 4.2 })).toBe('5 · Ø 4.2');
    });
    it('supports string final grades', () => {
      expect(formatGradesSummary({ final_grade: 'A' })).toBe('A');
    });
    it('shows the average alone', () => {
      expect(formatGradesSummary({ average: 3.666 })).toBe('Ø 3.67');
    });
    it('treats empty-string final grade as absent', () => {
      expect(formatGradesSummary({ final_grade: '' })).toBe(EMPTY_PLACEHOLDER);
    });
    it('keeps a zero final grade', () => {
      expect(formatGradesSummary({ final_grade: 0 })).toBe('0');
    });
  });

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
});