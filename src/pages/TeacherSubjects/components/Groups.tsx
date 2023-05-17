import React, { useRef } from 'react';
import { FormattedMessage, Link, useIntl } from 'umi';
import { Button, Space, Tooltip } from 'antd';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { ExportOutlined } from '@ant-design/icons';
import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import { useTeacherSubject } from '../context';

export const StudentsTableColumns: ProColumns<API.StudentUserGroup>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: <FormattedMessage id="groupName" defaultMessage="groupName" />,
    dataIndex: 'name',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: <FormattedMessage id="students" defaultMessage="students" />,
    dataIndex: 'users',
    render: (_, record) => (
      <span>
        {record.users.map(
          (item: API.StudentUser) =>
            !item.academic_teacher_id && (
              <span key={item.id}>
                {`${item.first_name} ${item.last_name}`} <br />
              </span>
            ),
        )}
      </span>
    ),
    hideInForm: true,
    hideInSearch: true,
  },
];

const TableColumns = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="groupName" defaultMessage="groupName" />,
    dataIndex: 'name',
    hideInSearch: true,
  },
];

export const Groups: React.FC = () => {
  const { teacherSubjectData } = useTeacherSubject();
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  return (
    <ProTable
      headerTitle={intl.formatMessage({
        id: 'groups',
        defaultMessage: 'groups',
      })}
      actionRef={actionRef}
      rowKey="id"
      search={false}
      dataSource={teacherSubjectData?.groups ?? []}
      columns={[
        ...TableColumns,
        {
          hideInSearch: true,
          title: <FormattedMessage id="studentsList" />,
          dataIndex: 'studentsList',
          render: (_, record) =>
            record.id && (
              <Space key={'space'}>
                <TypeButtonDrawer key={record.id} type={'Students'} type_id={record.id} />
              </Space>
            ),
        },
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

export default Groups;
