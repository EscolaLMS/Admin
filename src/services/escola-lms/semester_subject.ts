import { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

export async function semesters(params: { academicYearID?: string }, options?: AxiosRequestConfig) {
  return request<API.SemestersList>('/api/admin/semesters', {
    params,
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function semesterSubjects(params: API.SubjectParams, options?: AxiosRequestConfig) {
  return request<API.SubjectsList>('/api/admin/semester-subjects', {
    params,
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function semesterSubject(id: number, options?: AxiosRequestConfig) {
  return request<API.SubjectRow>(`/api/admin/semester-subjects/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/** GET /api/admin/semester-subjects/:id/tutors */
export async function getSemesterSubjectTutors(
  semester_subject_id: number,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.SemesterSubjectTutors>>(
    `/api/admin/semester-subjects/${semester_subject_id}/tutors`,
    {
      method: 'GET',
      /* useCache: true */ useCache: false,
      ...(options || {}),
    },
  );
}
