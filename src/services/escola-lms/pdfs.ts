import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/pdfs */
export async function pdfs(
  params: EscolaLms.TemplatesPdf.Http.Requests.PdfListingAdminRequest,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultMetaResponse<EscolaLms.TemplatesPdf.Models.FabricPDF>>(
    '/api/admin/pdfs',
    {
      params: {
        ...params,
      },
      method: 'GET',
      ...(options || {}),
    },
  );
}

/**  GET /api/pdf/{id} */

export async function pdf(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<any>>(`/api/pdfs/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}
