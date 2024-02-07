import { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/currentUser */
export async function tagsUnique(options?: AxiosRequestConfig) {
  return request<API.DataResponseSuccess<{ title: string }[]>>('/api/tags/unique', {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
