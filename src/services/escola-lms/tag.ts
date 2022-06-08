import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/currentUser */
export async function tagsUnique(options?: RequestOptionsInit) {
  return request<API.DataResponseSuccess<{ title: string }[]>>('/api/tags/unique', {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
