// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/courses */
export async function h5p(
  params: API.PaginationParams & {
    // query
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.DefaultMetaResponse<API.H5PContentListItem>>(`/api/admin/hh5p/content`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    ...(options || {}),
  });
}

/**  GET /api/courses/:id */
export async function getH5p(id: number, options?: { [key: string]: any }) {
  return request<API.DefaultResponse<API.H5PContent>>(`/api/admin/hh5p/content/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  DELETE /api/rule */
export async function removeH5P(id: number) {
  return request<API.DefaultResponse<{}>>(`/api/admin/hh5p/content/${id}`, {
    method: 'DELETE',
  });
}

/**  GET /api/admin/users */
export async function allContent(options?: { [key: string]: any }) {
  return request<API.DefaultMetaResponse<API.H5PContentListItem[]>>(
    '/api/admin/hh5p/content?per_page=0',
    {
      method: 'GET',
      /* useCache: true */ useCache: false,
      ...(options || {}),
    },
  );
}
