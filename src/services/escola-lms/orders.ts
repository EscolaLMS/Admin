import { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/admin/users */
export async function orders(
  params: API.PaginationParams &
    EscolaLms.Cart.Http.Requests.Admin.OrderSearchRequest & {
      // query
      status?: API.OrderStatus;
    },
  options?: AxiosRequestConfig,
) {
  return request<API.OrderList>('/api/admin/orders', {
    params,
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  GET /api/admin/users */
export async function order(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Order>>(`/api/admin/orders/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
