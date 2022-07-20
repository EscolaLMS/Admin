import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/currentUser */
export async function categoryTree(options?: RequestOptionsInit) {
  return request<API.DataResponseSuccess<API.Category[]>>('/api/admin/categories/tree', {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function categories(options?: RequestOptionsInit) {
  return request<API.CategoryList>('/api/admin/categories', {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function category(id: number, options?: RequestOptionsInit) {
  return request<API.DataResponseSuccess<API.Category>>(`/api/admin/categories/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function createCategory(body?: Record<string, any>, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Category>>(`/api/admin/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function updateCategory(
  id: number,
  body?: Record<string, any>,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.Category>>(`/api/admin/categories/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteCategory(
  id: number,
  body?: Record<string, any>,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.Category>>(`/api/admin/categories/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
