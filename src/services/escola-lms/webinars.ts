import { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/admin/webinars */
export async function webinars(params?: API.WebinarsParams, options?: AxiosRequestConfig) {
  return request<API.DefaultMetaResponse<API.Webinar>>(`/api/admin/webinars`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params,
    ...(options || {}),
  });
}

/**  POST /api/webinars */
export async function createWebinar(body?: Partial<API.Webinar>, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Webinar>>(`/api/admin/webinars`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  GET /api/admin/webinars/:id */
export async function getWebinar(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Webinar>>(`/api/admin/webinars/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  PUT /api/admin/webinars/:id */
export async function updateWebinar(
  id: number,
  body?: Record<string, any>,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.Webinar>>(`/api/admin/webinars/${id}?method=PUT`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  DELETE /api/admin/webinars/:id */
export async function deleteWebinar(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Webinar>>(`/api/admin/webinars/${id}`, {
    method: 'DELETE',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  POST /api/admin/g-token/generate */
export async function generateYoutubeToken(body?: { email: string }, options?: AxiosRequestConfig) {
  return request<{ url: string }>(`/api/admin/g-token/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
