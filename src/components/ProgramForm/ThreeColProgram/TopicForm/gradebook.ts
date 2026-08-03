export const GRADEBOOK_FIELDS = {
  flag: 'counts_to_grade',
  weight: 'weight',
} as const;

export type GradebookFieldKey = (typeof GRADEBOOK_FIELDS)[keyof typeof GRADEBOOK_FIELDS];

/**
 * The quiz/project weight is a percentage of a full-weight item, on the same 1-100
 * scale as the exam weight (`ExamForm`), so the two can be averaged together. 100 = counts
 * fully, 50 = counts half. Whole percent only — keep these bounds and the integer rule in
 * step with ExamForm's weight rules.
 */
export const MIN_GRADE_WEIGHT = 1;
export const MAX_GRADE_WEIGHT = 100;
export const DEFAULT_GRADE_WEIGHT = MAX_GRADE_WEIGHT;

export const isValidGradeWeight = (value: unknown): boolean => {
  if (value === null || value === undefined || value === '') return true;

  const weight = Number(value);

  return Number.isInteger(weight) && weight >= MIN_GRADE_WEIGHT && weight <= MAX_GRADE_WEIGHT;
};

export type GradebookTopicable = {
  counts_to_grade?: boolean;
  weight?: number;
};

export const gradebookInitialValues = (topicable?: GradebookTopicable | null) => ({
  [GRADEBOOK_FIELDS.flag]: Boolean(topicable?.counts_to_grade),
  [GRADEBOOK_FIELDS.weight]: topicable?.weight ?? DEFAULT_GRADE_WEIGHT,
});
