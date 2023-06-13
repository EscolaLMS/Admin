import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/pcg-export/groups/:group_id */
export async function getPCGFileData(group_id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.PCGFileData>>(`/api/admin/pcg-export/groups/${group_id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
