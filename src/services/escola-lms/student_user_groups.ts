import type { RequestOptionsInit } from 'umi-request';
import { request } from 'umi';

export async function studentUserGroup(id: number, options?: RequestOptionsInit) {
  return request<any>(`/api/admin/user-groups/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
