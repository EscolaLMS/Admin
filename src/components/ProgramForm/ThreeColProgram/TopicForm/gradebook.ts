/** Field names sent with a quiz/project topic on create/edit. */
export const GRADEBOOK_FIELDS = {
  flag: 'counts_to_grade',
  /** number (decimals allowed, > 0). Sent as `weight` on PUT /api/admin/topics/{id} **/
  weight: 'weight',
} as const;

export const DEFAULT_GRADE_WEIGHT = 1;

export const isValidGradeWeight = (value: unknown): boolean =>
  value === null || value === undefined || value === '' || Number(value) > 0;
