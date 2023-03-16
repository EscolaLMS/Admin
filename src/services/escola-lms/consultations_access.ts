import { request } from 'umi';

import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/consultation-access-enquiries */
export async function consultationAccess(
  params: API.ConsultationAccessEnquiryListParams,
  options?: RequestOptionsInit,
) {
  return request<API.ConsultationAccessEnquiryList>(`/api/admin/consultation-access-enquiries`, {
    method: 'GET',
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    ...(options || {}),
  });
}

/**  POST /api/admin/consultation-access-enquiries/approve/:id */
export async function approveConsultationAccessTerm(
  id: number,
  body: { meeting_link: string },
  options?: RequestOptionsInit,
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
  options?: RequestOptionsInit,
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
