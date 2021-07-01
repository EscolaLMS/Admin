// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/admin/users */
export async function orders(options?: { [key: string]: any }) {
  return request<API.OrderList>('/api/orders', {
    method: 'GET',
    ...(options || {}),
  });
}
