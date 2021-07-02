// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/currentUser */
export async function files(
  params: API.CourseParams & {
    // query
    directory: string;
    page?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.FileList>('/api/admin/file/list', {
    method: 'GET',
    params,
    ...(options || {}),
  });
}

/**  GET /api/currentUser */
export async function upload(
  params: API.CourseParams & {
    // query
    directory: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.FileList>('/api/admin/file/list', {
    method: 'POST',
    params,
    ...(options || {}),
  });
}

/**  GET /api/currentUser */
export async function remove(url: string, options?: { [key: string]: any }) {
  return request<API.FileList>('/api/admin/file/delete', {
    method: 'DELETE',
    data: {
      url,
    },
    ...(options || {}),
  });
}
