import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/translations */
export async function translations(
  params?: API.PageParams &
    API.PaginationParams & {
      group: string;
      key: string;
    },
  options?: RequestOptionsInit,
) {
  return request<API.DefaultMetaResponse<API.Translation>>(`/api/admin/translations`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params: {
      ...params,
      per_page: params && params.pageSize,
      page: params && params.current,
    },
    ...(options || {}),
  });
}

/**  POST /api/admin/translations */
export async function createTranslation(body: API.Translation, options?: RequestOptionsInit) {
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
export async function getTranslation(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Translation>>(`/api/admin/translations/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },

    ...(options || {}),
  });
}

/**  PUT /api/admin/translations */
export async function updateTranslation(
  id: number,
  body: API.Translation,
  options?: RequestOptionsInit,
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
export async function deleteTranslation(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Translation>>(`/api/admin/translations/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },

    ...(options || {}),
  });
}
