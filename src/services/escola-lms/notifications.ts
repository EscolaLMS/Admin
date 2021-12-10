import { request } from 'umi';

export async function getNotifications(
  id: number,
  params: {
    // query
    current?: number;
    pageSize?: number;
    event?: string;
  },
  options?: Record<string, any>,
) {
  return request<API.NotificationList>(`/api/admin/notifications/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
      event: params.event,
    },
    ...(options || {}),
  });
}
