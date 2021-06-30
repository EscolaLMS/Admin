// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/currentUser */
export async function categoryTree(options?: { [key: string]: any }) {
  return request<API.DataResponseSuccess<API.Category[]>>('/api/categories/tree', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function categories(options?: { [key: string]: any }) {
  return request<API.CategoryList>('/api/categories', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function category(id: number, options?: { [key: string]: any }) {
  return request<API.DataResponseSuccess<API.Category>>(`/api/categories/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

export async function createCategory(
  body?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request<API.DefaultResponse<API.Category>>(`/api/categories`, {
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
  body?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request<API.DefaultResponse<API.Category>>(`/api/categories/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteCategory(
  id: number,
  body?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request<API.DefaultResponse<API.Category>>(`/api/categories/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
