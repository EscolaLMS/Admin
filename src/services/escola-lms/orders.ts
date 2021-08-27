// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/admin/users */
export async function orders(
  params: {
    // query
    current?: number;
    pageSize?: number;
    user_id?: number;
    author_id?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.OrderList>('/api/admin/orders?page=1', {
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    method: 'GET',
    ...(options || {}),
  });
}
