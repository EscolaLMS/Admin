import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  POST /api/admin/chats/ms-teams */
export async function createTeamsChat(
  body: API.CreateTeamsChatRequest,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.TeamsChat>>(`/api/admin/chats/ms-teams`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
