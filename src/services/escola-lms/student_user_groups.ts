import type { RequestOptionsInit } from 'umi-request';
import { request } from 'umi';

export async function allStudentsAndGroups(
  params: API.PageParams &
    API.PaginationParams & {
      // query
      search?: string;
      parent_id?: number;
      user_id?: number;
      'id[]'?: number[];
    },
  options?: RequestOptionsInit,
) {
  return request<API.StudentGroupRow>(`/api/admin/user-groups/users`, {
    params,
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function studentUserGroup(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.StudentUserGroup>>(`/api/admin/user-groups/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
