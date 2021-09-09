import { Button, Tooltip, Popconfirm } from 'antd';
import React, { useRef } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { userGroups, deleteUserGroup } from '@/services/escola-lms/user_groups';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

const handleRemove = async (id: number) => {
  await deleteUserGroup(id);
  return true;
};

export const TableColumns: ProColumns<API.UserGroup>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="name" defaultMessage="name" />,
    dataIndex: 'name',
    hideInSearch: true,
  },
];

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  return (
    <PageContainer>
      <ProTable<API.UserGroup, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'user_groups',
          defaultMessage: 'User Groups',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Link to="/user_groups/new" key="new">
            <Button type="primary" key="primary">
              <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
            </Button>
          </Link>,
        ]}
        request={({ pageSize, current }) => {
          return userGroups({ pageSize, current }).then((response) => {
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
        columns={[
          ...TableColumns,
          {
            hideInSearch: true,
            title: <FormattedMessage id="pages.searchTable.titleOption" />,
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
              <Link to={`/user_groups/${record.id}`} key="edit">
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
                okText={<FormattedMessage id="yes" />}
                cancelText={<FormattedMessage id="no" />}
              >
                <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
                  <Button type="primary" icon={<DeleteOutlined />} danger></Button>
                </Tooltip>
              </Popconfirm>,
            ],
          },
        ]}
      />
    </PageContainer>
  );
};

export default TableList;
