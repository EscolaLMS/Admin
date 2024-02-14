import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/admin/users */
export async function payments(
  params: API.PaginationParams & {
    // query
    date_from?: string;
    date_to?: string;
    status?: API.PaymentStatus;
    order_id?: string;
    // user_id?: number;
    // author_id?: number;
    // course_id?: number;
  },
  options?: AxiosRequestConfig,
) {
  return request<API.PaymentList>('/api/admin/payments', {
    params,
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
