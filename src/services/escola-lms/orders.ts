import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/users */
export async function orders(
  params: API.PaginationParams & {
    // query
    current?: number;
    pageSize?: number;
    user_id?: number;
    author_id?: number;
    course_id?: number;
    date_from?: string;
    date_to?: string;
  },
  options?: RequestOptionsInit,
) {
  return request<API.OrderList>('/api/admin/orders?page=1', {
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

/**  GET /api/admin/users */
export async function order(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Order>>(`/api/admin/orders/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
