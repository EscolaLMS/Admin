// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/admin/users */
export async function pages(options?: { [key: string]: any }) {
  return request<API.PagesList>('/api/pages', {
    method: 'GET',
    ...(options || {}),
  });
}
