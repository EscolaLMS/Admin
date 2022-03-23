import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/vouchers */
export async function vouchers(
  params?: API.PageParams & Partial<EscolaLms.Vouchers.Http.Requests.ListCouponsRequest>,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultMetaResponse<EscolaLms.Vouchers.Http.Requests.ListCouponsRequest>>(
    `/api/admin/vouchers`,
    {
      method: 'GET',
      /* useCache: true */ useCache: false,
      params: {
        ...params,
        per_page: params && params.pageSize,
        page: params && params.current,
      },
      ...(options || {}),
    },
  );
}

/**  POST /api/admin/vouchers */
export async function createVoucher(body?: Record<string, any>, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<EscolaLms.Vouchers.Models.Coupon>>(`/api/admin/vouchers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  GET /api/admin/vouchers/:id */
export async function getVoucher(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<EscolaLms.Vouchers.Models.Coupon>>(
    `/api/admin/vouchers/${id}`,
    {
      method: 'GET',
      /* useCache: true */ useCache: false,
      ...(options || {}),
    },
  );
}

/**  PATCH /api/admin/vouchers */
export async function updateVoucher(
  id: number,
  body?: EscolaLms.Vouchers.Http.Requests.UpdateCouponRequest,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<EscolaLms.Vouchers.Models.Coupon>>(
    `/api/admin/vouchers/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/**  DELETE /api/admin/vouchers/:id */
export async function deleteVoucher(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<EscolaLms.Vouchers.Http.Requests.DeleteCouponRequest>>(
    `/api/admin/vouchers/${id}`,
    {
      method: 'DELETE',
      /* useCache: true */ useCache: false,
      ...(options || {}),
    },
  );
}
