import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**
 * GET per-student, per-course quiz/project grades + completion (FinalGradesDetails).
 * `skipErrorHandler` so a failure doesn't trip the global 4xx→/404 redirect and navigate the
 * teacher off the page; the caller (useStudentCoursesGrades) surfaces it as an inline error.
 */
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
