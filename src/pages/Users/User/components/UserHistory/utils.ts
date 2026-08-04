/**
 * Pure, dependency-free formatting helpers for the student-history tab (AW-51).
 *
 * Kept free of `@/` aliases, React and date libraries so they can be unit-tested directly (jest in
 * this repo can't resolve path aliases). Everything is defensive because history fields may arrive
 * missing or null (e.g. a group deleted after the snapshot).
 */

export const EMPTY_PLACEHOLDER = '-';

/** Non-empty string or the placeholder — used for optional group/subject/status names. */
export const displayText = (value?: string | null): string =>
  value !== null && value !== undefined && String(value).trim() !== ''
    ? String(value)
    : EMPTY_PLACEHOLDER;

/** Render an optional count (including a legitimate 0), falling back to the placeholder. */
export const formatCount = (value?: number | null): string =>
  typeof value === 'number' && Number.isFinite(value) ? String(value) : EMPTY_PLACEHOLDER;

/** Exam result rendered as a percentage, e.g. "90" → "90%". Placeholder when absent. */
export const formatResultPercent = (value?: string | number | null): string => {
  if (value === null || value === undefined) return EMPTY_PLACEHOLDER;
  const str = String(value).trim();
  if (str === '') return EMPTY_PLACEHOLDER;
  return str.endsWith('%') ? str : `${str}%`;
};

/**
 * Compact grades cell for the list — joins each final grade's display name (falling back to its
 * numeric value) with commas, e.g. "4, 5". Returns the placeholder when there are none.
 */
export const formatFinalGrades = (grades?: API.StudentHistoryFinalGrade[] | null): string => {
  if (!grades || grades.length === 0) return EMPTY_PLACEHOLDER;

  const labels = grades
    .map((grade) => {
      if (grade.grade_name != null && String(grade.grade_name).trim() !== '') {
        return String(grade.grade_name);
      }
      if (typeof grade.grade_value === 'number' && Number.isFinite(grade.grade_value)) {
        return String(grade.grade_value);
      }
      return '';
    })
    .filter((label) => label !== '');

  return labels.length ? labels.join(', ') : EMPTY_PLACEHOLDER;
};