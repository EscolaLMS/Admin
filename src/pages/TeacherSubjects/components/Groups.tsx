import React, { useEffect, useRef, useState } from 'react';
import { FormattedMessage, Link, useIntl } from 'umi';
import { Button, Spin, Tooltip } from 'antd';
import ProTable, { ActionType } from '@ant-design/pro-table';
import { ExportOutlined } from '@ant-design/icons';
import { studentUserGroup as fetchStudentUserGroup } from '@/services/escola-lms/student_user_groups';

interface GroupsProps {
  subjectGroups?: API.SubjectGroups[];
}

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

const UsersGroupComponent: React.FC<{ idRecord: number }> = ({ idRecord }) => {
  const [user, setUser] = useState<API.StudentUser[]>([]);
  useEffect(() => {
    fetchStudentUserGroup(idRecord).then((response) => {
      if (response.success) {
        setUser(response.data.users);
      }
    });
  }, []);
  if (!user.length) {
    return <Spin />;
  }
  return (
    <>
      {user.map((item) => (
        <p key={item.id}>
          {`${item.first_name} ${item.last_name}`}
          <br />
        </p>
      ))}
    </>
  );
};

export const Groups: React.FC<GroupsProps> = ({ subjectGroups }) => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  return (
    <ProTable<any>
      headerTitle={intl.formatMessage({
        id: 'groups',
        defaultMessage: 'groups',
      })}
      actionRef={actionRef}
      rowKey="id"
      search={false}
      dataSource={subjectGroups}
      columns={[
        ...TableColumns,
        {
          hideInSearch: true,
          title: <FormattedMessage id="studentsList" />,
          dataIndex: 'studentsList',
          render: (_, record) => <UsersGroupComponent idRecord={record.id} />,
        },
        {
          hideInSearch: true,
          title: <FormattedMessage id="msTeams" />,
          dataIndex: 'teamsLink',
          valueType: 'option',
          render: (_, record) => [
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
