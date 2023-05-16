import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import { Select, Space, Typography } from 'antd';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { groupAttendanceSchedule as fetchGroupAttendanceSchedule } from '@/services/escola-lms/attendances';
import { studentUserGroup as fetchStudentUserGroup } from '@/services/escola-lms/student_user_groups';
import type { AttendanceValue } from '@/services/escola-lms/enums';
import { format } from 'date-fns';
import { DAY_FORMAT } from '@/consts/dates';
import ProCard from '@ant-design/pro-card';
import AttendanceCheckbox from '@/components/AttendanceCheckbox';
import { useTeacherSubject } from '../context';

export type ColumnType = BaseUserProps & Record<string, AttendanceValue | null>;

interface BaseUserProps {
  id: number;
  first_name: string;
  last_name: string;
}

interface CurrentGroupProps {
  id: number | null;
  name?: string;
}

export const Attendances: React.FC = () => {
  const { teacherSubjectData } = useTeacherSubject();
  const actionRef = useRef<ActionType>();
  const intl = useIntl();
  const [loading, setLoading] = useState(false);
  const [attendanceSchedule, setAttendanceSchedule] = useState<API.GroupAttendanceSchedule[]>();
  const [studentsGroup, setStudentsGroup] = useState<API.StudentUserGroup>();
  const [currentGroup, setCurrentGroup] = useState<CurrentGroupProps>({
    id: teacherSubjectData?.groups?.[0].id ?? null,
    name: teacherSubjectData?.groups?.[0].name,
  });

  const studentAttendanceList: ColumnType[] = useMemo(
    () =>
      (studentsGroup?.users ?? []).reduce<ColumnType[]>((acc, curr) => {
        const baseUser: BaseUserProps = {
          id: curr.id,
          first_name: curr.first_name,
          last_name: curr.last_name,
        };

        const baseSchedule = (attendanceSchedule ?? []).reduce<
          Record<string, AttendanceValue | null>
        >((accumulator, schedule) => {
          const y = schedule.attendances.find((item) => item.user_id === curr.id);

          return { ...accumulator, [String(schedule.date_from)]: y?.value };
        }, {});
        return [...acc, { ...baseUser, ...baseSchedule }] as ColumnType[];
      }, []),
    [studentsGroup, attendanceSchedule],
  );

  const columns: ProColumns<ColumnType>[] = useMemo(() => {
    const dynamicCols = (attendanceSchedule ?? []).reduce<ProColumns<ColumnType>[]>(
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
              groupId={currentGroup.id}
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
        hideInSearch: true,
        fixed: 'left',
        render: (_, record) => {
          return `${record.first_name} ${record.last_name}`;
        },
      },
      ...dynamicCols,
    ];
  }, [attendanceSchedule]);

  const getGroupName = (id: number) => {
    const findedGroup = teacherSubjectData?.groups?.find((group) => group.id === id);
    return findedGroup ? findedGroup?.name : '';
  };

  const handleSelectGroup = (value: number) => {
    setLoading(true);
    setCurrentGroup({ id: value, name: getGroupName(value) });
  };

  useEffect(() => {
    if (currentGroup.id) {
      fetchGroupAttendanceSchedule(currentGroup.id).then((response) => {
        if (response.success) {
          setAttendanceSchedule(response.data);
        }
      });
      fetchStudentUserGroup(currentGroup.id).then((response) => {
        if (response.success) {
          setStudentsGroup(response.data);
        }
      });
    }
  }, [currentGroup]);

  return (
    <>
      <ProCard>
        <Space>
          <Typography.Title level={5}>
            <FormattedMessage id="select_user_group" defaultMessage="Select group" />
          </Typography.Title>
          <Select
            style={{ minWidth: '400px' }}
            onChange={handleSelectGroup}
            defaultValue={teacherSubjectData?.groups?.[0].id}
          >
            {teacherSubjectData?.groups?.map((group: API.SubjectGroups) => (
              <Select.Option key={group.id} value={group.id}>
                {group.name}
              </Select.Option>
            ))}
          </Select>
        </Space>
      </ProCard>
      {columns.length === 1 ? (
        <FormattedMessage
          id="noAttendanceSchedule"
          defaultMessage="No attendance schedule for this group..."
        />
      ) : (
        <ProTable
          headerTitle={`${intl.formatMessage({
            id: 'attendances',
            defaultMessage: 'Attendances',
          })} (${currentGroup.name})`}
          actionRef={actionRef}
          rowKey="group_id"
          search={false}
          loading={loading}
          dataSource={studentAttendanceList}
          scroll={{ x: 1500 }}
          columns={[...columns]}
        />
      )}
    </>
  );
};

export default Attendances;
