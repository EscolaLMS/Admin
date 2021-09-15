// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

export async function reports(
  params: {
    // query
    metric: API.ReportType;
    date?: string;
    limit?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.ReportList>('/api/admin/reports/report', {
    params,
    method: 'GET',
    useCache: true,
    ...(options || {}),
  });
}
