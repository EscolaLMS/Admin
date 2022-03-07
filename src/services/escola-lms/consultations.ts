import { request } from 'umi';

export enum ConsultationStatus {
  draft = 'draft',
  published = 'published',
  archived = 'archived',
}

/**  GET /api/admin/consultations */
export async function consultations(
  params: API.ConsultationsParams & {
    date_from?: string;
    date_to?: string;
  },
  options?: Record<string, any>,
) {
  return request<API.DefaultMetaResponse<API.Consultation>>(`/api/admin/consultations`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    ...(options || {}),
  });
}

/**  POST /api/consultations */
export async function createConsultation(
  body?: Record<string, any>,
  options?: Record<string, any>,
) {
  return request<API.DefaultResponse<API.Consultation>>(`/api/admin/consultations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  GET /api/admin/consultations/:id */
export async function getConsultation(id: number, options?: Record<string, any>) {
  return request<API.DefaultResponse<API.Consultation>>(`/api/admin/consultations/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  PUT /api/admin/consultations/:id */
export async function updateConsultation(
  id: number,
  body?: Record<string, any>,
  options?: Record<string, any>,
) {
  return request<API.DefaultResponse<API.Consultation>>(`/api/admin/consultations/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  GET /api/admin/consultations/:id */
export async function deleteConsultation(id: number, options?: Record<string, any>) {
  return request<API.DefaultResponse<API.Consultation>>(`/api/admin/consultations/${id}`, {
    method: 'DELETE',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
