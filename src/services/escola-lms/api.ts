import { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/currentUser */
export async function currentUser(options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.UserItem>>('/api/profile/me', {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
