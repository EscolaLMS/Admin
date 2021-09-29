import { request } from 'umi';

export async function settings(
  params: {
    // query
    current?: number;
    pageSize?: number;
    group?: string;
  },
  options?: Record<string, any>,
) {
  return request<API.SettingsList>(`/api/admin/settings`, {
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

export async function setting(id: number, options?: Record<string, any>) {
  return request<API.DefaultResponse<API.Setting>>(`/api/admin/settings/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function createSettings(body?: Partial<API.Setting>, options?: Record<string, any>) {
  return request<API.DefaultResponse<API.Setting>>(`/api/admin/settings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function updateSettings(
  id: number,
  body?: Partial<API.Setting>,
  options?: Record<string, any>,
) {
  return request<API.DefaultResponse<API.Setting>>(`/api/admin/settings/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteSettings(id: number, options?: Record<string, any>) {
  return request<API.DefaultResponse<API.Setting>>(`/api/admin/settings/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function settingGroups(options?: Record<string, any>) {
  return request<API.DefaultResponse<string[]>>(`/api/admin/settings/groups`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
