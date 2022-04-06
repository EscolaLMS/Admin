import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/csv/users */
export async function usersCsvExport(
  params?: {
    // query
    current?: number;
    pageSize?: number;
    search?: string;
    role?: string;
  },
  options?: RequestOptionsInit,
) {
  return request<API.UserList>('/api/admin/csv/users', {
    params: {
      ...params,
      per_page: params && params.pageSize,
      page: params && params.current,
    },
    method: 'GET',
    headers: {
      accept: 'application/csv',
    },
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
