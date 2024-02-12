import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/currentUser */
export async function categoryTree(options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Category[]>>('/api/admin/categories/tree', {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function categories(
  params: API.CourseParams & {
    // query
    name?: string;
    is_active?: 0 | 1;
  },
  options?: AxiosRequestConfig,
) {
  return request<API.CategoryList>('/api/admin/categories', {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params,
    ...(options || {}),
  });
}

export async function category(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Category>>(`/api/admin/categories/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function createCategory(body?: Record<string, any>, options?: AxiosRequestConfig) {
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
  options?: AxiosRequestConfig,
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
  options?: AxiosRequestConfig,
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
