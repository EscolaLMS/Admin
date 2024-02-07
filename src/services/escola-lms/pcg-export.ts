import { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/admin/pcg-export/groups/:group_id */
export async function getPCGFileData(group_id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.PCGFileData>>(`/api/admin/pcg-export/groups/${group_id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  GET /api/admin/pcg-export */
export async function getPCGExportsHistory(
  params?: API.PCGFileExportsHistoryParams,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultMetaResponse<API.PCGFileExportsHistoryItem>>(`/api/admin/pcg-export`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params,
    ...(options || {}),
  });
}
