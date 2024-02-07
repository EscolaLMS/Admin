import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import UserSelect from '@/components/UserSelect';
import { DATETIME_FORMAT } from '@/consts/dates';
import { getEventTypes, getNotifications } from '@/services/escola-lms/notifications';
import { createTableOrderObject } from '@/utils/utils';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { format } from 'date-fns';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

export const getEventType = (event: string) => event.split('\\').pop() as string;

export const TableColumns: ProColumns<API.Notification>[] = [
  {
    title: <FormattedMessage id="created_at" defaultMessage="created_at" />,
    dataIndex: 'created_at',
    hideInSearch: true,
    sorter: true,
    render: (_, record) => format(new Date(record.created_at), DATETIME_FORMAT),
  },
  {
    title: <FormattedMessage id="user_id" defaultMessage="user_id" />,
    dataIndex: 'notifiable_id',
    hideInSearch: false,
    sorter: true,
    valueType: 'select',
    renderFormItem: (item, { type, defaultRender, ...rest }) => {
      return <UserSelect {...rest} />;
    },
    render: (_, record) =>
      record.notifiable_id && (
        <TypeButtonDrawer key={'user'} type="App\Models\User" type_id={record.notifiable_id} />
      ),
  },
  {
    title: <FormattedMessage id="dateRange" defaultMessage="Date Range" />,
    dataIndex: 'dateRange',
    hideInSearch: false,
    hideInForm: true,
    hideInTable: true,
    valueType: 'dateRange',
    fieldProps: {
      allowEmpty: [true, true],
    },
  },
];

const NotificationsPage: React.FC = () => {
  const [eventTypes, setEventTypes] = useState(['']);
  const actionRef = useRef<ActionType>();

  const intl = useIntl();

  const fetchEventTypes = useCallback(async () => {
    const request = await getEventTypes();
    const response = await request;

    if (response.success) {
      setEventTypes(response.data);
    }
  }, []);

  useEffect(() => {
    fetchEventTypes();
  }, []);

  const eventsTypeList = useMemo(
    () =>
      eventTypes.reduce(
        (a, value) => ({
          ...a,
          [value]: <FormattedMessage id={`notifications.${getEventType(value)}`} />,
        }),
        {},
      ),
    [eventTypes],
  );

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
          layout: 'vertical',
        }}
        request={({ pageSize, current, event, notifiable_id, dateRange }, sort) => {
          const date_from =
            dateRange && dateRange[0] ? format(new Date(dateRange[0]), DATETIME_FORMAT) : undefined;
          const date_to =
            dateRange && dateRange[1] ? format(new Date(dateRange[1]), DATETIME_FORMAT) : undefined;

          return getNotifications(
            {
              per_page: pageSize,
              page: current,
              event: event || undefined,
              date_from,
              date_to,
              ...createTableOrderObject(sort, 'created_at'),
            },
            notifiable_id,
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
        }}
        columns={[
          ...TableColumns,
          {
            title: <FormattedMessage id="event" defaultMessage="event" />,
            dataIndex: 'event',
            hideInSearch: false,
            sorter: true,
            render: (_, record) => (
              <FormattedMessage id={`notifications.${getEventType(record.event)}`} />
            ),
            valueType: 'select',
            valueEnum: eventsTypeList,
          },
        ]}
      />
    </PageContainer>
  );
};

export default NotificationsPage;
