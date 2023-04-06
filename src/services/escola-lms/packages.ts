import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/core/packages */
export async function packages(options?: RequestOptionsInit) {
  return request<API.DefaultResponse<Record<string, string>>>('/api/core/packages', {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
