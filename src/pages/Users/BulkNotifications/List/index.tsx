import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import UserSelect from '@/components/UserSelect';
import PERMISSIONS from '@/consts/permissions';
import { usePermissions } from '@/hooks/usePermissions';
import { bulkNotifications } from '@/services/escola-lms/bulk-notifications';
import {
  type BulkNotificationChannelsEnum,
  BulkNotificationSectionsKeysEnum,
} from '@/services/escola-lms/enums';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button } from 'antd';
import React, { useRef } from 'react';
import { FormattedMessage, Link, useIntl } from 'umi';

export const TableColumns: ProColumns<API.BulkNotification>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
    sorter: true,
    width: '80px',
  },
  {
    title: <FormattedMessage id="user_id" defaultMessage="user_id" />,
    dataIndex: 'notifiable_id',
    hideInSearch: true,
    sorter: true,
    valueType: 'select',
    renderFormItem: (item, { type, defaultRender, ...rest }) => {
      return <UserSelect {...rest} />;
    },
    render: (_, record) =>
      record.users &&
      record.users.map((userId) => (
        <TypeButtonDrawer key={`user-${userId}`} type="App\Models\User" type_id={userId} />
      )),
  },
  {
    title: <FormattedMessage id="title" defaultMessage="title" />,
    dataIndex: 'sections',
    hideInSearch: true,
    sorter: false,
    valueType: 'select',
    render: (_, record) =>
      record.sections.find(({ key }) => key === BulkNotificationSectionsKeysEnum.TITLE)?.value ||
      '',
  },
  {
    title: <FormattedMessage id="content" defaultMessage="content" />,
    dataIndex: 'sections',
    hideInSearch: true,
    sorter: false,
    valueType: 'select',
    render: (_, record) =>
      record.sections.find(({ key }) => key === BulkNotificationSectionsKeysEnum.BODY)?.value || '',
  },
];

const TableList: React.FC<{ templateType: string; channel: BulkNotificationChannelsEnum }> = ({
  templateType,
  channel,
}) => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();
  const { checkPermission } = usePermissions();

  return (
    <ProTable<API.BulkNotification>
      headerTitle={intl.formatMessage({
        id: 'Bulknotifications.pushListTitle',
        defaultMessage: 'Push notifications sent',
      })}
      actionRef={actionRef}
      rowKey="id"
      search={false}
      toolBarRender={() =>
        checkPermission(PERMISSIONS.UserBulkNotificationCreate)
          ? [
              <Link key={'new'} to={`/users/notifications/${templateType}/new`}>
                <Button type="primary" key="primary">
                  <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
                </Button>
              </Link>,
            ]
          : []
      }
      request={({ pageSize, current }, sort) => {
        const sortArr = sort && Object.entries(sort)[0];
        return bulkNotifications({
          per_page: pageSize,
          page: current,
          order_by: sortArr && sortArr[0],
          order: sortArr ? (sortArr[1] === 'ascend' ? 'ASC' : 'DESC') : undefined,
          channel,
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
      columns={[...TableColumns]}
    />
  );
};

export default TableList;
