import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/admin/vouchers */
export async function vouchers(params?: API.Vouchers, options?: AxiosRequestConfig) {
  return request<API.DefaultMetaResponse<EscolaLms.Vouchers.Models.Coupon>>(`/api/admin/vouchers`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params,
    ...(options || {}),
  });
}

/**  POST /api/admin/vouchers */
export async function createVoucher(body?: Record<string, any>, options?: AxiosRequestConfig) {
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
export async function getVoucher(id: number, options?: AxiosRequestConfig) {
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
  options?: AxiosRequestConfig,
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
export async function deleteVoucher(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<EscolaLms.Vouchers.Http.Requests.DeleteCouponRequest>>(
    `/api/admin/vouchers/${id}`,
    {
      method: 'DELETE',
      /* useCache: true */ useCache: false,
      ...(options || {}),
    },
  );
}
