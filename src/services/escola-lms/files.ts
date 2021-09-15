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
    useCache: true,
    params,
    ...(options || {}),
  });
}

/**  GET /api/currentUser */
export async function upload(file: File, directory: string, options?: { [key: string]: any }) {
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
  `${REACT_APP_API_URL}/api/images/img?path=${path}&w=${width}`;

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
