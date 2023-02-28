import { request } from 'umi';

import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/admin/tasks */
export async function tasks(params: API.TaskListParams, options?: RequestOptionsInit) {
  return request<API.TaskList>(`/api/admin/tasks`, {
    method: 'GET',
    params,
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

// /**  POST /api/tasks/complete/:id */
// export async function completeTask(
//   apiUrl: string,
//   token: string,
//   id: number,
//   options?: RequestOptionsInit,
// ) {
//   return request<API.DefaultResponse<API.Task>>(`${apiUrl}/api/tasks/complete/${id}`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//       'Current-timezone': currentTimezone(),
//     },
//     ...(options || {}),
//   });
// }

// /**  POST /api/tasks/incomplete/:id */
// export async function incompleteTask(
//   apiUrl: string,
//   token: string,
//   id: number,
//   options?: RequestOptionsInit,
// ) {
//   return request<API.DefaultResponse<API.Task>>(`${apiUrl}/api/tasks/incomplete/${id}`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//       'Current-timezone': currentTimezone(),
//     },
//     ...(options || {}),
//   });
// }
