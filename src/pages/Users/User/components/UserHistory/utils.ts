/**
 * Pure, dependency-free formatting helpers for the student-history tab (AW-51).
 *
 * Kept free of `@/` aliases, React and date libraries so they can be unit-tested directly (jest in
 * this repo can't resolve path aliases). Everything is defensive because the backend history
 * contract is a not-yet-delivered placeholder — fields may be missing, null, or non-numeric.
 */

export const EMPTY_PLACEHOLDER = '-';

const isFiniteNumber = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value);

/** Round to at most `dp` decimals and drop trailing zeros (4 → "4", 4.2 → "4.2", 4.267 → "4.27"). */
export const roundTo = (value: number, dp = 2): string => {
  const factor = 10 ** dp;
  return String(Math.round(value * factor) / factor);
};

/**
 * Normalise a reported attendance percentage that may arrive on either scale: a 0–1 fraction
 * (`0.8`) or a 0–100 percentage (`80`). Values in (0, 1] are treated as fractions, so a lone `1`
 * is read as 100% rather than 1% — a full 100% attendance is far likelier than exactly 1%.
 */
export const normalizePercent = (value?: number | null): number | undefined => {
  if (!isFiniteNumber(value)) return undefined;
  const pct = value > 0 && value <= 1 ? value * 100 : value;
  return Math.round(pct);
};

/** Percentage derived straight from the counts — unambiguous, so preferred when both exist. */
const derivePercent = (present?: number | null, total?: number | null): number | undefined =>
  isFiniteNumber(present) && isFiniteNumber(total) && total > 0
    ? Math.round((present / total) * 100)
    : undefined;

/**
 * "12/15 (80%)" style attendance summary. Falls back gracefully when only some fields are present,
 * and returns the placeholder when there is nothing meaningful to show. The percentage is derived
 * from the counts when available (scale-safe); otherwise the reported `percentage` field is used,
 * normalising whichever scale the backend sent.
 */
export const formatAttendanceSummary = (
  summary?: API.StudentHistoryAttendanceSummary | null,
): string => {
  if (!summary) return EMPTY_PLACEHOLDER;

  const { present, total, percentage } = summary;

  let countPart = '';
  if (isFiniteNumber(present) && isFiniteNumber(total)) {
    countPart = `${present}/${total}`;
  } else if (isFiniteNumber(present)) {
    countPart = `${present}`;
  }

  const pct = derivePercent(present, total) ?? normalizePercent(percentage);
  const pctPart = pct !== undefined ? `${pct}%` : '';

  if (countPart && pctPart) return `${countPart} (${pctPart})`;
  return countPart || pctPart || EMPTY_PLACEHOLDER;
};

/**
 * "5 · Ø 4.2" style grades summary — final grade first, then the average when available. Returns the
 * placeholder when neither is present.
 */
export const formatGradesSummary = (
  summary?: API.StudentHistoryGradesSummary | null,
): string => {
  if (!summary) return EMPTY_PLACEHOLDER;

  const { average, final_grade } = summary;
  const parts: string[] = [];

  if (final_grade !== null && final_grade !== undefined && final_grade !== '') {
    parts.push(String(final_grade));
  }
  if (isFiniteNumber(average)) {
    parts.push(`Ø ${roundTo(average, 2)}`);
  }

  return parts.length ? parts.join(' · ') : EMPTY_PLACEHOLDER;
};

/** Non-empty string or the placeholder — used for optional group/subject/semester names. */
export const displayText = (value?: string | null): string =>
  value && value.trim() !== '' ? value : EMPTY_PLACEHOLDER;