import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/users */
export async function payments(
  params: API.PaginationParams & {
    // query
    current?: number;
    pageSize?: number;
    date_from?: string;
    date_to?: string;
    status?: API.PaymentStatus;
    // user_id?: number;
    // author_id?: number;
    // course_id?: number;
  },
  options?: RequestOptionsInit,
) {
  return request<API.PaymentList>('/api/admin/payments', {
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
