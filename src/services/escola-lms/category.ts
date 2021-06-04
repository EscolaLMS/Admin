// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/currentUser */
export async function categoryTree(options?: { [key: string]: any }) {
  return request<API.DataResponseSuccess<API.Category[]>>('/api/categories/tree', {
    method: 'GET',
    ...(options || {}),
  });
}
