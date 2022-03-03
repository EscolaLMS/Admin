import { request } from 'umi';

/**  GET /api/admin/webinars */
export async function webinars(options?: Record<string, any>) {
  return request<API.DefaultResponse<API.Webinar>>(`/api/admin/webinars`, {
    method: 'GET',
    /* useCache: true */ useCache: false,

    ...(options || {}),
  });
}
