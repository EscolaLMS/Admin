import React from 'react';
import { FormattedMessage, Link } from 'umi';
import { Button, Tooltip } from 'antd';
import ProTable, { type ProColumns } from '@ant-design/pro-table';
import { ExportOutlined } from '@ant-design/icons';

import { allStudentsAndGroups as fetchAllStudentsAndGroups } from '@/services/escola-lms/student_user_groups';
import { useTeacherSubject } from '../context';

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
    title: <FormattedMessage id="select_user_group" defaultMessage="Select group" />,
    dataIndex: 'groups',
    hideInTable: true,
  },
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'user_id',
    hideInSearch: true,
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

const getTableData = (studentUserGroups: API.StudentUserGroup[]): TableDataProps[] =>
  studentUserGroups.reduce<TableDataProps[]>((acc, curr) => {
    const userTable = curr?.users?.map<TableDataProps>((currentUser) => ({
      group_id: curr.id,
      group_name: curr.name,
      user_id: currentUser.id,
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
      email: currentUser.email,
    }));

    return [...acc, ...userTable];
  }, []);

export const Students: React.FC = () => {
  const { teacherSubjectData } = useTeacherSubject();

  return (
    <ProTable<TableDataProps, TableParams>
      rowKey="user_id"
      search={{ layout: 'vertical' }}
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
        ...TableColumns,
        {
          hideInSearch: true,
          title: <FormattedMessage id="msTeams" />,
          dataIndex: 'teamsLink',
          valueType: 'option',
          render: () => [
            <Link to={'#'} key="teamsLink">
              <Tooltip title={<FormattedMessage id="msTeams" defaultMessage="teams" />}>
                <Button type="primary" icon={<ExportOutlined />} />
              </Tooltip>
            </Link>,
          ],
        },
      ]}
    />
  );
};
