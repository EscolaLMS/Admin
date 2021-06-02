// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

const URL = 'http://localhost:1000/api';

/**  GET /api/rule */
export async function course(
  params: Partial<API.PaginatedListParams> & {
    // query
    current?: number;
    pageSize?: number;
    order_by?: string;
    order?: 'ASC' | 'DESC';
  },
  options?: { [key: string]: any },
) {
  return request<API.CourseList>(`${URL}/courses`, {
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
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
