// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/admin/templates */
export async function certificates(params: {}, options?: { [key: string]: any }) {
  return request<API.ScormList>('/api/admin/templates', {
    params: {
      ...params,
    },
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function setTemplate(
  id: number,
  body?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request<API.CourseAccessList>(`/api/admin/templates/${id}/assign`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function unassign(
  id: number,
  body?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request<API.CourseAccessList>(`/api/admin/templates/${id}/unassign`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
