/**
 * AN-8 — Subject gradebook (quiz/project grades).
 *
 * Single source of truth for the *assumed* backend contract used by the gradebook
 * feature. The backend endpoints are delivered as separate tasks; until they land
 * these values are placeholders. When the real API is available, adjust the field
 * names / endpoint paths here (and the shapes in `services/escola-lms/gradebook.ts`)
 * — the UI does not hardcode them anywhere else.
 */

/** Field names sent with a quiz/project topic on create/edit. */
export const GRADEBOOK_FIELDS = {
  /** boolean — whether the resulting grade is counted in the subject gradebook */
  flag: 'add_to_gradebook',
  /** number (decimals allowed, > 0) — weight the grade carries in the gradebook */
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
