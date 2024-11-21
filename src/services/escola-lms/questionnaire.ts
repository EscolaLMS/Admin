import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';

/**  GET /api/admin/questionnaire */
export async function questionnaire(
  params?: API.PageParams &
    API.PaginationParams & {
      title?: string;
    },
  options?: AxiosRequestConfig,
) {
  return request<API.QuestionnaireList>(`/api/admin/questionnaire`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params,
    ...(options || {}),
  });
}

/**  GET /api/admin/questionnaire/:id */
export async function getQuestionnaire(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.Questionnaire>>(`/api/admin/questionnaire/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,

    ...(options || {}),
  });
}

/**  POST /api/admin/questionnaire */
export async function createQuestionnaire(
  body?: Record<string, any>,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.Questionnaire>>(`/api/admin/questionnaire`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  PATCH /api/admin/questionnaire */
export async function updateQuestionare(
  id: number,
  body?: Record<string, any>,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.Questionnaire>>(`/api/admin/questionnaire/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  POST /api/admin/question-answers/{id}/change-visiblity */
export async function changeQuestionareVisibility(id: number, body?: Record<string, any>) {
  return request<API.DefaultResponse<any>>(`/api/admin/question-answers/${id}/change-visibility`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  });
}

/**  DELETE /api/admin/questionnaire/:id */
export async function deleteQuestionnaire(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<{ data: boolean }>>(`/api/admin/questionnaire/${id}`, {
    method: 'DELETE',
    /* useCache: true */ useCache: false,

    ...(options || {}),
  });
}

/**  POST /api/admin/question */
export async function addQuestion(body?: Record<string, any>, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.QuestionnaireQuestion>>(`/api/admin/question`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  PATCH /api/admin/question */
export async function editQuestion(
  id: number,
  body?: Record<string, any>,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.QuestionnaireQuestion>>(`/api/admin/question/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  GET /api/admin/question/:id */
export async function getQuestion(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.QuestionnaireQuestion>>(`/api/admin/question/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,

    ...(options || {}),
  });
}

/**  DELETE /api/admin/question/:id */
export async function deleteQuestion(id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<{ data: boolean }>>(`/api/admin/question/${id}`, {
    method: 'DELETE',
    /* useCache: true */ useCache: false,

    ...(options || {}),
  });
}

/**  GET /api/admin/questionnaire-models */
export async function getQuestionnaireModels(options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.QuestionnaireModel[]>>(`/api/admin/questionnaire-models`, {
    method: 'GET',
    /* useCache: true */ useCache: false,

    ...(options || {}),
  });
}

/**  GET /api/admin/questionnaire/report/:id */
export async function questionnaireReport(
  id: number,
  model_class?: number,
  model_id?: number,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.QuestionnaireReport[]>>(
    model_class
      ? `/api/admin/questionnaire/report/${id}/${model_class}/${model_id}`
      : `/api/admin/questionnaire/report/${id}`,
    {
      method: 'GET',
      /* useCache: true */ useCache: false,

      ...(options || {}),
    },
  );
}

/**  PATCH /api/admin/questionnaire */
export async function assignQuestionnaire(
  model: string,
  model_id: number,
  id: number,
  body?: Record<string, any>,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.Questionnaire>>(
    `/api/admin/questionnaire/assign/${model}/${model_id}/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/**  DELETE /api/admin/questionnaire */
export async function unassignQuestionnaire(
  model: string,
  model_id: number,
  id: number,
  body?: Record<string, any>,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.Questionnaire>>(
    `/api/admin/questionnaire/unassign/${model}/${model_id}/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/**  GET /api/admin/question-answers/:id */
export async function getQuestionAnswers(
  id: number,
  params: API.PageParams &
    API.PaginationParams & {
      question_id?: number;
      user_id?: string;
      updated_at?: string;
    },
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultMetaResponse<API.QuestionAnswer>>(`/api/admin/question-answers/${id}`, {
    params,
    method: 'GET',
    /* useCache: true */ useCache: false,

    ...(options || {}),
  });
}

/**  GET /api/questionnaire/stars */
export async function questionnaireStars(model: string, id: number, options?: AxiosRequestConfig) {
  return request<API.DefaultResponse<API.QuestionnaireStars>>(
    `/api/questionnaire/stars/${model}/${id}`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/**  GET /api/admin/questionnaire/:modelTypeTitle/modelId/id */
export async function getQuestionnaireRaport(
  modelTypeTitle: string,
  modelId: number,
  id: number,
  options?: AxiosRequestConfig,
) {
  return request<API.DefaultResponse<API.Questionnaire>>(
    `/api/admin/questionnaire/${modelTypeTitle}/${modelId}/${id}/export`,
    {
      method: 'GET',
      responseType: 'blob',
      /* useCache: true */ useCache: false,

      ...(options || {}),
    },
  );
}
