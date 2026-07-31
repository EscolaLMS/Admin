import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**
 * Subject gradebook read data (quiz/project grades).
 *
 * `skipErrorHandler: true` because this feeds one panel of the final-grades page: the
 * global handler pushes /404 on a 4xx, which would navigate the teacher off the whole
 * page because a single table failed. The caller reports the failure instead — see
 * useStudentCoursesGrades.
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