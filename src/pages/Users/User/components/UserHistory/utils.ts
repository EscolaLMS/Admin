export const EMPTY_PLACEHOLDER = '-';

export const displayText = (value?: string | null): string =>
  value !== null && value !== undefined && String(value).trim() !== ''
    ? String(value)
    : EMPTY_PLACEHOLDER;

export const formatCount = (value?: number | null): string =>
  typeof value === 'number' && Number.isFinite(value) ? String(value) : EMPTY_PLACEHOLDER;

export const formatResultPercent = (value?: string | number | null): string => {
  if (value === null || value === undefined) return EMPTY_PLACEHOLDER;
  const str = String(value).trim();
  if (str === '') return EMPTY_PLACEHOLDER;
  return str.endsWith('%') ? str : `${str}%`;
};

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
