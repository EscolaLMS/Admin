import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { getNotifications, getEventTypes } from '@/services/escola-lms/notifications';
import { format } from 'date-fns';
import { DATETIME_FORMAT } from '@/consts/dates';
import { profile } from '@/services/escola-lms/user';
import { Spin } from 'antd';

const getEventType = (event: string) => event.split('\\').pop() as String;

export const TableColumns: ProColumns<API.Notification>[] = [
  {
    title: <FormattedMessage id="created_at" defaultMessage="created_at" />,
    dataIndex: 'created_at',
    hideInSearch: true,
    render: (_, record) => format(new Date(record.created_at), DATETIME_FORMAT),
  },
];

const NotificationsPage: React.FC = () => {
  const [eventTypes, setEventTypes] = useState(['']);
  const [user, setUser] = useState<API.UserItem>();

  const actionRef = useRef<ActionType>();

  const intl = useIntl();

  const fetchEventTypes = useCallback(async () => {
    const request = await getEventTypes();
    const response = await request;

    if (response.success) {
      setEventTypes(response.data);
    }
  }, []);

  const fetchUser = useCallback(async () => {
    const isAdminRequest = await profile();

    if (isAdminRequest.success) {
      setUser(isAdminRequest.data);
    }
  }, []);

  const isAdmin = useMemo(() => {
    return user?.roles.includes('admin');
  }, [user]);

  const fetchTableData = useCallback(
    ({ pageSize, current, event, notifiable_id }) => {
      const _userID = isAdmin ? notifiable_id : user && user.id;

      return getNotifications(
        {
          pageSize,
          current,
          event,
        },
        _userID,
      ).then((response) => {
        if (response.success) {
          return {
            data: response.data,
            total: response.meta.total,
            success: true,
          };
        }
        return [];
      });
    },
    [user],
  );

  useEffect(() => {
    fetchUser();
    fetchEventTypes();
  }, []);

  const eventsTypeList = useMemo(
    () => eventTypes.reduce((a, value) => ({ ...a, [value]: getEventType(value) }), {}),
    [eventTypes],
  );

  if (!user) {
    return <Spin />;
  }

  return (
    <PageContainer>
      <ProTable<API.Notification>
        headerTitle={intl.formatMessage({
          id: 'notifications',
          defaultMessage: 'notifications',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        request={({ pageSize, current, event, notifiable_id }) => {
          return fetchTableData({ pageSize, current, event, notifiable_id });
        }}
        columns={[
          ...TableColumns,
          {
            title: <FormattedMessage id="user_id" defaultMessage="user_id" />,
            dataIndex: 'notifiable_id',
            hideInSearch: isAdmin ? false : true,
            hideInTable: isAdmin ? false : true,
          },
          {
            title: <FormattedMessage id="event" defaultMessage="event" />,
            dataIndex: 'event',
            hideInSearch: false,
            render: (_, record) => getEventType(record.event),
            valueType: 'select',
            valueEnum: eventsTypeList,
          },
        ]}
      />
    </PageContainer>
  );
};

export default NotificationsPage;
