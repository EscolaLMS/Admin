// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/admin/templates */
export async function certificates(options?: { [key: string]: any }) {
  return request<API.DefaultMetaResponse<API.Certificate[]>>('/api/admin/templates/assignable', {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function assign(
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

/**  GET /api/admin/templates/assigned */
export async function template(params: API.TemplateItem, options?: { [key: string]: any }) {
  return request<API.DefaultMetaResponse<API.Certificate[]>>(`/api/admin/templates/assigned`, {
    params,
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
