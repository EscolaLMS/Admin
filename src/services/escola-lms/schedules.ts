import type { RequestOptionsInit } from 'umi-request';
import { request } from 'umi';

export async function allSchedules(
  params: API.PageParams &
    API.PaginationParams & {
      // query
      semester_subject_id?: number | null;
      date_form?: Date;
      date_to?: Date;
      group_id?: number;
      term_status_id?: number;
    },
  options?: RequestOptionsInit,
) {
  return request<API.ScheduleList>(`/api/admin/schedules`, {
    params,
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}
