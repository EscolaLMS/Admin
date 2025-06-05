import { Button, Dropdown, Menu, message, Popconfirm, Tag, Tooltip } from 'antd';
import { format } from 'date-fns';
import React, { useMemo, useState } from 'react';
import { getLocale, history, Link, useIntl } from 'umi';

import { FormattedMessage } from '@umijs/max';

import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  ExportOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { type ProColumns } from '@ant-design/pro-table';

import AuthenticatedLinkButton from '@/components/AuthenticatedLinkButton';
import SecureUpload from '@/components/SecureUpload';
import { DATETIME_FORMAT } from '@/consts/dates';
import useModelFields from '@/hooks/useModelFields';
import { FieldType } from '@/services/escola-lms/enums';
import { deleteUser, users } from '@/services/escola-lms/user';
import { createTableOrderObject, objectToQueryString, redirectPrefix } from '@/utils/utils';
import './index.css';

const handleRemove = async (id: number) => {
  await deleteUser(id);
  return true;
};

export const TableColumns: ProColumns<API.UserItem>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
    sorter: true,
    width: '80px',
  },
  {
    title: <FormattedMessage id="created_at" defaultMessage="created_at" />,
    dataIndex: 'created_at',
    hideInSearch: true,
    sorter: true,
    render: (_, record) =>
      record.created_at && format(new Date(record.created_at), DATETIME_FORMAT),
  },
  {
    title: <FormattedMessage id="first_name" defaultMessage="first_name" />,
    dataIndex: 'first_name',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: <FormattedMessage id="last_name" defaultMessage="last_name" />,
    dataIndex: 'last_name',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: <FormattedMessage id="email" defaultMessage="email" />,
    dataIndex: 'email',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: <FormattedMessage id="search" defaultMessage="search" />,
    dataIndex: 'search',
    hideInSearch: false,
    hideInTable: true,
    hideInDescriptions: true,
    tooltip: <FormattedMessage id="search_tooltip_1" />,
  },

  {
    title: <FormattedMessage id="is_active" />,
    dataIndex: 'is_active',
    hideInSearch: true,
    sorter: true,
    render: (_, record) => [
      <Tag key="is_active" color={record.is_active ? 'green' : 'red'}>
        {record.is_active ? <FormattedMessage id="Active" /> : <FormattedMessage id="Inactive" />}
      </Tag>,
    ],
  },

  {
    title: <FormattedMessage id="email_verified" defaultMessage="email_verified" />,
    dataIndex: 'email_verified',
    hideInSearch: true,
    render: (_, record) => [
      <Tag key="email_verified" color={record.email_verified ? 'green' : 'red'}>
        {record.email_verified ? (
          <FormattedMessage id="verified" />
        ) : (
          <FormattedMessage id="unverified" />
        )}
      </Tag>,
    ],
  },

  {
    title: <FormattedMessage id="created_after" defaultMessage="Created After" />,
    key: 'from',
    dataIndex: 'from',
    valueType: 'date',
    hideInTable: true,
    hideInDescriptions: true,
  },

  {
    title: <FormattedMessage id="created_before" defaultMessage="Created Before" />,
    key: 'to',
    dataIndex: 'to',
    valueType: 'date',
    hideInTable: true,
    hideInDescriptions: true,
  },
  {
    title: <FormattedMessage id="role" defaultMessage="role" />,
    dataIndex: 'role',
    hideInTable: true,
    valueEnum: {
      student: {
        text: (
          <Tag>
            <FormattedMessage id="student" defaultMessage="student" />
          </Tag>
        ),
        status: 'student',
      },
      admin: {
        text: (
          <Tag>
            <FormattedMessage id="admin" defaultMessage="admin" />
          </Tag>
        ),
        status: 'admin',
      },
      tutor: {
        text: (
          <Tag>
            <FormattedMessage id="tutor" defaultMessage="tutor" />
          </Tag>
        ),
        status: 'tutor',
      },
    },
  },
  {
    title: <FormattedMessage id="gt_last_login_day" defaultMessage=">= Login last n days" />,
    key: 'gt_last_login_day',
    dataIndex: 'gt_last_login_day',
    valueType: 'digit',
    hideInTable: true,
    hideInDescriptions: true,
  },

  {
    title: <FormattedMessage id="lt_last_login_day" defaultMessage="<= Login last n days" />,
    key: 'lt_last_login_day',
    dataIndex: 'lt_last_login_day',
    valueType: 'digit',
    hideInTable: true,
    hideInDescriptions: true,
  },

  {
    title: <FormattedMessage id="roles" defaultMessage="roles" />,
    dataIndex: 'roles',
    hideInSearch: true,
    render: (_, record) => record.roles.map((role) => <Tag key={role}>{role}</Tag>),
  },
];

