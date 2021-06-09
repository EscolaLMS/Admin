// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/admin/users */
export async function users(options?: { [key: string]: any }) {
  return request<API.DataResponseSuccess<API.UserItem[]>>('/api/admin/users', {
    method: 'GET',
    ...(options || {}),
  });
}
