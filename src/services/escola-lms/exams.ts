import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/admin/exams */
export async function getExams(params?: API.ExamsParams, options?: AxiosRequestConfig) {
  return request<API.DefaultMetaResponse<API.Exam>>(`/api/admin/exams`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params,
    ...(options || {}),
  });
}

/**  POST /api/admin/exams */
export async function createExam(body?: API.CreateExamRequest, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Exam>>(`/api/admin/exams`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  PUT /api/admin/exams/:id */
export async function updateExam(
  id: number,
  body: API.CreateExamRequest,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.Exam>>(`/api/admin/exams/${id}`, {
    method: 'PUT',
    data: body,
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  GET /api/admin/exams/:id */
export async function getExam(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Exam>>(`/api/admin/exams/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  DELETE /api/admin/exams/:id */
export async function deleteExam(id: number, options?: AxiosRequestConfig) {
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
  options?: AxiosRequestConfig,
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
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<undefined>>(`/api/admin/exams/${exam_id}/users/${user_id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}
