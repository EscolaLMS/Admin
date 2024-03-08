import { request } from 'umi';

import type { AxiosRequestConfig } from '@umijs/max';

/** POST /api/admin/gift-questions */
export async function createQuestion(body: API.CreateQuizQuestion, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.AttemptGiftQuestion>>(`/api/admin/gift-questions`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** PUT /api/admin/gift-questions */
export async function updateQuestion(
  id: number,
  body: API.CreateQuizQuestion,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.AttemptGiftQuestion>>(`/api/admin/gift-questions/${id}`, {
    method: 'PUT',
    data: body,
    ...(options || {}),
  });
}

/** DELETE /api/admin/gift-questions */
export async function deleteQuestion(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.AttemptGiftQuestion>>(`/api/admin/gift-questions/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** GET /api/admin/quiz-attempts */
export async function getQuizAttempts(
  params: API.QuizAttemptsParams,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultMetaResponse<API.QuizAttempt>>('/api/admin/quiz-attempts', {
    method: 'GET',
    ...(options || {}),
    params,
  });
}

/** GET /api/admin/quiz-attempts/{id} */
export async function getQuizAttemptDetails(id: string | number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.QuizAttemptDetails>>(`/api/admin/quiz-attempts/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** PATCH /api/admin/quiz-answers/{id} */
export async function updateQuizAnswer(
  answer_id: number,
  body: API.UpdateGiftQuizAnswer,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.AttemptAnswer>>(`/api/admin/quiz-answers/${answer_id}`, {
    method: 'PATCH',
    data: body,
    ...(options || {}),
  });
}

/** GET /api/admin/gift-quizes/{id} */
export async function getGiftQuiz(id: string | number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.GiftQuiz>>(`/api/admin/gift-quizes/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** PUT /api/admin/gift-quizes/{id} */
export async function updateGiftQuiz(
  id: string | number,
  body: API.UpdateGiftQuiz,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.GiftQuiz>>(`/api/admin/gift-quizes/${id}`, {
    method: 'PUT',
    data: body,
    ...(options || {}),
  });
}

/** GET /api/admin/gift-questions/export */
export async function exportQuizQuestions(
  { quiz_id, ...params }: API.ExportGiftQuizQuestionsParams,
  options?: AxiosRequestConfig,
) {
  return request<Blob | API.DefaultResponseError>(`/api/admin/gift-questions/export`, {
    method: 'GET',
    responseType: 'blob',
    params: {
      topic_gift_quiz_id: quiz_id,
      category_ids: 'category_ids' in params ? params.category_ids : undefined,
      ids: 'ids' in params ? params.ids : undefined,
    },
    ...(options || {}),
  });
}
