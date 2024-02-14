import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/admin/pdfs */
export async function pdfs(
  params: EscolaLms.TemplatesPdf.Http.Requests.PdfListingAdminRequest,
  options?: AxiosRequestConfig,
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

export async function pdf(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<any>>(`/api/pdfs/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/**  GET /api/pdf/generate/{id} */

export async function generatedPdf(id: number, options?: AxiosRequestConfig) {
  return request<Response>(`/api/pdfs/generate/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}
