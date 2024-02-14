import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/admin/translations */
export async function translations(
  params?: API.PageParams &
    API.PaginationParams & {
      group?: string;
      key?: string;
    },
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultMetaResponse<API.Translation>>(`/api/admin/translations`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params,
    ...(options || {}),
  });
}

/**  POST /api/admin/translations */
export async function createTranslation(body: API.Translation, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Translation>>(`/api/admin/translations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  GET /api/admin/translations */
export async function getTranslation(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Translation>>(`/api/admin/translations/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },

    ...(options || {}),
  });
}

/**  GET /api/admin/translations/retrieve */
export async function getTranslationRetrieve(key: string, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.TranslationRetrieve[]>>(
    `/api/admin/translations/retrieve`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        key,
      },
      ...(options || {}),
    },
  );
}

/**  PUT /api/admin/translations */
export async function updateTranslation(
  id: number,
  body: API.Translation,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.Translation>>(`/api/admin/translations/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  DELETE /api/admin/translations */
export async function deleteTranslation(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Translation>>(`/api/admin/translations/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },

    ...(options || {}),
  });
}
