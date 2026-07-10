import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

import { GRADEBOOK_ENDPOINTS } from '@/consts/gradebook';

/**
 * AN-8 — Subject gradebook data (quiz/project grades).
 *
 * These are thin wrappers over the *assumed* backend endpoints (delivered as
 * separate tasks). `skipErrorHandler: true` is set so that, while the endpoints
 * do not yet exist, a 4xx does not trigger the global handler (which redirects
 * to /404). Consumers handle `!response.success` by showing an empty state.
 * Once the backend is live this flag can be revisited.
 */

/** GET per-student, per-course quiz/project grades + pass/fail (FinalGradesDetails). */
export async function getStudentCourseGrades(
  params: API.StudentCourseGradesParams,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.StudentCourseGrades[]>>(
    GRADEBOOK_ENDPOINTS.studentCourseGrades,
    {
      method: 'GET',
      params,
      skipErrorHandler: true,
      /* useCache: true */ useCache: false,
      ...(options || {}),
    },
  );
}

/** GET group-level gradebook — only flagged quiz/project items (ClassRegister). */
export async function getGroupGradebook(
  params: API.GroupGradebookParams,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.GroupGradebook>>(GRADEBOOK_ENDPOINTS.groupGradebook, {
    method: 'GET',
    params,
    skipErrorHandler: true,
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
