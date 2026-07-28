import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**
 * AW-23 — Subject gradebook read data (quiz/project grades).
 *
 * Thin wrapper over the per-student, per-course grades endpoint (delivered as a
 * separate backend task). `skipErrorHandler: true` is set so that, while the
 * endpoint may not yet be live, a 4xx does not trigger the global handler (which
 * redirects to /404). Consumers handle `!response.success` by showing an empty state.
 */

/** GET per-student, per-course quiz/project grades + completion (FinalGradesDetails). */
export async function getStudentCoursesGrades(
  group_id: number,
  student_id: number,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.StudentCourseGrades[]>>(
    `/api/admin/lesson-group-users/groups/${group_id}/users/${student_id}/courses-grades`,
    {
      method: 'GET',
      skipErrorHandler: true,
      ...(options || {}),
    },
  );
}
