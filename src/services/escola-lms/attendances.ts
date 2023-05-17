import type { RequestOptionsInit } from 'umi-request';
import type { AttendanceValue } from './enums';
import { request } from 'umi';

export async function groupAttendanceSchedule(group_id: number, options?: RequestOptionsInit) {
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
  options?: RequestOptionsInit,
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
