// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  GET /api/admin/users */
export async function users(
  params: {
    // query
    current?: number;
    pageSize?: number;
    search?: string;
    role?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserList>('/api/admin/users', {
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    method: 'GET',
    ...(options || {}),
  });
}

/**  GET /api/admin/users */
export async function user(id: number, options?: { [key: string]: any }) {
  return request<API.UserRow>(`/api/admin/users/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

export async function profile(options?: { [key: string]: any }) {
  return request<API.UserRow>(`/api/profile/me`, {
    method: 'GET',
    ...(options || {}),
  });
}

export async function updateProfile(data: Partial<API.UserItem>, options?: { [key: string]: any }) {
  return request<API.UserRow>(`/api/profile/me`, {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}

export async function updateUser(
  id: number,
  data: Partial<API.UserItem>,
  options?: { [key: string]: any },
) {
  return request<API.UserRow>(`/api/admin/users/${id}`, {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}

export async function createUser(data: Partial<API.UserItem>, options?: { [key: string]: any }) {
  return request<API.UserRow>(`/api/admin/users`, {
    data,
    method: 'POST',
    ...(options || {}),
  });
}

export async function deleteUser(id: number, options?: { [key: string]: any }) {
  return request<API.UserRow>(`/api/admin/users/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

export async function resendEmail(email: string, options?: { [key: string]: any }) {
  return request<API.UserRow>(`/api/auth/email/resend`, {
    method: 'POST',
    data: {
      email,
    },
    ...(options || {}),
  });
}
