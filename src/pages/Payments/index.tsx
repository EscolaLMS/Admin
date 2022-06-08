import React, { useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

import { payments } from '@/services/escola-lms/payments';
import { format } from 'date-fns';

import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import { DATETIME_FORMAT } from '@/consts/dates';

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const columns: ProColumns<API.PaymentListItem>[] = [
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
      title: <FormattedMessage id="created_at" defaultMessage="created_at" />,
      dataIndex: 'created_at',
      hideInSearch: true,
      sorter: true,
      render: (_, record) => format(new Date(record.created_at), DATETIME_FORMAT),
    },
    {
      title: <FormattedMessage id="updated_at" defaultMessage="updated_at" />,
      dataIndex: 'updated_at',
      hideInSearch: true,
      sorter: true,
      render: (_, record) => format(new Date(record.updated_at), DATETIME_FORMAT),
    },
    {
      title: <FormattedMessage id="amount" defaultMessage="amount" />,
      dataIndex: 'amount',
      hideInSearch: true,
      render: (_, record) => (record.amount / 100).toFixed(2),
      sorter: true,
    },
    {
      title: <FormattedMessage id="currency" defaultMessage="currency" />,
      dataIndex: 'currency',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="status" defaultMessage="status" />,
      dataIndex: 'status',
      hideInSearch: false,
      sorter: true,
      valueType: 'select',
      valueEnum: {
        new: <FormattedMessage id="new_payment" />,
        paid: <FormattedMessage id="paid" />,
        cancelled: <FormattedMessage id="cancelled" />,
        failed: <FormattedMessage id="failed" />,
      },
    },

    {
      title: <FormattedMessage id="billable" defaultMessage="Billable to" />,
      dataIndex: 'billable',
      hideInSearch: false,
      sorter: true,
      render: (_, record) => (
        <TypeButtonDrawer type={record.billable_type} type_id={record.billable_id} />
      ),
    },
    {
      title: <FormattedMessage id="payable" defaultMessage="Payable to" />,
      dataIndex: 'payable',
      hideInSearch: false,
      sorter: true,
      render: (_, record) => (
        <TypeButtonDrawer type={record.payable_type} type_id={record.payable_id} />
      ),
    },
  ];

  return (
    <PageContainer>
      <ProTable<
        API.PaymentListItem,
        API.PageParams & { dateRange: [string, string]; status: API.PaymentStatus }
      >
        headerTitle={intl.formatMessage({
          id: 'payments',
          defaultMessage: 'payments',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={
          {
            // labelWidth: 120,
          }
        }
        request={(
          { pageSize, current, dateRange, status /* , user_id, author_id, course_id */ },
          sort,
        ) => {
          const date_from =
            dateRange && dateRange[0] ? format(new Date(dateRange[0]), DATETIME_FORMAT) : undefined;
          const date_to =
            dateRange && dateRange[1] ? format(new Date(dateRange[1]), DATETIME_FORMAT) : undefined;
          const sortArr = sort && Object.entries(sort)[0];
          return payments({
            pageSize,
            current,
            date_from,
            date_to,
            status,
            order_by: sortArr && sortArr[0], // i like nested ternary
            /* eslint-disable */ order: sortArr
              ? sortArr[1] === 'ascend'
                ? 'ASC'
                : 'DESC'
              : undefined,
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
        columns={columns}
      />
    </PageContainer>
  );
};

export default TableList;
