import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  POST /api/admin/chats/ms-teams */
export async function createTeamsChat(
  body: API.CreateTeamsChatRequest,
  options?: RequestOptionsInit,
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
