// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.DefaultResponse<API.User>>('/api/profile/me', {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
