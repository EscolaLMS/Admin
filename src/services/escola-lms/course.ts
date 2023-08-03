import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

/**  GET /api/courses */
export async function course(
  { authors, ...params }: API.CourseParams,
  options?: RequestOptionsInit,
) {
  return request<API.CourseList>(`/api/admin/courses`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params: { ...params, 'authors[]': authors },
    ...(options || {}),
  });
}

/**  GET /api/courses/:id */
export async function getCourse(id: number, options?: RequestOptionsInit, cache?: boolean) {
  return request<API.DefaultResponse<API.Course>>(`/api/admin/courses/${id}`, {
    method: 'GET',
    /* useCache: true */ useCache: cache !== undefined ? cache : true,
    ...(options || {}),
  });
}

/**  POST /api/courses/${id} */
export async function updateCourse(
  id: number,
  body?: Record<string, any>,
  options?: RequestOptionsInit,
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
export async function createCourse(body?: Record<string, any>, options?: RequestOptionsInit) {
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
  body?: Record<string, any>,
  options?: RequestOptionsInit,
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

export async function createLesson(body?: Record<string, any>, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Lesson>>(`/api/admin/lessons`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

export async function getCourseStats(
  id: number,
  stats?: API.CourseStatsParam[],
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.CourseStats>>(`/api/admin/stats/course/${id}`, {
    method: 'GET',
    params: { 'stats[]': stats },
    ...(options || {}),
  });
}

export async function getTopicStats(
  topic_id: number,
  stats?: API.TopicStatsKey | API.TopicStatsKey[],
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.TopicStats>>(`/api/admin/stats/topic/${topic_id}`, {
    params: { 'stats[]': stats },
    ...(options ?? {}),
  });
}

export async function updateLesson(
  id: number | false,
  body?: Record<string, any>,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.Lesson>>(`/api/admin/lessons/${id}?_method=PUT`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

export async function createTopic(body?: Record<string, any>, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Topic>>(`/api/admin/topics`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

export async function updateTopic(
  id: number,
  body?: Record<string, any>,
  options?: RequestOptionsInit,
) {
  return request<API.DefaultResponse<API.Topic>>(`/api/admin/topics/${id}?_method=PUT`, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/**  POST /api/courses/sort */
export async function sort(body: API.CoursesSortRequest, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<unknown>>(`/api/admin/courses/sort`, {
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
  options?: RequestOptionsInit,
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
  return request<API.DefaultResponse<unknown>>(`/api/admin/courses/${id}`, {
    method: 'DELETE',
  });
}

/**  DELETE /api/rule */
export async function removeLesson(id: number) {
  return request<API.DefaultResponse<unknown>>(`/api/admin/lessons/${id}`, {
    method: 'DELETE',
  });
}

/**  DELETE /api/rule */
export async function removeTopic(id: number) {
  return request<API.DefaultResponse<unknown>>(`/api/admin/topics/${id}`, {
    method: 'DELETE',
  });
}

export async function access(id: number, body?: Record<string, any>, options?: RequestOptionsInit) {
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

export async function setAccess(id: number, body: API.CourseAccess, options?: RequestOptionsInit) {
  return request<API.CourseAccessList>(`/api/admin/courses/${id}/access/set`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function resources(topicId: number, options?: RequestOptionsInit) {
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
  options?: RequestOptionsInit,
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
export async function exportCourse(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<string>>(`/api/admin/courses/${id}/export`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/**  POST /api/admin/lessons/:id/clone */
export async function cloneLesson(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Lesson>>(`/api/admin/lessons/${id}/clone`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/**  POST /api/admin/topics/:id/clone */
export async function cloneTopic(id: number, options?: RequestOptionsInit) {
  return request<API.CourseAccessList>(`/api/admin/topics/${id}/clone`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/**  POST /api/admin/courses/:id/clone */
export async function cloneCourse(id: number, options?: RequestOptionsInit) {
  return request<API.DefaultResponse<API.Course>>(`/api/admin/courses/${id}/clone`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
