// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/admin/users */
export async function payments(options?: { [key: string]: any }) {
  return request<API.PaymentList>('/api/admin/payments', {
    method: 'GET',
    ...(options || {}),
  });
}
