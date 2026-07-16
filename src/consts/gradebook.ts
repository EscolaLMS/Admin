/**
 * AN-8 — Subject gradebook (quiz/project grades).
 *
 * Single source of truth for the backend contract used by the gradebook feature.
 * The UI does not hardcode these field names / endpoint paths anywhere else — adjust
 * them here (and the shapes in `services/escola-lms/gradebook.ts`) when they change.
 *
 * Status of the contract:
 * - `flag` (`counts_to_grade`) is DELIVERED. It is accepted/returned by the Topic
 *   content API (courses package) for both quiz and project topicables, and quizzes
 *   also accept it on `PUT /api/admin/gift-quizes/{id}`. Default false.
 * - `weight` (`grade_weight`) and the read endpoints below remain PLACEHOLDERS,
 *   pending their separate backend tasks. The weight input is currently commented
 *   out in the quiz/project topic forms (hidden until its backend lands); this field
 *   name is kept so it can be uncommented in place.
 */

/** Field names sent with a quiz/project topic on create/edit. */
export const GRADEBOOK_FIELDS = {
  /**
   * boolean (DELIVERED) — whether this quiz/project appears in the final grade and
   * qualifies for a partial grade. Checkbox "Show in final grade". Default false.
   */
  flag: 'counts_to_grade',
  /** number (decimals allowed, > 0), PLACEHOLDER — weight the grade carries in the gradebook */
  weight: 'grade_weight',
} as const;

/**
 * Default weight applied on the FE (prefill) when the flag is on but no weight is
 * entered. The BE is expected to treat a missing weight as this same default.
 */
export const DEFAULT_GRADE_WEIGHT = 1;

/** Placeholder REST endpoints for reading gradebook data. Adjust when the API lands. */
export const GRADEBOOK_ENDPOINTS = {
  /** Per-student, per-course quiz/project grades + pass/fail (FinalGradesDetails). */
  studentCourseGrades: '/api/admin/gradebook/student-grades',
  /** Group-level flagged quiz/project grades (ClassRegister gradebook columns). */
  groupGradebook: '/api/admin/gradebook/group-grades',
} as const;
