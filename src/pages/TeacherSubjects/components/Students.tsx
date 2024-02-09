import ProTable, { type ProColumns } from '@ant-design/pro-table';
import type { DefaultOptionType } from 'antd/lib/select';
import React, { useMemo } from 'react';
import { FormattedMessage } from 'umi';

import { allStudentsAndGroups as fetchAllStudentsAndGroups } from '@/services/escola-lms/student_user_groups';
import { useTeacherSubject } from '../context';
import { CreateTeamsChatButton } from './CreateTeamsChatButton';
import { TEACHER_SUBJECTS_PAGE_SIZE } from './consts';

interface TableDataProps {
  group_id: number;
  group_name: string;
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
}

interface TableParams {
  groups: number[];
  first_name: string;
  last_name: string;
  email: string;
}

export const TableColumns: ProColumns<TableDataProps>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'user_id',
    hideInSearch: true,
    width: '80px',
  },
  {
    title: <FormattedMessage id="first_name" defaultMessage="First name" />,
    dataIndex: 'first_name',
  },
  {
    title: <FormattedMessage id="last_name" defaultMessage="Last name" />,
    dataIndex: 'last_name',
  },
  {
    title: <FormattedMessage id="email" defaultMessage="email" />,
    dataIndex: 'email',
  },
  {
    title: <FormattedMessage id="groupName" defaultMessage="Group name" />,
    dataIndex: 'group_name',
    hideInSearch: true,
  },
];

const getGroupsOptions = (subjectGroups: API.SubjectGroups[]): DefaultOptionType[] =>
  subjectGroups.map(({ id, name }) => ({
    label: name,
    value: id,
  }));

const getTableData = (studentUserGroups: API.StudentUserGroup[]): TableDataProps[] =>
  studentUserGroups.reduce<TableDataProps[]>((acc, curr) => {
    const userTable = curr?.users?.reduce<TableDataProps[]>(
      (innerAcc, currentUser) =>
        currentUser.academic_teacher_id !== null
          ? innerAcc
          : [
              ...innerAcc,
              {
                group_id: curr.id,
                group_name: curr.name,
                user_id: currentUser.id,
                first_name: currentUser.first_name,
                last_name: currentUser.last_name,
                email: currentUser.email,
              },
            ],
      [],
    );

    return [...acc, ...userTable];
  }, []);

export const Students: React.FC = () => {
  const { teacherSubjectData } = useTeacherSubject();

  const groupOptions = useMemo(
    () => getGroupsOptions(teacherSubjectData?.groups ?? []),
    [teacherSubjectData?.groups],
  );

  return (
    <ProTable<TableDataProps, TableParams>
      className="table-standalone"
      rowKey={(record) => `${record.group_id}-${record.user_id}`}
      search={{ layout: 'vertical' }}
      pagination={{ defaultPageSize: TEACHER_SUBJECTS_PAGE_SIZE }}
      request={async ({ groups, first_name = '', last_name = '', email = '' }) => {
        const response = await fetchAllStudentsAndGroups({
          parent_id: teacherSubjectData?.group_id,
          'id[]': groups,
        });

        if (!response.success) {
          return { data: [], total: 0, success: false };
        }

        const tableData = getTableData(response.data).filter(
          (record) =>
            record.first_name.toLowerCase().includes(first_name.toLowerCase()) &&
            record.last_name.toLowerCase().includes(last_name.toLowerCase()) &&
            record.email.toLowerCase().includes(email.toLowerCase()),
        );

        return { data: tableData, total: tableData.length, success: true };
      }}
      columns={[
        {
          title: <FormattedMessage id="groups" defaultMessage="Groups" />,
          dataIndex: 'groups',
          hideInTable: true,
          filterMultiple: true,
          valueType: 'select',
          fieldProps: {
            options: groupOptions,
            mode: 'multiple',
          },
        },
        ...TableColumns,
        {
          hideInSearch: true,
          title: <FormattedMessage id="msTeams" />,
          dataIndex: 'teamsLink',
          valueType: 'option',
          render: (_n, record) => [
            <CreateTeamsChatButton key="teamsChat" student_id={record.user_id} />,
          ],
        },
      ]}
    />
  );
};
