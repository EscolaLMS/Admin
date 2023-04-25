import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

export async function templates(params?: API.TemplatesParams, options?: RequestOptionsInit) {
  return request<API.TemplateList>(`/api/admin/templates`, {
    method: 'GET',
    useCache: false,
    params,
    ...(options || {}),
  });
}

export async function template(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Template>>(`/api/admin/templates/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

export async function createTemplate(body?: Partial<API.Template>, options?: RequestOptionsInit) {
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
  options?: RequestOptionsInit,
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

export async function deleteTemplate(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Template>>(`/api/admin/templates/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function variables(options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.TemplateVariables>>(`/api/admin/templates/variables`, {
    method: 'GET',
    ...(options || {}),
  });
}

export async function preview(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<Record<string, string>>>(
    `/api/admin/templates/${id}/preview`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/// api/admin/events/trigger-manually/{id}

export async function triggerManualEvent(
  id: number,

  users: number[],

  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.Template>>(`/api/admin/events/trigger-manually/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      users,
    },
    ...(options || {}),
  });
}

// /api/admin/products/{id}/trigger-event-manually/{idTemplate}

export async function triggerManualEventForProduct(
  templateId: number,
  productId: number,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.Template>>(
    `/api/admin/products/${productId}/trigger-event-manually/${templateId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...(options || {}),
    },
  );
}
