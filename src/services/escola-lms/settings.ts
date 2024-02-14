import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/* GET /api/settings */
export async function publicSettings(options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.PublicSettings>>(`/api/settings`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function settings(
  params: {
    // query
    current?: number;
    per_page?: number;
    group?: string;
  },
  options?: AxiosRequestConfig,
) {
  return request<API.SettingsList>(`/api/admin/settings`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params: {
      ...params,
      page: params.current,
    },
    ...(options || {}),
  });
}

export async function setting(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Setting>>(`/api/admin/settings/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function createSettings(body?: Partial<API.Setting>, options?: AxiosRequestConfig) {
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
  options?: AxiosRequestConfig,
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

export async function deleteSettings(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Setting>>(`/api/admin/settings/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function settingGroups(options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<string[]>>(`/api/admin/settings/groups`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function configs(options?: AxiosRequestConfig) {
  return request<API.ConfigsList>(`/api/admin/config`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function updateConfig(
  {
    key,
    value,
  }: {
    key: string;
    value: string | string[];
  },
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.Setting>>(`/api/admin/config`, {
    method: 'POST',
    data: {
      config: [
        {
          key,
          value,
        },
      ],
    },
    ...(options || {}),
  });
}
