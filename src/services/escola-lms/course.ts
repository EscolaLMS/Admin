// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

export enum TopicType {
  Unselected = '',
  RichText = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText',
  OEmbed = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\OEmbed',
  Audio = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\Audio',
  Video = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\Video',
  H5P = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\H5P',
  Image = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\Image',
  PDF = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\PDF',
  SCORM = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\ScormSco',
}

/**  GET /api/courses */
export async function course(
  params: API.CourseParams & {
    // query
    current?: number;
    pageSize?: number;
    title?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.CourseList>(`/api/admin/courses`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
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
  return request<API.DefaultResponse<API.Course>>(`/api/admin/courses/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  POST /api/courses/${id} */
export async function updateCourse(
  id: number,
  body?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request<API.DefaultResponse<API.Course>>(`/api/admin/courses/${id}`, {
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
  return request<API.DefaultResponse<API.Course>>(`/api/admin/courses`, {
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
  return request<API.DefaultResponse<API.CourseProgram>>(`/api/admin/courses/${id}/program`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
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
  return request<API.DefaultResponse<API.Lesson>>(`/api/admin/lessons`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

export async function getCourseStats(
  id: number,
  body?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request<API.DefaultResponse<API.CourseStats>>(`/api/admin/stats/course/${id}`, {
    method: 'GET',
    data: body,
    ...(options || {}),
  });
}

export async function updateLesson(
  id: number | false,
  body?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request<API.DefaultResponse<API.Lesson>>(`/api/admin/lessons/${id}?_method=PUT`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

export async function createTopic(body?: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<API.DefaultResponse<API.Topic>>(`/api/admin/topics`, {
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
  return request<API.DefaultResponse<API.Topic>>(`/api/admin/topics/${id}?_method=PUT`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/**  POST /api/courses/sort */
export async function sort(body?: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<API.DefaultResponse<{}>>(`/api/admin/courses/sort`, {
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

/**  DELETE /api/rule */
export async function removeCourse(id: number) {
  return request<API.DefaultResponse<{}>>(`/api/admin/courses/${id}`, {
    method: 'DELETE',
  });
}

/**  DELETE /api/rule */
export async function removeLesson(id: number) {
  return request<API.DefaultResponse<{}>>(`/api/admin/lessons/${id}`, {
    method: 'DELETE',
  });
}

/**  DELETE /api/rule */
export async function removeTopic(id: number) {
  return request<API.DefaultResponse<{}>>(`/api/admin/topics/${id}`, {
    method: 'DELETE',
  });
}

export async function access(
  id: number,
  body?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request<API.CourseAccessList>(`/api/admin/courses/${id}/access`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function setAccess(
  id: number,
  body: API.CourseAccess,
  options?: { [key: string]: any },
) {
  return request<API.CourseAccessList>(`/api/admin/courses/${id}/access/set`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function resources(topicId: number, options?: { [key: string]: any }) {
  return request<API.ResourceList>(`/api/admin/topics/${topicId}/resources`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function deleteResource(
  topicId: number,
  resourceId: number,
  options?: { [key: string]: any },
) {
  return request<API.ResourceList>(`/api/admin/topics/${topicId}/resources/${resourceId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/**  GET /api/admin/courses/:id/export */
export async function exportCourse(id: number, options?: { [key: string]: any }) {
  return request<API.DefaultResponse<string>>(`/api/admin/courses/${id}/export`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  POST /api/admin/lessons/:id/clone */
export async function cloneLesson(id: number, options?: { [key: string]: any }) {
  return request<API.CourseAccessList>(`/api/admin/lessons/${id}/clone`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/**  POST /api/admin/topics/:id/clone */
export async function cloneTopic(id: number, options?: { [key: string]: any }) {
  return request<API.CourseAccessList>(`/api/admin/topics/${id}/clone`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
