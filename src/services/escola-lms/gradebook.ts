import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

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
