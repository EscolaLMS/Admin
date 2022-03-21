import { request } from 'umi';

/**  GET /api/admin/vouchers */
export async function vouchers(params?: any, options?: Record<string, any>) {
  return request<API.DefaultMetaResponse<any>>(`/api/admin/vouchers`, {
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

/**  POST /api/admin/vouchers */
export async function createVoucher(body?: Record<string, any>, options?: Record<string, any>) {
  return request<API.DefaultResponse<any>>(`/api/admin/vouchers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  GET /api/admin/vouchers/:id */
export async function getVoucher(id: number, options?: Record<string, any>) {
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
  body?: Record<string, any>,
  options?: Record<string, any>,
) {
  return request<API.DefaultResponse<any>>(`/api/admin/vouchers/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  DELETE /api/admin/vouchers/:id */
export async function deleteVoucher(id: number, options?: Record<string, any>) {
  return request<API.DefaultResponse<EscolaLms.Vouchers.Models.Coupon>>(
    `/api/admin/vouchers/${id}`,
    {
      method: 'DELETE',
      /* useCache: true */ useCache: false,
      ...(options || {}),
    },
  );
}