const TableList: React.FC = () => {
  const intl = useIntl();
  const [params, setParams] = useState({});
  const additionalFields = useModelFields('EscolaLms\\Auth\\Models\\User');

  const dynamicAdditionalFieldsColumns: ProColumns<API.UserItem>[] = useMemo(() => {
    if (additionalFields.state !== 'loaded') return [];

    return (additionalFields?.list ?? []).reduce<ProColumns<API.UserItem>[]>((acc, field) => {
      const locale = getLocale();
      const fieldTranslatedTitle = field?.extra?.find((i: Record<string, string>) => i?.[locale])?.[
        locale
      ];

      // TODO #1043 add other types support
      switch (field.type) {
        case FieldType.Boolean:
          return [
            ...acc,
            {
              title: fieldTranslatedTitle ?? <FormattedMessage id={field.name} />,
              dataIndex: field.name,
              hideInSearch: true,
              width: 100,
              render: (_n, record) => (
                <Tag color={record?.[field.name as keyof typeof record] ? 'green' : 'red'}>
                  {record?.[field.name as keyof typeof record] ? (
                    <FormattedMessage id="true" />
                  ) : (
                    <FormattedMessage id="false" />
                  )}
                </Tag>
              ),
            },
          ];
        case FieldType.Varchar:
          return [
            ...acc,
            {
              title: fieldTranslatedTitle ?? <FormattedMessage id={field.name} />,
              dataIndex: field.name,
              hideInSearch: true,
            },
          ];
        default:
          return acc;
      }
    }, []);
  }, [additionalFields]);

  const columns: ProColumns<API.UserItem>[] = useMemo(
    () => [
      ...TableColumns,
      ...dynamicAdditionalFieldsColumns,
      {
        hideInSearch: true,
        title: <FormattedMessage id="pages.searchTable.titleOption" />,
        dataIndex: 'option',
        valueType: 'option',
        fixed: 'right',
        width: 80,
        render: (_n, record, _i, action) => [
          <Link to={`/users/${record.id}/user_info`} key="edit">
            <Tooltip title={<FormattedMessage id="edit" defaultMessage="edit" />}>
              <Button type="primary" icon={<EditOutlined />} />
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
                action?.reload();
              }
            }}
            okText={<FormattedMessage id="yes" />}
            cancelText={<FormattedMessage id="no" />}
          >
            <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
              <Button type="primary" icon={<DeleteOutlined />} danger />
            </Tooltip>
          </Popconfirm>,
        ],
      },
    ],
    [dynamicAdditionalFieldsColumns],
  );

  return (
    <PageContainer>
      <ProCard
        tabs={{
          type: 'card',
          activeKey: 'list',
          onChange: (key) => {
            switch (key) {
              case 'list':
                return history.push(`/users`);
              case 'fields':
                return history.push(`/users/fields`);
              default:
                return history.push(`/users/${key}`);
            }
          },
        }}
      >
        <ProCard.TabPane key="list" tab={<FormattedMessage id="list" />}>
          <ProTable<
            API.UserListItem,
            API.PageParams &
              API.PaginationParams &
              EscolaLms.Auth.Http.Requests.Admin.UsersListRequest & {
                search: string;
                role: string;
                gt_last_login_day?: number;
                lt_last_login_day?: number;
              }
          >
            headerTitle={intl.formatMessage({
              id: 'menu.Users',
              defaultMessage: 'users',
            })}
            rowKey="key"
            search={{
              layout: 'vertical',
            }}
            toolBarRender={() => [
              <SecureUpload
                key="upload"
                title={intl.formatMessage({
                  id: 'import_users',
                })}
                url="/api/admin/csv/users"
                name="file"
                accept=".csv, .xlsx"
                data={{
                  return_url: `${window.location.origin}${redirectPrefix()}/user/reset-password`,
                }}
                onChange={(info) => {
                  if (info.file.status === 'done') {
                    if (info.file.response && info.file.response.success) {
                      message.success(info.file.response.message);
                    }
                  }
                  if (info.file.response && info.file.status === 'error') {
                    message.error(info.file.response.message);
                    console.error(info.file.response);
                  }
                }}
              />,

              <Dropdown
                key="dropdown-export-menu"
                overlay={
                  <Menu>
                    {['csv', 'xlsx', 'xls'].map((formatName) => (
                      <Menu.Item key={formatName} style={{ cursor: 'default' }}>
                        <AuthenticatedLinkButton
                          url={`/api/admin/csv/users?format=${formatName}&${objectToQueryString(
                            params,
                          )}`}
                          filename={`users.${formatName}`}
                          key="download"
                          size="small"
                          icon={<DownloadOutlined />}
                          type="primary"
                          style={{
                            width: '100%',
                          }}
                        >
                          {formatName}
                        </AuthenticatedLinkButton>
                      </Menu.Item>
                    ))}
                  </Menu>
                }
              >
                <Button type="primary" key="primary">
                  <ExportOutlined /> <FormattedMessage id="export" defaultMessage="export" />
                </Button>
              </Dropdown>,

              <Link to="/users/list/new" key="link">
                <Button type="primary" key="primary">
                  <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
                </Button>
              </Link>,
            ]}
            request={(
              { pageSize, current, search, role, from, to, gt_last_login_day, lt_last_login_day },
              sort,
            ) => {
              setParams({
                pageSize,
                current,
                search,
                role,
                from,
                to,
                gt_last_login_day,
                lt_last_login_day,
              });
              // const requestRole = role && role.toString() === 'all' ? undefined : role;
              return users({
                per_page: pageSize,
                page: current,
                search: search || undefined,
                role: role || undefined,
                from,
                to,
                gt_last_login_day,
                lt_last_login_day,
                ...createTableOrderObject(sort, 'created_at'),
              }).then((response) => {
                if (response.success) {
                  return {
                    data: response.data,
                    total: response.meta.total,
                    success: true,
                  };
                }
                return [];
              });
            }}
            columns={columns}
            scroll={{ x: true }}
          />
        </ProCard.TabPane>
        <ProCard.TabPane key={'fields'} tab={<FormattedMessage id="ModelFields" />} />
      </ProCard>
    </PageContainer>
  );
};

export default TableList;
