import type { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';
import type { AttendanceValue } from './enums';

export async function groupAttendanceSchedule(group_id: number, options?: AxiosRequestConfig) {
  return request<API.AttendanceScheduleList>(`/api/admin/schedules/groups/${group_id}`, {
    method: 'GET',
    /* useCache: true */ useCache: false,
    ...(options || {}),
  });
}

export async function changeStudentAttendance(
  id: number,
  user_id: number,
  value: AttendanceValue,
  options?: AxiosRequestConfig,
) {
  return request<API.ChangeStudentAttendance>(`/api/admin/schedules/${id}/attendances`, {
    data: {
      attendances: [
        {
          user_id,
          value,
        },
      ],
    },
    method: 'POST',
    ...(options || {}),
  });
}
