import type { AxiosRequestConfig } from '@umijs/max';

import { request } from 'umi';

// skipErrorHandler: a 403/404 here must not trigger the global redirect off the user details page;
// the caller degrades to an empty state instead.
export async function userHistory(
  userId: number,
  params?: API.StudentHistoryParams,
  options?: AxiosRequestConfig,
) {
  return request<API.StudentHistoryList>(`/api/admin/users/${userId}/history`, {
    method: 'GET',
    params,
    skipErrorHandler: true,
    ...(options || {}),
  });
}

export async function userHistoryEntry(
  userId: number,
  historyId: number,
  options?: AxiosRequestConfig,
) {
  return request<API.StudentHistoryRow>(`/api/admin/users/${userId}/history/${historyId}`, {
    method: 'GET',
    skipErrorHandler: true,
    ...(options || {}),
  });
}
