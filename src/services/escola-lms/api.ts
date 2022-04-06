import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/currentUser */
export async function currentUser(options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.UserItem>>('/api/profile/me', {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
