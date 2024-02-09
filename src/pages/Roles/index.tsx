import { createRole, deleteRole, roles } from '@/services/escola-lms/roles';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Popconfirm, Tooltip } from 'antd';
import React, { useRef, useState } from 'react';
import { FormattedMessage, Link, history, useIntl } from 'umi';
import RolesModalForm from './components/ModalForm';

export const TableColumns: ProColumns<API.Role>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
    sorter: true,
    width: '80px',
  },
  {
    width: '80%',
    title: <FormattedMessage id="name" defaultMessage="name" />,
    dataIndex: 'name',
    hideInSearch: false,
    sorter: true,
  },
];

const RolesPage: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [modalVisible, setModalVisible] = useState(false);

  const intl = useIntl();

  return (
    <PageContainer>
      <ProTable<API.Role>
        headerTitle={intl.formatMessage({
          id: 'menu.Users.Roles',
          defaultMessage: 'roles',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        toolBarRender={() => [
          <Button type="primary" key="primary" onClick={() => setModalVisible(true)}>
            <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
          </Button>,
        ]}
        request={({ pageSize, current, name }, sort) => {
          const sortArr = sort && Object.entries(sort)[0];
          return roles({
            pageSize,
            current,
            name,
            order_by: sortArr && sortArr[0],
            order: sortArr ? (sortArr[1] === 'ascend' ? 'ASC' : 'DESC') : undefined,
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
        columns={[
          ...TableColumns,
          {
            hideInSearch: true,
            title: <FormattedMessage id="pages.searchTable.titleOption" />,
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
              <Link to={`/users/roles/${record.name}`} key="new">
                <Button type="primary" icon={<EditOutlined />} />
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
                  const success = await deleteRole(record.name);
                  if (success) {
                    setModalVisible(false);
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
              </Popconfirm>,
            ],
          },
        ]}
      />
      <RolesModalForm
        visible={modalVisible}
        onVisibleChange={(value) => {
          return value === false && setModalVisible(false);
        }}
        onFinish={async (value) => {
          const request = await createRole(value);
          const response = await request;

          if (response.success) {
            setModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
              history.push(`/users/roles/${response.data.name}`);
            }
          }
        }}
      />
    </PageContainer>
  );
};

export default RolesPage;
