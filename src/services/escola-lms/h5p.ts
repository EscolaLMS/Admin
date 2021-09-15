// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/courses */
export async function h5p(
  params: API.CourseParams & {
    // query
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.H5PContentList>(`/api/hh5p/content`, {
    method: 'GET',
    useCache: true,
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
  return request<API.DefaultResponse<API.H5PContent>>(`/api/hh5p/content/${id}`, {
    method: 'GET',
    useCache: true,
    ...(options || {}),
  });
}

/**  DELETE /api/rule */
export async function removeH5P(id: number) {
  return request<API.DefaultResponse<{}>>(`/api/hh5p/content/${id}`, {
    method: 'DELETE',
  });
}

/**  GET /api/admin/users */
export async function allContent(options?: { [key: string]: any }) {
  return request<API.H5PContentListItem[]>('/api/hh5p/content?per_page=0', {
    method: 'GET',
    useCache: true,
    ...(options || {}),
  });
}
