import React, { useState, useRef } from 'react';
import { Button, Tooltip, Popconfirm } from 'antd';
import { useIntl, FormattedMessage, Link, history } from 'umi';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { roles, deleteRole, createRole } from '@/services/escola-lms/roles';
import RolesModalForm from './components/ModalForm';

export const TableColumns: ProColumns<API.Role>[] = [
  {
    width: '10%',
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
  },
  {
    width: '80%',
    title: <FormattedMessage id="name" defaultMessage="name" />,
    dataIndex: 'name',
    hideInSearch: true,
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
        search={false}
        toolBarRender={() => [
          <Button type="primary" key="primary" onClick={() => setModalVisible(true)}>
            <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
          </Button>,
        ]}
        request={() => {
          return roles().then((response) => {
            if (response.success) {
              return {
                data: response.data,
                // total: response.meta.total,
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
