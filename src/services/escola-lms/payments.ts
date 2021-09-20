// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

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
  options?: { [key: string]: any },
) {
  return request<API.PaymentList>('/api/admin/payments', {
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    method: 'GET',
    useCache: true,
    ...(options || {}),
  });
}
