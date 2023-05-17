import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FormattedMessage, Link } from 'umi';
import { Button, Select, Space, Tooltip, Typography } from 'antd';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { ExportOutlined } from '@ant-design/icons';
import { useTeacherSubject } from '../context';
import { allStudentsAndGroups as fetchAllStudentsAndGroups } from '@/services/escola-lms/student_user_groups';
import ProCard from '@ant-design/pro-card';

interface TableDataProps {
  group_id: number;
  group_name: string;
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export const TableColumns: ProColumns<TableDataProps>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'user_id',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="first_name" defaultMessage="First name" />,
    dataIndex: 'first_name',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="last_name" defaultMessage="Last name" />,
    dataIndex: 'last_name',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="email" defaultMessage="email" />,
    dataIndex: 'email',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="groupName" defaultMessage="Group name" />,
    dataIndex: 'group_name',
    hideInSearch: true,
  },
];

export const Students: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { teacherSubjectData } = useTeacherSubject();
  const [studentsAndGroups, setStudentsAndGroup] = useState<API.StudentUserGroup[]>([]);
  const actionRef = useRef<ActionType>();

  const tableData: TableDataProps[] = useMemo(
    () =>
      studentsAndGroups.reduce<TableDataProps[]>((acc, curr) => {
        const userTable: TableDataProps[] = [];
        curr?.users?.reduce((accumulator, currentUser) => {
          const user = {
            group_id: curr.id,
            group_name: curr.name,
            user_id: currentUser.id,
            first_name: currentUser.first_name,
            last_name: currentUser.last_name,
            email: currentUser.email,
          };
          userTable.push(user);
          return { ...accumulator, ...user };
        }, {});

        setLoading(false);
        return [...acc, ...userTable];
      }, []),
    [studentsAndGroups],
  );

  const fetchStudentsData = (value?: number[]) => {
    fetchAllStudentsAndGroups({ parent_id: teacherSubjectData?.group_id, 'id[]': value }).then(
      (response) => {
        if (response.success) {
          setStudentsAndGroup(response.data);
        }
      },
    );
  };

  const handleSelectGroup = (value: number[]) => {
    setLoading(true);
    fetchStudentsData(value);
  };

  useEffect(() => {
    fetchStudentsData();
  }, []);

  return (
    <>
      <ProCard>
        <Space>
          <Typography.Title level={5}>
            <FormattedMessage id="select_user_group" defaultMessage="Select group" />
          </Typography.Title>
          <Select
            allowClear
            mode="multiple"
            style={{ minWidth: '400px' }}
            onChange={handleSelectGroup}
            onClear={fetchStudentsData}
          >
            {teacherSubjectData?.groups?.map((group: API.SubjectGroups) => (
              <Select.Option key={group.id} value={group.id}>
                {group.name}
              </Select.Option>
            ))}
          </Select>
        </Space>
      </ProCard>

      <ProTable
        actionRef={actionRef}
        rowKey="user_id"
        search={false}
        loading={loading}
        dataSource={tableData ?? []}
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
    </>
  );
};

export default Students;
