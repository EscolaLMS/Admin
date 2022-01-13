// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/admin/users */
export async function scorms(
  params: {
    // query
    current?: number;
    pageSize?: number;
    search?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.ScormList>('/api/admin/scorm', {
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

/**  GET /api/scorm/scos */
export async function scormssco(
  params: {
    // query
    current?: number;
    pageSize?: number;
    search?: string;
  },
  options?: { [key: string]: any },
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

export async function deleteScorm(id: number, options?: { [key: string]: any }) {
  return request<API.SCORM>(`/api/admin/scorm/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}
