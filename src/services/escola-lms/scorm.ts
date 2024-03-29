import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/admin/users */
export async function scorms(
  params: API.PageParams &
    API.PaginationParams & {
      search?: string;
    },
  options?: AxiosRequestConfig,
) {
  return request<API.ScormList>('/api/admin/scorm', {
    params,
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  GET /api/scorm/scos */
export async function scormssco(
  params: {
    // query
    current?: number;
    pageSize?: number;
    search?: string;
  },
  options?: AxiosRequestConfig,
) {
  return request<API.ScormScosList>('/api/admin/scorm/scos', {
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

export async function deleteScorm(id: number, options?: AxiosRequestConfig) {
  return request<API.SCORM>(`/api/admin/scorm/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}
