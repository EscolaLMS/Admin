import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

export async function pages(
  params: API.PageParams &
    API.PaginationParams & {
      title?: string;
      slug?: string;
    },
  options?: AxiosRequestConfig,
) {
  return request<API.PageList>(`/api/admin/pages`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params,
    ...(options || {}),
  });
}

export async function page(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Page>>(`/api/admin/pages/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

export async function createPage(body?: Partial<API.Page>, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Page>>(`/api/admin/pages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function updatePage(
  id: number,
  body?: Partial<API.Page>,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.Page>>(`/api/admin/pages/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deletePage(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Page>>(`/api/admin/pages/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
