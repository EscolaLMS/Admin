import { request } from 'umi';

import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/tasks */
export async function tasks(params: API.TaskListParams, options?: RequestOptionsInit) {
  return request<API.TaskList>(`/api/admin/tasks`, {
    method: 'GET',
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    ...(options || {}),
  });
}

/**  DELETE /api/admin/tasks/:id */
export async function deleteTask(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Task>>(`/api/admin/tasks/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

/**  GET /api/admin/tasks/:id */
export async function getTask(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Task>>(`/api/admin/tasks/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** POST /api/admin/task */
export async function createTask(body: EscolaLms.Tasks.Http.Requests.Admin.AdminCreateTaskRequest) {
  return request<API.DefaultResponse<API.Task>>(`/api/admin/tasks`, {
    method: 'POST',
    data: body,
  });
}

/**  PATCH /api/admin/tasks/:id */
export async function updateTask(
  id: number,
  body: EscolaLms.Tasks.Http.Requests.Admin.AdminUpdateTaskRequest,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.Task>>(`/api/admin/tasks/${id}`, {
    method: 'PATCH',
    data: body,
    ...(options || {}),
  });
}

/**  POST /api/admin/tasks/complete/:id */
export async function completeTask(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Task>>(`/api/admin/tasks/complete/${id}`, {
    method: 'POST',
    ...(options || {}),
  });
}

/**  POST /api/admin/tasks/incomplete/:id */
export async function incompleteTask(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Task>>(`/api/admin/tasks/incomplete/${id}`, {
    method: 'POST',
    ...(options || {}),
  });
}

/** POST /api/admin/task/notes */
export async function createTaskNote(
  // TODO replace with admin Request
  body: EscolaLms.Tasks.Http.Requests.CreateTaskNoteRequest,
) {
  return request<API.DefaultResponse<API.TaskNote>>(`/api/admin/tasks/notes`, {
    method: 'POST',
    data: body,
  });
}

/** PATCH /api/admin/task/notes */
export async function updateTaskNote(
  id: number,
  body: EscolaLms.Tasks.Http.Requests.UpdateTaskNoteRequest,
) {
  return request<API.DefaultResponse<API.TaskNote>>(`/api/admin/tasks/notes/${id}`, {
    method: 'PATCH',
    data: body,
  });
}

/** DELETE /api/admin/task/notes */
export async function deleteTaskNote(id: number) {
  return request<API.DefaultResponse<API.TaskNote>>(`/api/admin/tasks/notes/${id}`, {
    method: 'DELETE',
  });
}
