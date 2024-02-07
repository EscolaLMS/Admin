import { request } from 'umi';

import { AxiosRequestConfig } from '@umijs/max';

/**  GET /api/admin/course-access-enquiries */
export async function courseAccess(
  params: API.CourseAccessEnquiryListParams,
  options?: AxiosRequestConfig,
) {
  return request<API.CourseAccessEnquiryList>(`/api/admin/course-access-enquiries`, {
    method: 'GET',
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    ...(options || {}),
  });
}

/**  DELETE /api/admin/course-access-enquiries/:id */
export async function deleteCourseAccess(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.CourseAccessEnquiry>>(
    `/api/admin/course-access-enquiries/${id}`,
    {
      method: 'DELETE',
      ...(options || {}),
    },
  );
}

/**  POST /api/admin/tasks/:id */
export async function approveCourseAccess(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.CourseAccessEnquiry>>(
    `/api/admin/course-access-enquiries/approve/${id}`,
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}
