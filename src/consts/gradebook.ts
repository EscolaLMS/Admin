/**
 * AW-23 — Subject gradebook (quiz/project grades).
 *
 * Single source of truth for the backend contract used by the gradebook feature.
 * The UI does not hardcode these field names / endpoint paths anywhere else — adjust
 * them here (and the shapes in `services/escola-lms/gradebook.ts` / `typings.d.ts`) when
 * they change.
 *
 * Status of the contract:
 * - `flag` (`counts_to_grade`) is DELIVERED. It is accepted/returned by the Topic content
 *   API (courses package) for both quiz and project topicables, and quizzes also accept it
 *   on `PUT /api/admin/gift-quizes/{id}`. Default false.
 * - `weight` (`grade_weight`) is FE-only for now — there is no backend column yet, so the
 *   value is sent but ignored until the backend adds one.
 * - The read endpoint returns the per-student, per-course quiz/project grades that feed
 *   "Final grades → student profile".
 */

/** Field names sent with a quiz/project topic on create/edit. */
export const GRADEBOOK_FIELDS = {
  /**
   * boolean (DELIVERED) — whether this quiz/project appears in the final grade and
   * qualifies for a partial grade. Checkbox "Show in final grade". Default false.
   */
  flag: 'counts_to_grade',
  /** number (decimals allowed, > 0), FE-only for now — weight the grade carries in the gradebook */
  weight: 'grade_weight',
} as const;

/**
 * Default weight applied on the FE (prefill) when the flag is on but no weight is
 * entered. The BE is expected to treat a missing weight as this same default.
 */
export const DEFAULT_GRADE_WEIGHT = 1;

/**
 * A grade weight is valid when it is left empty (null/undefined → falls back to the
 * default) or is a number greater than 0. Shared by the topic-form field validators and
 * the save guard so both enforce the same rule.
 */
export const isValidGradeWeight = (value: unknown): boolean =>
  value === null || value === undefined || value === '' || Number(value) > 0;

/** REST endpoints for reading gradebook data. */
export const GRADEBOOK_ENDPOINTS = {
  /** Per-student, per-course quiz/project grades + completion (FinalGradesDetails). */
  studentCoursesGrades: (group_id: number, student_id: number) =>
    `/api/admin/lesson-group-users/groups/${group_id}/users/${student_id}/courses-grades`,
} as const;
