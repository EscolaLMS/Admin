// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

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
  options?: { [key: string]: any },
) {
  return request<API.OrderList>('/api/admin/orders?page=1', {
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

/**  GET /api/admin/users */
export async function order(id: number, options?: { [key: string]: any }) {
  return request<API.DefaultResponse<API.Order>>(`/api/admin/orders/${id}`, {
    method: 'GET',
    useCache: true,
    ...(options || {}),
  });
}
