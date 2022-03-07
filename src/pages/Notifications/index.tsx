import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { getNotifications, getEventTypes } from '@/services/escola-lms/notifications';
import { format } from 'date-fns';
import { DATETIME_FORMAT } from '@/consts/dates';
import UserSelect from '@/components/UserSelect';

export const getEventType = (event: string) => event.split('\\').pop() as String;

export const TableColumns: ProColumns<API.Notification>[] = [
  {
    title: <FormattedMessage id="created_at" defaultMessage="created_at" />,
    dataIndex: 'created_at',
    hideInSearch: true,
    render: (_, record) => format(new Date(record.created_at), DATETIME_FORMAT),
  },
  {
    title: <FormattedMessage id="user_id" defaultMessage="user_id" />,
    dataIndex: 'notifiable_id',
    hideInSearch: false,
    valueType: 'select',
    renderFormItem: (item, { type, defaultRender, ...rest }) => {
      return <UserSelect {...rest} />;
    },
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
          labelWidth: 120,
        }}
        request={({ pageSize, current, event, notifiable_id, dateRange }) => {
          const date_from =
            dateRange && dateRange[0] ? format(new Date(dateRange[0]), DATETIME_FORMAT) : undefined;
          const date_to =
            dateRange && dateRange[1] ? format(new Date(dateRange[1]), DATETIME_FORMAT) : undefined;

          return getNotifications(
            {
              pageSize,
              current,
              event,
              date_from,
              date_to,
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
