import type { AxiosRequestConfig } from '@umijs/max';

import { request } from 'umi';

/**
 * GET /api/admin/users/:id/history
 *
 * Paginated student-history list (sorted `left_at` DESC). `skipErrorHandler` keeps a 403 (viewer
 * lacks `student-history_list`) or transient failure from tearing down / redirecting the details
 * page — the caller degrades to an empty state instead. An empty history is a 200 with `data: []`.
 */
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

/** GET /api/admin/users/:id/history/:historyId — full snapshot for the detail drawer. */
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