import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/admin/user-submissions */
export async function userSubmissions(
  params?: API.PageParams &
    API.PaginationParams & {
      email?: string;
      status?: string;
      morphable_id?: number;
      morphable_type?: string;
    },
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultMetaResponse<EscolaLms.AssignWithoutAccount.Models.UserSubmission>>(
    `/api/admin/user-submissions`,
    {
      method: 'GET',
      params,
      ...(options || {}),
    },
  );
}

/**  POST /api/admin/user-submissions */
export async function assignUserSubmission(
  body?: Partial<EscolaLms.AssignWithoutAccount.Models.UserSubmission>,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<EscolaLms.AssignWithoutAccount.Models.UserSubmission>>(
    `/api/admin/user-submissions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/**  DELETE /api/admin/user-submissions/:id */
export async function deleteUserSubmission(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<EscolaLms.AssignWithoutAccount.Models.UserSubmission>>(
    `/api/admin/user-submissions/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      ...(options || {}),
    },
  );
}
