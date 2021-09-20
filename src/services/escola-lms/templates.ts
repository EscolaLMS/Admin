import { request } from 'umi';

export async function templates(
  params: {
    // query
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.TemplateList>(`/api/admin/templates`, {
    method: 'GET',
    useCache: true,
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    ...(options || {}),
  });
}

export async function template(id: number, options?: { [key: string]: any }) {
  return request<API.DefaultResponse<API.Template>>(`/api/admin/templates/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

export async function createTemplate(
  body?: Partial<API.Template>,
  options?: { [key: string]: any },
) {
  return request<API.DefaultResponse<API.Template>>(`/api/admin/templates`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function updateTemplate(
  id: number,
  body?: Partial<API.Template>,
  options?: { [key: string]: any },
) {
  return request<API.DefaultResponse<API.Template>>(`/api/admin/templates/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteTemplate(id: number, options?: { [key: string]: any }) {
  return request<API.DefaultResponse<API.Template>>(`/api/admin/templates/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function variables(options?: { [key: string]: any }) {
  return request<API.DefaultResponse<API.TemplateVariables>>(`/api/admin/templates/variables`, {
    method: 'GET',
    ...(options || {}),
  });
}
