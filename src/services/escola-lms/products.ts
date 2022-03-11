import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/products */
export async function products(
  params: API.PageParams & API.PaginationParams & EscolaLms.Cart.Http.Requests.ProductSearchRequest,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultMetaResponse<EscolaLms.Cart.Models.Product>>(`/api/admin/products`, {
    method: 'GET',
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    ...(options || {}),
  });
}

/**  POST /api/admin/products */
export async function createProduct(
  body: EscolaLms.Cart.Http.Requests.Admin.ProductCreateRequest,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<EscolaLms.Cart.Models.Product>>(`/api/admin/products`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/**  GET /api/admin/webinars/:id */
export async function getProduct(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<EscolaLms.Cart.Models.Product>>(`/api/admin/products/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/**  PUT/POST /api/admin/products/:id */
export async function updateProduct(
  id: number,
  body: EscolaLms.Cart.Http.Requests.Admin.ProductUpdateRequest,
  options?: RequestOptionsInit,
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
export async function deleteProduct(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<EscolaLms.Cart.Models.Product>>(`/api/admin/products/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

/**  GET /api/admin/products */
export async function productables(options?: RequestOptionsInit) {
  return request<API.DefaultMetaResponse<API.ProductableListItem>>(`/api/admin/productables`, {
    method: 'GET',
    ...(options || {}),
  });
}
