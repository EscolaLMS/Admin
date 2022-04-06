import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

export async function pages(
  params: {
    // query
    current?: number;
    pageSize?: number;
  },
  options?: RequestOptionsInit,
) {
  return request<API.PageList>(`/api/admin/pages`, {
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

export async function page(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Page>>(`/api/admin/pages/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

export async function createPage(body?: Partial<API.Page>, options?: RequestOptionsInit) {
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
  options?: RequestOptionsInit,
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

export async function deletePage(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Page>>(`/api/admin/pages/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
