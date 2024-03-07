import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/admin/bulkNotifications */
export async function bulkNotifications(
  params?: API.BulkNotificationsParams,
  options?: AxiosRequestConfig,
) {
  return request<API.BulkNotificationsList>(`/api/admin/bulk-notifications`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params,
    ...(options || {}),
  });
}

export async function sendBulkNotification(body: API.BulkNotificationBody, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.BulkNotification>>(`/api/admin/bulk-notifications/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function sendBulkNotificationForAll(body: API.BulkNotificationBody, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.BulkNotification>>(`/api/admin/bulk-notifications/send/multicast`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
