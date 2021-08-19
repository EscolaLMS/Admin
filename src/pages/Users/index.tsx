import { PlusOutlined } from '@ant-design/icons';
import { Button, Tooltip, Popconfirm, Tag } from 'antd';
import React, { useRef } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

import { users, deleteUser } from '@/services/escola-lms/user';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const handleRemove = async (id: number) => {
  await deleteUser(id);
  return true;
};

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const columns: ProColumns<API.UserListItem>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="first_name" defaultMessage="first_name" />,
      dataIndex: 'first_name',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="last_name" defaultMessage="last_name" />,
      dataIndex: 'last_name',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="email" defaultMessage="email" />,
      dataIndex: 'email',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="search" defaultMessage="search" />,
      dataIndex: 'search',
      hideInSearch: false,
      hideInTable: true,
      tooltip: 'will search through first_name, last_name and email',
    },

    {
      title: <FormattedMessage id="is_active" defaultMessage="is_active" />,
      dataIndex: 'is_active',
      hideInSearch: true,
      render: (_, record) => [
        <Tag color={record.is_active ? 'green' : 'red'}>
          {record.is_active ? 'active' : 'inactive'}
        </Tag>,
      ],
    },

    {
      title: <FormattedMessage id="email_verified" defaultMessage="email_verified" />,
      dataIndex: 'email_verified',
      hideInSearch: true,
      render: (_, record) => [
        <Tag color={record.is_active ? 'green' : 'red'}>
          {record.is_active ? 'verified' : 'unverified'}
        </Tag>,
      ],
    },

    {
      title: <FormattedMessage id="roles" defaultMessage="roles" />,
      dataIndex: 'roles',
      hideInSearch: true,
      render: (_, record) => record.roles.map((role) => <Tag key={role}>{role}</Tag>),
    },

    {
      title: 'role',
      key: 'role',
      valueType: 'select',
      dataIndex: 'role',
      initialValue: ['all'],
      width: 100,
      hideInTable: true,
      valueEnum: {
        all: { text: 'All' },
        admin: { text: 'Admin' },
        tutor: { text: 'Tutor' },
        student: { text: 'Student' },
      },
    },

    {
      hideInSearch: true,
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="操作" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Link to={`/users/${record.id}`} key="edit">
          <Tooltip title={<FormattedMessage id="edit" defaultMessage="edit" />}>
            <Button type="primary" icon={<EditOutlined />}></Button>
          </Tooltip>
        </Link>,
        <Popconfirm
          key="delete"
          title={
            <FormattedMessage
              id="deleteQuestion"
              defaultMessage="Are you sure to delete this record?"
            />
          }
          onConfirm={async () => {
            const success = await handleRemove(record.id);
            if (success) {
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          okText="Yes"
          cancelText="No"
        >
          <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
            <Button type="primary" icon={<DeleteOutlined />} danger></Button>
          </Tooltip>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.UserListItem, API.PageParams & { search: string; role: string }>
        headerTitle={intl.formatMessage({
          id: 'users',
          defaultMessage: 'users',
        })}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setModalVisible(-1);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="新建" />
          </Button>,
        ]}
        request={({ pageSize, current, search, role }) => {
          const requestRole = role && role.toString() === 'all' ? undefined : role;

          return users({ pageSize, current, search, role: requestRole }).then((response) => {
            if (response.success) {
              return {
                data: response.data.data,
                total: response.data.meta.total,
                success: true,
              };
            }
            return [];
          });
        }}
        columns={columns}
      />
    </PageContainer>
  );
};

export default TableList;
