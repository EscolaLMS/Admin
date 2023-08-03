import { request } from 'umi';
import type { RequestOptionsInit } from 'umi-request';

export async function reports(
  params: {
    // query
    metric: API.ReportType;
    date?: string;
    limit?: number;
  },
  options?: RequestOptionsInit,
) {
  return request<API.ReportList>('/api/admin/reports/report', {
    params,
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

/* GET /api/admin/stats/course/:course_id/export */
export async function exportStatForCourse(
  course_id: number,
  params: API.ExportStatForCourseParams,
  options?: RequestOptionsInit,
) {
  return request<Blob | API.DefaultResponseError>(`/api/admin/stats/course/${course_id}/export`, {
    params,
    method: 'GET',
    /* useCache: true */ useCache: false,
    responseType: 'blob',
    headers: {
      accept: 'application/vnd.ms-excel',
    },
    ...(options || {}),
  });
}

/* GET /api/admin/stats/topic/:topic_id/export */
export async function exportStatForTopic(
  topic_id: number,
  stat: API.TopicStatsKey,
  options?: RequestOptionsInit,
) {
  return request<Blob | API.DefaultResponseError>(`/api/admin/stats/topic/${topic_id}/export`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    params: { stat },
    responseType: 'blob',
    headers: {
      accept: 'application/vnd.ms-excel',
    },
    ...(options || {}),
  });
}
