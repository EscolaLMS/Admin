import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/model-fields */
export async function fields(
  params: API.PageParams &
    API.PaginationParams & {
      class_type: string;
    },
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<EscolaLms.ModelFields.Models.Metadata[]>>(
    `/api/model-fields`,
    {
      method: 'GET',
      params,
      ...(options || {}),
    },
  );
}

/**  POST /api/aadmin/model-fields */
export async function createOrUpdateField(
  body: EscolaLms.ModelFields.Http.Requests.MetadataCreateOrUpdateRequest,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<EscolaLms.ModelFields.Models.Metadata>>(
    `/api/admin/model-fields`,
    {
      method: 'POST',
      data: body,
      ...(options || {}),
    },
  );
}

/**  DELETE /api/admin/model-fields */
export async function deleteField(
  body: EscolaLms.ModelFields.Http.Requests.MetadataDeleteRequest,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<boolean>>(`/api/admin/model-fields`, {
    method: 'DELETE',
    data: body,
    ...(options || {}),
  });
}
