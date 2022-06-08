import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/consultations */
export async function consultations(
  params?: API.ConsultationsParams & {
    date_from?: string;
    date_to?: string;
  },
  options?: RequestOptionsInit,
) {
  return request<API.DefaultMetaResponse<API.Consultation>>(`/api/admin/consultations`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params: {
      ...params,
      per_page: params && params.pageSize,
      page: params && params.current,
    },
    ...(options || {}),
  });
}

/**  POST /api/consultations */
export async function createConsultation(body?: Record<string, any>, options?: RequestOptionsInit) {
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
export async function getConsultation(id: number, options?: RequestOptionsInit) {
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
  options?: RequestOptionsInit,
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
export async function deleteConsultation(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Consultation>>(`/api/admin/consultations/${id}`, {
    method: 'DELETE',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  GET /api/admin/consultations/:id/schedule */
export async function getSchedule(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.ConsultationAppointment[]>>(
    `/api/admin/consultations/${id}/schedule`,
    {
      method: 'GET',
      /* useCache: true */ useCache: false,
      ...(options || {}),
    },
  );
}

/**  POST /api/admin/consultations/change-term/{termId} */
export async function changeTermDate(
  termId: number,
  newDate: string,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.Consultation>>(
    `/api/admin/consultations/change-term/${termId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        executed_at: newDate,
      },
      ...(options || {}),
    },
  );
}
