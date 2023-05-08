import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

export async function semesters(params: { academicYearID?: string }, options?: RequestOptionsInit) {
  return request<API.SemestersList>('/api/admin/semesters', {
    params,
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function semesterSubject(
  params: API.PageParams & API.PaginationParams & { semester_id?: number },
  options?: RequestOptionsInit,
) {
  return request<API.SubjectsList>('/api/admin/semester-subjects', {
    params,
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
