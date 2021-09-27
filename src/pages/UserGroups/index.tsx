import { Button, Tooltip, Popconfirm, Tag } from 'antd';
import React, { useRef, useState, useEffect, useCallback } from 'react';
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

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [data, setData] = useState<API.UserGroup[]>([]);
  const intl = useIntl();

  const groupHasChildren = useCallback(
    (id: number) => {
      return !!data.some((userGroup) => userGroup.parent_id === id);
    },
    [data],
  );

  const TableColumns: ProColumns<API.UserGroup>[] = [
    {
      title: <FormattedMessage id="search" defaultMessage="search" />,
      dataIndex: 'search',
      hideInSearch: false,
      hideInTable: true,
      hideInDescriptions: true,
      tooltip: <FormattedMessage id="search_tooltip_user_groups" />,
    },
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
    {
      title: <FormattedMessage id="registerable" defaultMessage="registerable" />,
      dataIndex: 'registerable',
      hideInForm: true,
      hideInSearch: true,
      render: (_, record) => (
        <Tag color={record.registerable ? 'success' : 'error'}>
          <FormattedMessage
            id={record.registerable ? 'true' : 'false'}
            defaultMessage={record.registerable ? 'true' : 'false'}
          />
        </Tag>
      ),
    },
    {
      hideInSearch: false,
      title: <FormattedMessage id="parent_id_group" defaultMessage="parent_id_group" />,
      tooltip: <FormattedMessage id="parent_id_group_tooltip" />,
      dataIndex: 'parent_id',
      render: (_, record) => {
        const parentCat = data.find((cat) => cat.id === record.parent_id);
        if (parentCat) {
          return (
            <Link to={`/user_groups/${parentCat.id}`} key="edit">
              <Button size="small">{parentCat.name}</Button>
            </Link>
          );
        }
        return (
          <React.Fragment>
            <FormattedMessage id="none" />
          </React.Fragment>
        );
      },
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.UserGroup, API.UserGroupsParams>
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
        request={({ pageSize, current, search, parent_id }) => {
          return userGroups({ pageSize, current, search, parent_id }).then((response) => {
            if (response.success) {
              setData(response.data);
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
                  <Button type="primary" icon={<EditOutlined />} />
                </Tooltip>
              </Link>,
              groupHasChildren(record.id) ? (
                <Tooltip
                  key="delete"
                  title={
                    <FormattedMessage
                      id="cantDelete"
                      defaultMessage="You can't delete this category because it's parent to others"
                    />
                  }
                >
                  <Button disabled={true} type="primary" icon={<DeleteOutlined />} danger />
                </Tooltip>
              ) : (
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
                    <Button type="primary" icon={<DeleteOutlined />} danger />
                  </Tooltip>
                </Popconfirm>
              ),
            ],
          },
        ]}
      />
    </PageContainer>
  );
};

export default TableList;
