import { request } from 'umi';

export async function roles(
  params: {
    // query
    current?: number;
    pageSize?: number;
    search?: string;
    group?: string;
  },
  options?: Record<string, any>,
) {
  return request<API.RolesList>(`/api/admin/roles`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params: {
      ...params,
      search: params.search ? params.search : undefined,
      per_page: params.pageSize,
      page: params.current,
    },
    ...(options || {}),
  });
}

export async function createRole(body?: Partial<API.Role>, options?: Record<string, any>) {
  return request<API.DefaultResponse<API.Role>>(`/api/admin/roles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteRole(id: string, options?: Record<string, any>) {
  return request<API.DefaultResponse<API.Role>>(`/api/admin/roles/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function permisions(name: string, options?: Record<string, any>) {
  return request<API.RolesList>(`/api/admin/roles/${name}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,

    ...(options || {}),
  });
}

export async function setRolePermisions(name: string, body?: any, options?: Record<string, any>) {
  return request<API.DefaultResponse<API.Role>>(`/api/admin/roles/${name}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
