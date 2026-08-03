// Pure, framework-free grading logic for a project solution. Kept alias-free so it
// can be unit-tested directly (jest cannot resolve the `@/` alias). The React wiring
// lives in `useProjectSolutionGrade`.

export const MIN_SCORE = 0;

/**
 * Resolve the max score that applies to a solution: an explicit override wins,
 * otherwise fall back to the value carried on the solution itself.
 */
export const resolveEffectiveMaxScore = (
  maxScore?: number | null,
  solutionMaxScore?: number | null,
): number | undefined => maxScore ?? solutionMaxScore ?? undefined;

export type ScoreValidationError = 'negative' | 'exceeds_max' | null;

/**
 * Validate a score against the effective max. Presence (required) is handled by the
 * form's `required` rule, so a nullish value is treated as valid here.
 */
export const validateScore = (
  value: number | null | undefined,
  maxScore?: number,
): ScoreValidationError => {
  if (value == null) return null;
  if (value < MIN_SCORE) return 'negative';
  if (maxScore != null && value > maxScore) return 'exceeds_max';
  return null;
};

/**
 * Whether a grade can be submitted: needs a solution, a score, and a known max.
 */
export const canSubmitGrade = (
  solutionId: number | undefined,
  score: number | null | undefined,
  maxScore: number | undefined,
): boolean => solutionId !== undefined && score != null && maxScore != null;
