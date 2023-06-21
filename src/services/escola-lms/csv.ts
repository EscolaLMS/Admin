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
    format?: string;
  },
  options?: RequestOptionsInit,
) {
  return request<Blob>('/api/admin/csv/users', {
    params: {
      ...params,
      per_page: params && params.pageSize,
      page: params && params.current,
    },
    method: 'GET',
    headers: {
      accept: `application/${params?.format || 'csv'}`,
    },
    responseType: 'blob',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
