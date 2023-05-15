import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/exams */
export async function getExams(params?: API.ExamsParams, options?: RequestOptionsInit) {
  return request<API.DefaultMetaResponse<API.Exam>>(`/api/admin/exams`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params,
    ...(options || {}),
  });
}

/**  POST /api/admin/exams */
export async function createExam(body?: API.CreateExamRequest, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Exam>>(`/api/admin/exams`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  GET /api/admin/exams/:id */
export async function getExam(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Exam>>(`/api/admin/exams/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  DELETE /api/admin/exams/:id */
export async function deleteExam(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<undefined>>(`/api/admin/exams/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

/**  POST /api/admin/exams/:id/users/:user_id */
export async function createExamResult(
  exam_id: number,
  user_id: number,
  body: API.CreateExamResultRequest,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.Exam>>(`/api/admin/exams/${exam_id}/users/${user_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  DELETE /api/admin/exams/:id/users/:user_id */
export async function deleteExamResult(
  exam_id: number,
  user_id: number,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<undefined>>(`/api/admin/exams/${exam_id}/users/${user_id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}
