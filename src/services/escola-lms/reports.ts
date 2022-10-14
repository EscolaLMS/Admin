import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

export async function reports(
  params: {
    // query
    metric: API.ReportType;
    date?: string;
    limit?: number;
  },
  options?: RequestOptionsInit,
) {
  console.clear();
  console.log(params);
  return request<API.ReportList>('/api/admin/reports/report', {
    params,
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
