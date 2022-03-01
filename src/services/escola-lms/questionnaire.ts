import { request } from 'umi';

/**  GET /api/admin/questionnaire */
export async function questionnaire(options?: Record<string, any>) {
  return request<API.QuestionnaireList>(`/api/admin/questionnaire`, {
    method: 'GET',

    /* useCache: true */ useCache: false,

    ...(options || {}),
  });
}

/**  GET /api/admin/questionnaire/:id */
export async function questionnaireById(id: number, options?: Record<string, any>) {
  return request<API.DefaultResponse<API.Questionnaire>>(`/api/admin/questionnaire/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,

    ...(options || {}),
  });
}

/**  POST /api/admin/questionnaire */
export async function createQuestionnaire(
  body?: Record<string, any>,
  options?: Record<string, any>,
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
  options?: Record<string, any>,
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

/**  DELETE /api/admin/questionnaire/:id */
export async function deleteQuestionnaire(id: number, options?: Record<string, any>) {
  return request<API.DefaultResponse<{ data: boolean }>>(`/api/admin/questionnaire/${id}`, {
    method: 'DELETE',
    /* useCache: true */ useCache: false,

    ...(options || {}),
  });
}

/**  POST /api/admin/question */
export async function addQuestion(body?: Record<string, any>, options?: Record<string, any>) {
  return request<API.DefaultResponse<API.Question>>(`/api/admin/question`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  DELETE /api/admin/question/:id */
export async function deleteQuestion(id: number, options?: Record<string, any>) {
  return request<API.DefaultResponse<{ data: boolean }>>(`/api/admin/question/${id}`, {
    method: 'DELETE',
    /* useCache: true */ useCache: false,

    ...(options || {}),
  });
}

/**  GET /api/admin/questionnaire-models */
export async function getQuestionnaireModels(options?: Record<string, any>) {
  return request<API.DefaultResponse<API.QuestionnaireModel>>(`/api/admin/questionnaire-models`, {
    method: 'GET',
    /* useCache: true */ useCache: false,

    ...(options || {}),
  });
}

/**  GET /api/admin/questionnaire/report/:id */
export async function questionnaireReport(id: number, options?: Record<string, any>) {
  return request<API.DefaultResponse<API.Questionnaire>>(`/api/admin/questionnaire/report/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,

    ...(options || {}),
  });
}
