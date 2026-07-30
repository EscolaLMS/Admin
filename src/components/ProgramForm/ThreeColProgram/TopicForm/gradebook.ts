/** Field names sent with a quiz/project topic on create/edit. */
export const GRADEBOOK_FIELDS = {
  flag: 'counts_to_grade',
  /** number (decimals allowed, > 0). Sent as `weight` on PUT /api/admin/topics/{id} **/
  weight: 'weight',
} as const;

/** Keys a gradebook field can report through a topic form's `onChange`. */
export type GradebookFieldKey = (typeof GRADEBOOK_FIELDS)[keyof typeof GRADEBOOK_FIELDS];

export const DEFAULT_GRADE_WEIGHT = 1;

export const isValidGradeWeight = (value: unknown): boolean =>
  value === null || value === undefined || value === '' || Number(value) > 0;

/** The gradebook part of a quiz/project `topicable`. */
export type GradebookTopicable = {
  counts_to_grade?: boolean;
  weight?: number;
};

/** `initialValues` for the gradebook fields of a quiz/project form. */
export const gradebookInitialValues = (topicable?: GradebookTopicable | null) => ({
  [GRADEBOOK_FIELDS.flag]: Boolean(topicable?.counts_to_grade),
  [GRADEBOOK_FIELDS.weight]: topicable?.weight ?? DEFAULT_GRADE_WEIGHT,
});
