import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/admin/notifications/:id */
export async function getNotifications(
  params: API.PaginationParams & {
    event?: string;
    date_from?: string;
    date_to?: string;
  },
  id?: number,
  options?: AxiosRequestConfig,
) {
  return request<API.NotificationList>(
    id ? `/api/admin/notifications/${id}` : `/api/admin/notifications`,
    {
      method: 'GET',
      /* useCache: true */ useCache: false,
      params,
      ...(options || {}),
    },
  );
}
/**  GET /api/admin/notifications/events */
export async function getEventTypes(options?: AxiosRequestConfig) {
  return request<API.NotificationsEventsList>(`/api/admin/notifications/events`, {
    method: 'GET',
    /* useCache: true */ useCache: false,

    ...(options || {}),
  });
}

/**  POST /api/notifications/:id/read */
export async function readNotification(id: string, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Notification[]>>(`/api/admin/notifications/${id}/read`, {
    method: 'POST',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  POST /api/notifications/read-all */
export async function readAllNotification(options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Notification[]>>(`/api/admin/notifications/read-all`, {
    method: 'POST',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
