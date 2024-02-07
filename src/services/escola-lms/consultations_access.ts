import { request } from 'umi';

import { AxiosRequestConfig } from '@umijs/max';

/**  GET /api/admin/consultation-access-enquiries */
export async function consultationAccess(
  params: API.ConsultationAccessEnquiryListParams,
  options?: AxiosRequestConfig,
) {
  return request<API.ConsultationAccessEnquiryList>(`/api/admin/consultation-access-enquiries`, {
    method: 'GET',
    params,
    ...(options || {}),
  });
}

/**  POST /api/admin/consultation-access-enquiries/approve/:id */
export async function approveConsultationAccessTerm(
  id: number,
  body: { meeting_link: string | null },
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.ConsultationAccessEnquiry>>(
    `/api/admin/consultation-access-enquiries/approve/${id}`,
    {
      data: body,
      method: 'POST',
      ...(options || {}),
    },
  );
}

/**  POST /api/admin/consultation-access-enquiries/disapprove/:id */
export async function disapproveConsultationAccess(
  id: number,
  body: EscolaLms.ConsultationAccess.Http.Requests.Admin.AdminDisapproveConsultationAccessEnquiryRequest,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.ConsultationAccessEnquiry>>(
    `/api/admin/consultation-access-enquiries/disapprove/${id}`,
    {
      data: body,
      method: 'POST',
      ...(options || {}),
    },
  );
}
