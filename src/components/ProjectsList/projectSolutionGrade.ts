export const MIN_SCORE = 0;

export const resolveEffectiveMaxScore = (
  maxScore?: number | null,
  solutionMaxScore?: number | null,
): number | undefined => maxScore ?? solutionMaxScore ?? undefined;

export type ScoreValidationError = 'negative' | 'exceeds_max' | null;

export const validateScore = (
  value: number | null | undefined,
  maxScore?: number,
): ScoreValidationError => {
  if (value == null) return null;
  if (value < MIN_SCORE) return 'negative';
  if (maxScore != null && value > maxScore) return 'exceeds_max';
  return null;
};
