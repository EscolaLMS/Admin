import { request } from 'umi';

/**  GET /api/admin/vouchers */
export async function vouchers(params?: any, options?: Record<string, any>) {
  return request<API.DefaultMetaResponse<any>>(`/api/admin/vouchers`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params: {
      ...params,
      per_page: params && params.pageSize,
      page: params && params.current,
    },
    ...(options || {}),
  });
}
