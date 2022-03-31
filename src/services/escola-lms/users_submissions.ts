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
  options?: Record<string, any>,
) {
  return request<API.DefaultMetaResponse<EscolaLms.AssignWithoutAccount.Models.UserSubmission>>(
    `/api/admin/user-submissions`,
    {
      method: 'GET',
      params: {
        ...params,
        per_page: params && params.pageSize,
        page: params && params.current,
      },
      ...(options || {}),
    },
  );
}

/**  POST /api/admin/user-submissions */
export async function assignUserSubmission(
  body?: Partial<EscolaLms.AssignWithoutAccount.Models.UserSubmission>,
  options?: Record<string, any>,
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
export async function deleteUserSubmission(id: number, options?: Record<string, any>) {
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