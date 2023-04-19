import React, { useRef, useState } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { format } from 'date-fns/esm';
import { DATETIME_FORMAT } from '@/consts/dates';
import { track } from '@/services/escola-lms/tracker';
import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import UserSelect from '@/components/UserSelect';

export const TableColumns: ProColumns<EscolaLms.Tracker.Models.TrackRoute>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
    sorter: true,
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
  {
    title: <FormattedMessage id="http_method" defaultMessage="http_method" />,
    dataIndex: 'method',
    hideInSearch: false,
    sorter: true,
    valueEnum: {
      GET: 'GET',
      POST: 'POST',
      PUT: 'PUT',
      DELETE: 'DELETE',
      PATCH: 'PATCH',
    },
  },
  {
    title: <FormattedMessage id="path" defaultMessage="path" />,
    dataIndex: 'path',
    sorter: true,
    hideInSearch: false,
  },
];

const LogsWidget: React.FC<{ useAsWidget?: boolean; userID?: number }> = ({
  useAsWidget,
  userID,
}) => {
  const actionRef = useRef<ActionType>();
  const [loading, setLoading] = useState(false);
  const intl = useIntl();
  return (
    <ProTable<
      EscolaLms.Tracker.Models.TrackRoute,
      API.PageParams & {
        user_id?: number;
        method: 'string';
        dateRange: [string, string];
        path: string;
      }
    >
      headerTitle={intl.formatMessage({
        id: 'menu.Analytics.Logs',
        defaultMessage: 'menu.Analytics.Logs',
      })}
      loading={loading}
      actionRef={actionRef}
      rowKey="id"
      search={{
        layout: 'vertical',
      }}
      request={({ user_id, method, dateRange, path, pageSize, current }, sort) => {
        const sortArr = sort && Object.entries(sort)[0];
        setLoading(true);
        const date_from =
          dateRange && dateRange[0] ? format(new Date(dateRange[0]), DATETIME_FORMAT) : undefined;
        const date_to =
          dateRange && dateRange[1] ? format(new Date(dateRange[1]), DATETIME_FORMAT) : undefined;

        return track({
          user_id: useAsWidget ? userID : user_id,
          method,
          pageSize,
          current,
          path,
          date_from,
          date_to,
          order_by: sortArr && sortArr[0],
          order: sortArr ? (sortArr[1] === 'ascend' ? 'ASC' : 'DESC') : undefined,
        }).then((response) => {
          setLoading(false);
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
          title: <FormattedMessage id="user" defaultMessage="user" />,
          dataIndex: 'user_id',
          key: 'user_id',
          hideInSearch: useAsWidget,
          sorter: true,
          renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
            if (type === 'form') {
              return null;
            }
            const stateType = form.getFieldValue('state');
            return (
              <UserSelect
                {...rest}
                state={{
                  type: stateType,
                }}
              />
            );
          },
          render: (_, record) =>
            record.user && <TypeButtonDrawer type={'App\\Models\\User'} type_id={record.user.id} />,
        },
      ]}
    />
  );
};

export default LogsWidget;
