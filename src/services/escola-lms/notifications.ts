import { request } from 'umi';

/**  GET /api/admin/notifications/:id */
export async function getNotifications(
  params: {
    current?: number;
    pageSize?: number;
    event?: string;
  },
  id?: number,
  options?: Record<string, any>,
) {
  return request<API.NotificationList>(
    id ? `/api/admin/notifications/${id}` : `/api/admin/notifications`,
    {
      method: 'GET',
      /* useCache: true */ useCache: false,
      params: {
        ...params,
        per_page: params.pageSize,
        page: params.current,
        event: params.event,
      },
      ...(options || {}),
    },
  );
}
/**  GET /api/admin/notifications/events */
export async function getEventTypes(options?: Record<string, any>) {
  return request<API.NotificationsEventsList>(`/api/admin/notifications/events`, {
    method: 'GET',
    /* useCache: true */ useCache: false,

    ...(options || {}),
  });
}

/**  POST /api/notifications/:id/read */
export async function readNotification(id: string, options?: Record<string, any>) {
  return request<API.DefaultResponse<API.Notification[]>>(`/api/notifications/${id}/read`, {
    method: 'POST',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
