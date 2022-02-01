import { request } from 'umi';

/**  GET /api/admin/csv/users */
export async function usersCsvExport(
  params?: {
    // query
    current?: number;
    pageSize?: number;
    search?: string;
    role?: string;
  },
  options?: { [key: string]: any },
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
