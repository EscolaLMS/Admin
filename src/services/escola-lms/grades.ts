import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/grade-scales/:semester_subject_id */
export async function getGradeScales(semester_subject_id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.GradeScale[]>>(
    `/api/admin/grade-scales/${semester_subject_id}`,
    {
      method: 'GET',
      /* useCache: true */ useCache: false,
      ...(options || {}),
    },
  );
}
