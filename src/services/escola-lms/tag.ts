// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/currentUser */
export async function tagsUnique(options?: { [key: string]: any }) {
  return request<API.DataResponseSuccess<{ title: string }[]>>('/api/tags/unique', {
    method: 'GET',
    useCache: true,
    ...(options || {}),
  });
}
