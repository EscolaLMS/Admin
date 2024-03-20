import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/admin/products */
export async function products(
  params: API.PageParams &
    API.PaginationParams &
    EscolaLms.Cart.Http.Requests.ProductSearchRequest & {
      type?: 'single' | 'bundle';
      purchasable?: 0 | 1;
      free?: string;
    },
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultMetaResponse<EscolaLms.Cart.Models.Product>>(`/api/admin/products`, {
    method: 'GET',
    params: {
      ...params,
      free: typeof params.free !== 'undefined' ? (params.free === 'true' ? 1 : 0) : undefined,
      per_page: params.pageSize,
      page: params.current,
    },
    ...(options || {}),
  });
}

/**  POST /api/admin/products */
export async function createProduct(
  body: EscolaLms.Cart.Http.Requests.Admin.ProductCreateRequest,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<EscolaLms.Cart.Models.Product>>(`/api/admin/products`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/**  GET /api/admin/products/:id */
export async function getProduct(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<EscolaLms.Cart.Models.Product & { has_trial?: boolean }>>(`/api/admin/products/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/**  PUT/POST /api/admin/products/:id */
export async function updateProduct(
  id: number,
  body: EscolaLms.Cart.Http.Requests.Admin.ProductUpdateRequest,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<EscolaLms.Cart.Models.Product>>(
    `/api/admin/products/${id}?_method=PUT`,
    {
      method: 'POST',
      data: body,
      ...(options || {}),
    },
  );
}

/**  DELETE /api/admin/products/:id */
export async function deleteProduct(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<EscolaLms.Cart.Models.Product>>(`/api/admin/products/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

/**  GET /api/admin/products */
export async function productables(options?: AxiosRequestConfig) {
  return request<API.DefaultMetaResponse<API.ProductableListItem>>(`/api/admin/productables`, {
    method: 'GET',
    ...(options || {}),
  });
}

/**  GET /api/admin/productables/product */
export async function productForModel(
  params: EscolaLms.Cart.Http.Requests.Admin.ProductSearchRequest,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<EscolaLms.Cart.Models.Product>>(
    `/api/admin/productables/product`,
    {
      method: 'GET',
      params,
      ...(options || {}),
    },
  );
}

/**  POST /api/admin/products/{id}/attach */
export async function productAttachToUser(
  id: number,
  body: EscolaLms.Cart.Http.Requests.Admin.ProductAttachRequest,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.ProductableListItem>>(`/api/admin/products/${id}/attach`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/**  POST /api/admin/products/{id}/detach */
export async function productDetachToUser(
  id: number,
  body: EscolaLms.Cart.Http.Requests.Admin.ProductDetachRequest,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.ProductableListItem>>(`/api/admin/products/${id}/detach`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}
