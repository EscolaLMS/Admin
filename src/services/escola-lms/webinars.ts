import { request } from 'umi';

export enum WebinarStatus {
  draft = 'draft',
  published = 'published',
  archived = 'archived',
}

/**  GET /api/admin/webinars */
export async function webinars(
  params: API.ConsultationsParams & {
    date_from?: string;
    date_to?: string;
  },
  options?: Record<string, any>,
) {
  return request<API.DefaultMetaResponse<API.Webinar>>(`/api/admin/webinars`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**  POST /api/webinars */
export async function createWebinar(body?: Record<string, any>, options?: Record<string, any>) {
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
export async function getWebinar(id: number, options?: Record<string, any>) {
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
  options?: Record<string, any>,
) {
  return request<API.DefaultResponse<API.Webinar>>(`/api/admin/webinars/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  GET /api/admin/webinars/:id */
export async function deleteWebinar(id: number, options?: Record<string, any>) {
  return request<API.DefaultResponse<API.Webinar>>(`/api/admin/webinars/${id}`, {
    method: 'DELETE',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
