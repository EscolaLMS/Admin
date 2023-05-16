import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/semester-subjects/:semester_subject_id/tutors/:tutor_id/grades */
export async function getSubjectTutorGrades(
  semester_subject_id: number,
  tutor_id: number,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.SubjectTutorGrades>>(
    `/api/admin/semester-subjects/${semester_subject_id}/tutors/${tutor_id}/grades`,
    {
      method: 'GET',
      /* useCache: true */ useCache: false,
      ...(options || {}),
    },
  );
}

/**  POST /api/admin/semester-subjects/:semester_subject_id/tutors/:tutor_id/grades */
export async function createSubjectTutorGrades(
  semester_subject_id: number,
  tutor_id: number,
  body: API.CreateSubjectTutorGradesRequest,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.GradeScale[]>>(
    `/api/admin/semester-subjects/${semester_subject_id}/tutors/${tutor_id}/grades`,
    {
      method: 'POST',
      data: body,
      ...(options || {}),
    },
  );
}
