import { request } from 'umi';

export const cacheControl = {
  useCache: true,
  validateCache: function () {
    const cache = cacheControl.useCache;
    cacheControl.useCache = true;
    return cache;
  },
};

export async function pages(
  params: {
    // query
    current?: number;
    pageSize?: number;
    forceFetch?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<API.PageList>(`/api/admin/pages`, {
    method: 'GET',
    useCache: true,
    validateCache: cacheControl.validateCache,
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    ...(options || {}),
  });
}

export async function page(id: number, options?: { [key: string]: any }) {
  return request<API.DefaultResponse<API.Page>>(`/api/admin/pages/${id}`, {
    method: 'GET',
    // useCache: true,
    ...(options || {}),
  });
}

export async function createPage(body?: Partial<API.Page>, options?: { [key: string]: any }) {
  return request<API.DefaultResponse<API.Page>>(`/api/admin/pages`, {
    method: 'POST',
    validateCache: cacheControl.validateCache,
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function updatePage(
  id: number,
  body?: Partial<API.Page>,
  options?: { [key: string]: any },
) {
  return request<API.DefaultResponse<API.Page>>(`/api/admin/pages/${id}`, {
    method: 'PATCH',
    validateCache: cacheControl.validateCache,
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deletePage(id: number, options?: { [key: string]: any }) {
  return request<API.DefaultResponse<API.Page>>(`/api/admin/pages/${id}`, {
    method: 'DELETE',
    validateCache: cacheControl.validateCache,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
