import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/track/routes */
export async function track(
  params: API.PageParams & {
    date_from?: string;
    date_to?: string;
    user_id?: number;
    method: 'string';
  },
  options?: RequestOptionsInit,
) {
  return request<API.DefaultMetaResponse<EscolaLms.Tracker.Models.TrackRoute>>(
    `/api/admin/tracks/routes`,
    {
      method: 'GET',
      /* useCache: true */ useCache: false,
      params: {
        ...params,
        per_page: params.pageSize,
        page: params.current,
      },
      ...(options || {}),
    },
  );
}
