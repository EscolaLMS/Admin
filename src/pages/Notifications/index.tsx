import React, { useRef } from 'react';
import { Button } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined } from '@ant-design/icons';
import { getNotifications } from '@/services/escola-lms/notifications';

export const TableColumns: ProColumns<API.Role>[] = [
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

const RolesPage: React.FC = () => {
  const actionRef = useRef<ActionType>();

  const intl = useIntl();

  return (
    <PageContainer>
      <ProTable<API.Role>
        headerTitle={intl.formatMessage({
          id: 'roles',
          defaultMessage: 'roles',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button type="primary" key="primary">
            <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
          </Button>,
        ]}
        request={({ pageSize, current, event }) => {
          return getNotifications(2, { pageSize, current, event }).then((response) => {
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
        columns={[...TableColumns]}
      />
    </PageContainer>
  );
};

export default RolesPage;
