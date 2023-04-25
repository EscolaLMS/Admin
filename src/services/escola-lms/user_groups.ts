import type { RequestOptionsInit } from 'umi-request';

import { request } from 'umi';

export async function userGroups(
  params: API.PageParams &
    API.PaginationParams & {
      // query
      search?: string;
      parent_id?: number;
    },
  options?: RequestOptionsInit,
) {
  return request<API.UserGroupList>('/api/admin/user-groups', {
    params,
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  GET /api/admin/users */
export async function userGroup(id: number, options?: RequestOptionsInit) {
  return request<API.UserGroupRow>(`/api/admin/user-groups/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function updateUserGroup(
  id: number,
  data: Partial<API.UserGroup>,
  options?: RequestOptionsInit,
) {
  return request<API.UserGroupRow>(`/api/admin/user-groups/${id}`, {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}

export async function createUserGroup(data: Partial<API.UserGroup>, options?: RequestOptionsInit) {
  return request<API.UserGroupRow>(`/api/admin/user-groups`, {
    data,
    method: 'POST',
    ...(options || {}),
  });
}

export async function deleteUserGroup(id: number, options?: RequestOptionsInit) {
  return request<API.UserGroupRow>(`/api/admin/user-groups/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

export async function addUserToGroup(
  group_id: number,
  user_id: number,
  options?: RequestOptionsInit,
) {
  return request<API.UserGroupAddRow>(`/api/admin/user-groups/${group_id}/members`, {
    data: {
      user_id,
    },
    method: 'POST',
    ...(options || {}),
  });
}

export async function removeUserFromGroup(
  group_id: number,
  user_id: number,
  options?: RequestOptionsInit,
) {
  return request<API.UserGroupAddRow>(`/api/admin/user-groups/${group_id}/members/${user_id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

export async function userGroupsTree(
  params?: {
    search?: string;
    parent_id?: number;
    user_id?: number;
  } & API.PaginationParams,
  options?: RequestOptionsInit,
) {
  return request<API.UserGroupList>('/api/admin/user-groups/tree', {
    params,
    method: 'GET',
    ...(options || {}),
  });
}
