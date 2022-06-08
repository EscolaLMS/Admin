import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

declare const REACT_APP_API_URL: string;

/**  GET /api/currentUser */
export async function files(
  params: API.CourseParams & {
    // query
    directory: string;
    page?: number;
  },
  options?: RequestOptionsInit,
) {
  return request<API.FileList>('/api/admin/file/list', {
    method: 'GET',
    params,
    ...(options || {}),
  });
}

export async function findFile(
  params: API.CourseParams & {
    directory: string;
    name: string;
    page?: number;
  },
  options?: RequestOptionsInit,
) {
  return request<API.FileList>(`/api/admin/file/find`, {
    method: 'GET',
    params,
    ...(options || {}),
  });
}

/**  GET /api/currentUser */
export async function upload(file: File, directory: string, options?: RequestOptionsInit) {
  const formData = new FormData();
  formData.append('file[]', file);
  formData.append('target', directory);

  return request<API.FileUpload>('/api/admin/file/upload', {
    method: 'POST',
    data: formData,
    ...(options || {}),
  });
}

export const resizedImage = (path: string, width = 1000) =>
  `${window.REACT_APP_API_URL || REACT_APP_API_URL}/api/images/img?path=${path}&w=${width}`;

/**  GET /api/currentUser */
export async function remove(url: string, options?: RequestOptionsInit) {
  return request<API.FileList>('/api/admin/file/delete', {
    method: 'DELETE',
    data: {
      url,
    },
    ...(options || {}),
  });
}
