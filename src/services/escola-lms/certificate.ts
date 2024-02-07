import { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/admin/templates/assignable */
export async function assignable(
  params?: EscolaLms.Templates.Http.Requests.TemplateListAssignableRequest,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultMetaResponse<API.Certificate>>('/api/admin/templates/assignable', {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params,
    ...(options || {}),
  });
}

export async function assign(
  id: number,
  body: { assignable_id: number },
  options?: AxiosRequestConfig,
) {
  return request<API.CourseAccessList>(`/api/admin/templates/${id}/assign`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function unassign(
  id: number,
  body: { assignable_id: number },
  options?: AxiosRequestConfig,
) {
  return request<API.CourseAccessList>(`/api/admin/templates/${id}/unassign`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  GET /api/admin/templates/assigned */
export async function assigned(params: API.TemplateItem, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Certificate[]>>(`/api/admin/templates/assigned`, {
    params,
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
