import React, { useMemo, useRef, useState } from 'react';
import { format } from 'date-fns';
import { FormattedMessage } from 'umi';
import ProTable from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';

import { DAY_FORMAT } from '@/consts/dates';
import { AttendanceValue } from '@/services/escola-lms/enums';
import { groupAttendanceSchedule as fetchGroupAttendanceSchedule } from '@/services/escola-lms/attendances';
import { studentUserGroup as fetchStudentUserGroup } from '@/services/escola-lms/student_user_groups';
import AttendanceCheckbox from '@/components/AttendanceCheckbox';
import { useTeacherSubject } from '../context';

type ClassRegisterTableItem = { id: number; full_name: string } & Record<
  string,
  API.AttendanceValue
>;

export const ClassRegister: React.FC = () => {
  const { teacherSubjectData } = useTeacherSubject();
  const [attendanceCols, setAttendanceCols] = useState<ProColumns[]>([]);

  const groupOptions = useMemo(
    () => (teacherSubjectData?.groups ?? []).map(({ id, name }) => ({ value: id, label: name })),
    [teacherSubjectData?.groups],
  );

  const actionRef = useRef<ActionType>();

  const columns: ProColumns[] = useMemo(
    () => [
      {
        title: <FormattedMessage id="group" />,
        dataIndex: 'group_id',
        hideInTable: true,
        valueType: 'select',
        fieldProps: {
          options: groupOptions,
          defaultValue: groupOptions?.[0]?.value,
          allowClear: false,
        },
      },
      {
        title: <FormattedMessage id="nameAndSurname" defaultMessage="Name and surname" />,
        dataIndex: 'full_name',
        fixed: 'left',
      },
      ...attendanceCols,
    ],
    [groupOptions, attendanceCols],
  );

  return (
    <ProTable<ClassRegisterTableItem>
      className="table-standalone"
      request={async ({ group_id = teacherSubjectData?.groups?.[0]?.id, full_name = '' }) => {
        const [studentUserGroupRes, groupAttendanceScheduleRes] = await Promise.all([
          fetchStudentUserGroup(group_id),
          fetchGroupAttendanceSchedule(group_id),
        ]);
        if (!studentUserGroupRes.success || !groupAttendanceScheduleRes.success)
          return { data: [], total: 0, success: false };

        setAttendanceCols(
          groupAttendanceScheduleRes.data.reduce<ProColumns<ClassRegisterTableItem>[]>(
            (acc, curr) => [
              ...acc,
              {
                title: String(format(new Date(curr.date_from), DAY_FORMAT)),
                dataIndex: String(curr.date_from),
                hideInSearch: true,
                width: 100,
                align: 'center',
                render: (_, record) => (
                  <AttendanceCheckbox
                    groupAttendanceScheduleId={curr.id}
                    onSuccess={actionRef.current?.reload}
                    checked={record[`${curr?.date_from}`] === AttendanceValue.PRESENT}
                    studentId={record.id}
                  />
                ),
              },
            ],
            [],
          ),
        );

        const data = studentUserGroupRes.data.users
          .reduce<ClassRegisterTableItem[]>(
            (acc, { id, academic_teacher_id, first_name, last_name }) => {
              const studentFullName = `${last_name} ${first_name}`;
              // filter out tutor & first name and second name filter
              if (
                academic_teacher_id !== null ||
                !studentFullName.toLowerCase().includes(full_name.toLowerCase())
              )
                return acc;

              const studentAttendances = groupAttendanceScheduleRes.data.reduce<
                Record<string, API.AttendanceValue>
              >((innerAcc, groupAttendanceSchedule) => {
                const studentAttendance = groupAttendanceSchedule.attendances.find(
                  (attendance) => attendance.user_id === id,
                );
                if (!studentAttendance) return innerAcc;

                return {
                  ...innerAcc,
                  [`${groupAttendanceSchedule.date_from}`]: studentAttendance.value,
                };
              }, {});

              return [...acc, { id, full_name: studentFullName, ...studentAttendances }];
            },
            [],
          )
          // sort alphabetically
          .sort((a, b) => a.full_name.localeCompare(b.full_name));

        return { data, total: data.length, success: true };
      }}
      columns={columns}
      search={{ layout: 'vertical' }}
      scroll={{ x: 1500 }}
      actionRef={actionRef}
      rowKey="id"
    />
  );
};
