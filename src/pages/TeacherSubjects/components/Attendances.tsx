import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';
import { FormattedMessage, useIntl } from 'umi';
import { Divider, Select } from 'antd';
import ProForm from '@ant-design/pro-form';
import ProTable from '@ant-design/pro-table';
import type { ProColumns } from '@ant-design/pro-table';

import { DAY_FORMAT } from '@/consts/dates';
import { groupAttendanceSchedule as fetchGroupAttendanceSchedule } from '@/services/escola-lms/attendances';
import { studentUserGroup as fetchStudentUserGroup } from '@/services/escola-lms/student_user_groups';
import type { AttendanceValue } from '@/services/escola-lms/enums';
import AttendanceCheckbox from '@/components/AttendanceCheckbox';
import { useTeacherSubject } from '../context';

export type AttendanceTableItem = BaseUserProps & Record<string, AttendanceValue | null>;

interface BaseUserProps {
  id: number;
  full_name: string;
  academic_teacher_id: number | null;
}

interface Filters {
  full_name: string;
}

export const Attendances: React.FC = () => {
  const { teacherSubjectData } = useTeacherSubject();
  const intl = useIntl();
  const [loading, setLoading] = useState(false);
  const [attendanceSchedule, setAttendanceSchedule] = useState<API.GroupAttendanceSchedule[]>();
  const [studentsGroup, setStudentsGroup] = useState<API.StudentUserGroup>();

  const [filters, setFilters] = useState<Filters>({ full_name: '' });
  const [selectedGroup, setSelectedGroup] = useState<number | null>(
    teacherSubjectData?.groups?.[0]?.id ?? null,
  );

  const dataSource = useMemo(
    () =>
      (studentsGroup?.users ?? []).reduce<AttendanceTableItem[]>(
        (acc, { id, first_name, last_name, academic_teacher_id }) => {
          const baseUser: BaseUserProps = {
            id,
            full_name: `${first_name} ${last_name}`,
            academic_teacher_id,
          };

          // filters implementation
          if (!baseUser.full_name.toLowerCase().includes(filters.full_name.toLowerCase())) {
            return acc;
          }

          const baseSchedule = (attendanceSchedule ?? []).reduce<
            Record<string, AttendanceValue | null>
          >((accumulator, schedule) => {
            const attendance = schedule.attendances.find((item) => item.user_id === id);

            return { ...accumulator, [String(schedule.date_from)]: attendance?.value };
          }, {});

          const tableItem = { ...baseUser, ...baseSchedule } as AttendanceTableItem;

          return [...acc, tableItem];
        },
        [],
      ),
    [studentsGroup, attendanceSchedule, filters?.full_name],
  );

  const columns: ProColumns<AttendanceTableItem>[] = useMemo(() => {
    const dynamicCols = (attendanceSchedule ?? []).reduce<ProColumns<AttendanceTableItem>[]>(
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
              currentData={curr}
              recordData={record}
              onSuccess={(data) => setAttendanceSchedule(data)}
              groupId={selectedGroup}
            />
          ),
        },
      ],
      [],
    );

    setLoading(false);

    return [
      {
        title: <FormattedMessage id="nameAndSurname" defaultMessage="Name and surname" />,
        dataIndex: 'full_name',
        fixed: 'left',
      },
      ...dynamicCols,
    ];
  }, [attendanceSchedule]);

  const getGroupName = useCallback(
    (id: number | null): string => {
      if (id === null) return '';
      const foundGroup = teacherSubjectData?.groups?.find((group) => group.id === id);

      return foundGroup?.name ?? '';
    },
    [teacherSubjectData?.groups],
  );

  const resetFilters = useCallback(() => setFilters({ full_name: '' }), []);
  const applyFilters = useCallback(
    ({ full_name = '' }: Partial<Filters>) => setFilters({ full_name }),
    [],
  );

  const groupOptions = useMemo(
    () => (teacherSubjectData?.groups ?? []).map(({ id, name }) => ({ value: id, label: name })),
    [teacherSubjectData?.groups],
  );

  const handleSelectGroup = useCallback((value: number) => {
    resetFilters();
    setLoading(true);
    setSelectedGroup(value);
  }, []);

  useEffect(() => {
    if (selectedGroup === null) return;

    fetchGroupAttendanceSchedule(selectedGroup).then((response) => {
      if (response.success) {
        setAttendanceSchedule(response.data);
      }
    });
    fetchStudentUserGroup(selectedGroup).then((response) => {
      if (response.success) {
        setStudentsGroup(response.data);
      }
    });
  }, [selectedGroup]);

  return (
    <>
      <ProForm.Item label={<FormattedMessage id="group" />}>
        <Select onChange={handleSelectGroup} value={selectedGroup} options={groupOptions} />
      </ProForm.Item>
      <Divider />
      {columns.length === 1 ? (
        <FormattedMessage
          id="noAttendanceSchedule"
          defaultMessage="No attendance schedule for this group..."
        />
      ) : (
        <ProTable<AttendanceTableItem, Filters>
          className="attendances-table"
          headerTitle={`${intl.formatMessage({
            id: 'attendances',
            defaultMessage: 'Attendances',
          })} (${getGroupName(selectedGroup)})`}
          rowKey="id"
          onSubmit={applyFilters}
          onReset={resetFilters}
          search={{ layout: 'vertical' }}
          loading={loading}
          dataSource={dataSource}
          scroll={{ x: 1500 }}
          columns={columns}
        />
      )}
    </>
  );
};
