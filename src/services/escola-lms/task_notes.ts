// import request, { RequestOptionsInit } from 'umi-request';
// import * as API from '../types/api';
// import { currentTimezone } from '../utils';

// /**  DELETE /api/tasks/:id */
// export async function deleteTask(
//   apiUrl: string,
//   token: string,
//   id: number,
//   options?: RequestOptionsInit
// ) {
//   return request<API.DefaultResponse<API.Task>>(`${apiUrl}/api/tasks/${id}`, {
//     method: 'DELETE',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//       'Current-timezone': currentTimezone(),
//     },
//     ...(options || {}),
//   });
// }

// /**  PATCH /api/tasks/:id */
// export async function updateTask(
//   apiUrl: string,
//   token: string,
//   id: number,
//   body: EscolaLms.Tasks.Http.Requests.UpdateTaskRequest,
//   options?: RequestOptionsInit
// ) {
//   return request<API.DefaultResponse<API.Task>>(`${apiUrl}/api/tasks/${id}`, {
//     method: 'PATCH',
//     data: body,
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//       'Current-timezone': currentTimezone(),
//     },
//     ...(options || {}),
//   });
// }

// /** POST /api/task/notes */
// export async function createTaskNote(
//   apiUrl: string,
//   token: string,
//   body: EscolaLms.Tasks.Http.Requests.CreateTaskNoteRequest
// ) {
//   return request<API.DefaultResponse<API.TaskNote>>(
//     `${apiUrl}/api/tasks/notes`,
//     {
//       method: 'POST',
//       data: body,
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//         'Current-timezone': currentTimezone(),
//       },
//     }
//   );
// }

// /** PATCH /api/task/notes */
// export async function updateTaskNote(
//   apiUrl: string,
//   token: string,
//   id: number,
//   body: EscolaLms.Tasks.Http.Requests.UpdateTaskNoteRequest
// ) {
//   return request<API.DefaultResponse<API.TaskNote>>(
//     `${apiUrl}/api/tasks/notes/${id}`,
//     {
//       method: 'PATCH',
//       data: body,
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//         'Current-timezone': currentTimezone(),
//       },
//     }
//   );
// }

// /** DELETE /api/task/notes */
// export async function deleteTaskNote(
//   apiUrl: string,
//   token: string,
//   id: number
// ) {
//   return request<API.DefaultResponse<API.TaskNote>>(
//     `${apiUrl}/api/tasks/notes/${id}`,
//     {
//       method: 'DELETE',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//         'Current-timezone': currentTimezone(),
//       },
//     }
//   );
// }
