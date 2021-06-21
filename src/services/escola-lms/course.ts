// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

export enum TopicType {
  Unselected = '',
  RichText = 'EscolaLms\\Courses\\Models\\TopicContent\\RichText',
  OEmbed = 'EscolaLms\\Courses\\Models\\TopicContent\\OEmbed',
  Audio = 'EscolaLms\\Courses\\Models\\TopicContent\\Audio',
  Video = 'EscolaLms\\Courses\\Models\\TopicContent\\Video',
  H5P = 'EscolaLms\\Courses\\Models\\TopicContent\\H5P',
}

/**  GET /api/courses */
export async function course(
  params: API.CourseParams & {
    // query
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.CourseList>(`/api/courses`, {
    method: 'GET',
    params: {
      ...params,
      per_page: params.pageSize,
      page: params.current,
    },
    ...(options || {}),
  });
}

/**  GET /api/courses/:id */
export async function getCourse(id: number, options?: { [key: string]: any }) {
  return request<API.DefaultResponse<API.Course>>(`/api/courses/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/**  POST /api/courses/${id} */
export async function updateCourse(
  id: number,
  body?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request<API.DefaultResponse<API.Course>>(`/api/courses/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  POST /api/courses */
export async function createCourse(
  body?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request<API.DefaultResponse<API.Course>>(`/api/courses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  POST /api/courses/{id}/program */
export async function program(
  id: number,
  body?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request<API.DefaultResponse<API.CourseProgram>>(`/api/courses/${id}/program`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function createLesson(
  body?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request<API.DefaultResponse<API.Lesson>>(`/api/lessons`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

export async function updateLesson(
  id: number | false,
  body?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request<API.DefaultResponse<API.Lesson>>(`/api/lessons/${id}?_method=PUT`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

export async function createTopic(body?: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<API.DefaultResponse<API.Topic>>(`/api/topics`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

export async function updateTopic(
  id: number,
  body?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request<API.DefaultResponse<API.Topic>>(`/api/topics/${id}?_method=PUT`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/**  POST /api/courses/sort */
export async function sort(body?: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<API.DefaultResponse<{}>>(`/api/courses/sort`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  POST /api/courses/${id} */
/*
export async function updateCourseCategories(
  id: number,
  body?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request(`/api/courses/attach/${id}/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
*/

/**  PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/**  POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/**  DELETE /api/rule */
export async function removeCourse(id: number) {
  return request<API.DefaultResponse<{}>>(`/api/courses/${id}`, {
    method: 'DELETE',
  });
}

/**  DELETE /api/rule */
export async function removeLesson(id: number) {
  return request<API.DefaultResponse<{}>>(`/api/lessons/${id}`, {
    method: 'DELETE',
  });
}

/**  DELETE /api/rule */
export async function removeTopic(id: number) {
  return request<API.DefaultResponse<{}>>(`/api/topics/${id}`, {
    method: 'DELETE',
  });
}
