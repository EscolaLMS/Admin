// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

export async function userGroups(
  params: {
    // query
    current?: number;
    pageSize?: number;
    search?: string;
    parent_id?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserGroupList>('/api/admin/user-groups', {
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
      search: params.search ? params.search : undefined,
      parent_id: params.parent_id,
    },
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  GET /api/admin/users */
export async function userGroup(id: number, options?: { [key: string]: any }) {
  return request<API.UserGroupRow>(`/api/admin/user-groups/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function updateUserGroup(
  id: number,
  data: Partial<API.UserGroup>,
  options?: { [key: string]: any },
) {
  return request<API.UserGroupRow>(`/api/admin/user-groups/${id}`, {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}

export async function createUserGroup(
  data: Partial<API.UserGroup>,
  options?: { [key: string]: any },
) {
  return request<API.UserGroupRow>(`/api/admin/user-groups`, {
    data,
    method: 'POST',
    ...(options || {}),
  });
}

export async function deleteUserGroup(id: number, options?: { [key: string]: any }) {
  return request<API.UserGroupRow>(`/api/admin/user-groups/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

export async function addUserToGroup(
  group_id: number,
  user_id: number,
  options?: { [key: string]: any },
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
  options?: { [key: string]: any },
) {
  return request<API.UserGroupAddRow>(`/api/admin/user-groups/${group_id}/members/${user_id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}
