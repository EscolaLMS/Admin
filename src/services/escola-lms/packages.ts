import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/core/packages */
export async function packages(options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<Record<string, string>>>('/api/core/packages', {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
