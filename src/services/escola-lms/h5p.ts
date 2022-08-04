import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

export async function h5p(
  params: API.H5PListParams & {
    // query
    current?: number;
    pageSize?: number;
  },
  options?: RequestOptionsInit,
) {
  return request<API.DefaultMetaResponse<API.H5PContentListItem>>(`/api/admin/hh5p/content`, {
    method: 'GET',
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    ...(options || {}),
  });
}

export async function getH5p(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.H5PObject>>(`/api/admin/hh5p/content/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

export const editorSettings = (
  id?: string | number,
  lang: string = 'en',
  options?: RequestOptionsInit,
) => {
  let url: string = id ? `/api/admin/hh5p/editor/${id}` : `/api/admin/hh5p/editor`;
  url = lang ? `${url}?lang=${lang}` : url;
  return request<API.DefaultResponse<API.H5PObject>>(url, {
    method: 'GET',
    ...(options || {}),
  });
};

export const contentSettings = (
  id?: string | number,
  lang: string = 'en',
  options?: RequestOptionsInit,
) => {
  let url: string = `/api/admin/hh5p/content/${id}`;
  url = lang ? `${url}?lang=${lang}` : url;
  return request<API.DefaultResponse<API.H5PObject>>(url, {
    method: 'GET',
    ...(options || {}),
  });
};

export async function updateContent(
  body: any,
  id?: number | string | undefined,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<{ id: number }>>(
    id ? `/api/admin/hh5p/content/${id}` : `/api/admin/hh5p/content`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

export async function removeH5P(id: number) {
  return request<API.DefaultResponse<unknown>>(`/api/admin/hh5p/content/${id}`, {
    method: 'DELETE',
  });
}

export async function allContent(options?: RequestOptionsInit) {
  return request<API.DefaultMetaResponse<API.H5PContentListItem>>(
    '/api/admin/hh5p/content?per_page=0',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
