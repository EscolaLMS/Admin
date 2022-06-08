import type { RequestOptionsInit } from 'umi-request';

import { request } from 'umi';

/**  GET /api/admin/users */
export async function users(
  params: EscolaLms.Auth.Http.Requests.Admin.UsersListRequest & {
    // query
    current?: number;
    pageSize?: number;
    search?: string;
    role?: string;
    gt_last_login_day?: number;
    lt_last_login_day?: number;
  },
  options?: RequestOptionsInit,
) {
  return request<API.UserList>('/api/admin/users', {
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  GET /api/admin/users */
export async function user(id: number, options?: RequestOptionsInit, cache?: boolean) {
  return request<API.UserRow>(`/api/admin/users/${id}`, {
    method: 'GET',
    useCache: cache !== undefined ? cache : true,
    ...(options || {}),
  });
}
/**  GET /api/profile/me */
export async function profile(options?: RequestOptionsInit) {
  return request<API.UserRow>(`/api/profile/me`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  PUT /api/profile/me */
export async function updateProfile(data: Partial<API.UserItem>, options?: RequestOptionsInit) {
  return request<API.UserRow>(`/api/profile/me`, {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}
/**  PUT /api/profile/password */
export async function updateProfilePassword(
  data: Partial<API.UserChangePassword>,
  options?: RequestOptionsInit,
) {
  return request<API.UserRowPassword>(`/api/profile/password`, {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}
/**  PUT /api/admin/users/:id */
export async function updateUser(
  id: number,
  data: Partial<API.UserItem>,
  options?: RequestOptionsInit,
) {
  return request<API.UserRow>(`/api/admin/users/${id}`, {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}
/**  POST /api/admin/users */
export async function createUser(data: Partial<API.UserItem>, options?: RequestOptionsInit) {
  return request<API.UserRow>(`/api/admin/users`, {
    data,
    method: 'POST',
    ...(options || {}),
  });
}
/**  DELETE /api/admin/users/:id */
export async function deleteUser(id: number, options?: RequestOptionsInit) {
  return request<API.UserRow>(`/api/admin/users/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}
/**  POST /api/auth/email/resend */
export async function resendEmail(email: string, options?: RequestOptionsInit) {
  return request<API.UserRow>(`/api/auth/email/resend`, {
    method: 'POST',
    data: {
      email,
    },
    ...(options || {}),
  });
}

/**  GET /api/admin/users/:id/settings */
export async function getUserSettings(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.UserSetting>>(`/api/admin/users/${id}/settings`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
/**  (PUT/PATCH) /api/admin/users/:id/settings */
export async function setUserSettings(
  id: number,
  method: string,
  data: API.UserSetting,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.UserSetting>>(`/api/admin/users/${id}/settings`, {
    method: method,
    data: {
      settings: [data],
    },
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
/**  DELETE /api/admin/users/:id/avatar */
export async function deleteUserAvatar(id: number, options?: RequestOptionsInit) {
  return request<API.DeleteResponse>(`/api/admin/users/${id}/avatar`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

/**  PUT /api/admin/users/:id/interests */
export async function updateUserInterests(
  id: number,
  data: Partial<API.UserItem>,
  options?: RequestOptionsInit,
) {
  return request<API.UserRow>(`/api/admin/users/${id}/interests`, {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}
