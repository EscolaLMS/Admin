import { request } from 'umi';

import type { RequestOptionsInit } from 'umi-request';

/** POST /api/admin/gift-questions */
export async function createQuestion(
  body: EscolaLms.TopicTypeGift.Http.Requests.Admin.AdminCreateGiftQuestionRequest,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.GiftQuestion>>(`/api/admin/gift-questions`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** PUT /api/admin/gift-questions */
export async function updateQuestion(
  id: number,
  body: EscolaLms.TopicTypeGift.Http.Requests.Admin.AdminUpdateGiftQuestionRequest & {
    order?: number;
  },
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.GiftQuestion>>(`/api/admin/gift-questions/${id}`, {
    method: 'PUT',
    data: body,
    ...(options || {}),
  });
}

/** DELETE /api/admin/gift-questions */
export async function deleteQuestion(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.GiftQuestion>>(`/api/admin/gift-questions/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** GET /api/admin/quiz-attempts */
export async function getQuizAttempts(
  params: API.QuizAttemptsParams,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultMetaResponse<API.QuizAttempt>>('/api/admin/quiz-attempts', {
    method: 'GET',
    ...(options || {}),
    params,
  });
}

/** GET /api/admin/quiz-attempts/{id} */
export async function getQuizAttemptDetails(id: string | number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.QuizAttemptDetails>>(`/api/admin/quiz-attempts/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}
