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

/**  GET /api/admin/lesson-group-users */
export async function getGroupFinalGrades(
  group_id: number | number[],
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.FinalGradeItem[]>>(`/api/admin/lesson-group-users`, {
    method: 'GET',
    params: { 'groups[]': group_id },
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  GET /api/admin/lesson-group-users/groups/:group_id/users/:user_id */
export async function getUserFinalGrades(
  group_id: number,
  user_id: number,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.FinalGradeItem>>(
    `/api/admin/lesson-group-users/groups/${group_id}/users/${user_id}`,
    {
      method: 'GET',
      /* useCache: true */ useCache: false,
      ...(options || {}),
    },
  );
}

/** GET /api/admin/grade-terms */
export async function getGradeTerms(options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.GradeTerm[]>>(`/api/admin/grade-terms`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/** GET /api/admin/grade-scales/:s_subject_scale_form_id */
export async function getSubjectGradeScales(
  s_subject_scale_form_id: number,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.SubjectGradeScale[]>>(
    `/api/admin/grade-scales/${s_subject_scale_form_id}`,
    {
      method: 'GET',
      /* useCache: true */ useCache: false,
      ...(options || {}),
    },
  );
}

/** POST /api/admin/final-grades */
export async function createFinalGrade(
  body: API.CreateFinalGradeRequest,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.FinalGradeItem>>(`/api/admin/final-grades`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** PATCH /api/admin/final-grades/:id */
export async function updateFinalGrade(
  final_grade_id: number,
  body: API.UpdateFinalGradeRequest,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.FinalGradeItem>>(
    `/api/admin/final-grades/${final_grade_id}`,
    {
      method: 'PATCH',
      data: body,
      ...(options || {}),
    },
  );
}
