// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/rule */
export async function course(
  params: API.CourseParams & {
    // query
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.CourseList>(`/api/courses`, {
    method: 'GET',
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    ...(options || {}),
  });
}

/**  PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/**  POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/**  DELETE /api/rule */
export async function removeCourse(id: number) {
  return request<Record<string, any>>(`/api/courses/${id}`, {
    method: 'DELETE',
  });
}
