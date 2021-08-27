import { Drawer } from 'antd';
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

import { payments } from '@/services/escola-lms/payments';
import { format } from 'date-fns';
import UserRow from '@/components/UserRow';
import OrderRow from '@/components/OrderRow';

import { TableColumns as UserTableColumns } from '@/pages/Users/index';
import { TableListColumns as OrderTableListColumns } from '@/pages/Orders/index';

import ProDescriptions from '@ant-design/pro-descriptions';
import type { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';

const Billable: React.FC<{ payment: API.Payment; onData: (data: API.UserItem) => void }> = ({
  payment,
  onData,
}) => {
  switch (payment.billable_type) {
    case 'EscolaLms\\Core\\Models\\User':
      return <UserRow id={payment.billable_id} onLoaded={(user) => onData(user)} />;
    default:
      return (
        <pre>
          {payment.billable_type} id: {payment.billable_id}
        </pre>
      );
  }
};

const Payable: React.FC<{ payment: API.Payment; onData: (data: API.Order) => void }> = ({
  payment,
  onData,
}) => {
  switch (payment.payable_type) {
    case 'EscolaLms\\Cart\\Models\\Order':
      return <OrderRow id={payment.payable_id} onLoaded={(order) => onData(order)} />;
    default:
      return (
        <pre>
          {payment.billable_type} id: {payment.billable_id}
        </pre>
      );
  }
};

type CurrentRowType =
  | {
      mode: 'empty';
    }
  | {
      mode: 'user';
      value: API.UserItem;
    }
  | {
      mode: 'order';
      value: API.Order;
    };

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();
  const [currentRow, setCurrentRow] = useState<CurrentRowType>({ mode: 'empty' });

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
      render: (_, record) => format(new Date(record.created_at), 'yyyy-MM-dd HH:mm'),
    },
    {
      title: <FormattedMessage id="updated_at" defaultMessage="updated_at" />,
      dataIndex: 'updated_at',
      hideInSearch: true,
      sorter: true,
      render: (_, record) => format(new Date(record.updated_at), 'yyyy-MM-dd HH:mm'),
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
      valueEnum: { new: 'new', paid: 'paid', cancelled: 'cancelled', failed: 'failed' },
    },

    {
      title: <FormattedMessage id="billable" defaultMessage="Billable to" />,
      dataIndex: 'billable',
      hideInSearch: false,
      sorter: true,
      render: (_, record) => (
        <Billable
          payment={record}
          onData={(user) => setCurrentRow({ mode: 'user', value: user })}
        />
      ),
    },
    {
      title: <FormattedMessage id="payable" defaultMessage="Payable to" />,
      dataIndex: 'payable',
      hideInSearch: false,
      sorter: true,
      render: (_, record) => (
        <Payable
          payment={record}
          onData={(order) => setCurrentRow({ mode: 'order', value: order })}
        />
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
        search={{
          labelWidth: 120,
        }}
        request={(
          { pageSize, current, dateRange, status /* , user_id, author_id, course_id */ },
          sort,
        ) => {
          const date_from =
            dateRange && dateRange[0]
              ? format(new Date(dateRange[0]), 'yyyy-MM-dd HH:mm:ss')
              : undefined;
          const date_to =
            dateRange && dateRange[1]
              ? format(new Date(dateRange[1]), 'yyyy-MM-dd HH:mm:ss')
              : undefined;
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

      <Drawer
        width={600}
        visible={currentRow.mode !== 'empty'}
        onClose={() => {
          setCurrentRow({ mode: 'empty' });
        }}
        closable={false}
      >
        {currentRow.mode === 'user' && (
          <ProDescriptions<API.UserItem>
            column={2}
            title={currentRow?.mode}
            request={async () => ({
              data: currentRow.value || {},
            })}
            params={{
              id: currentRow?.value.id,
            }}
            columns={UserTableColumns as ProDescriptionsItemProps<API.UserItem>[]}
          />
        )}

        {currentRow.mode === 'order' && (
          <ProDescriptions<API.Order>
            column={2}
            title={currentRow?.mode}
            request={async () => ({
              data: currentRow.value || {},
            })}
            params={{
              id: currentRow?.value.id,
            }}
            columns={OrderTableListColumns as ProDescriptionsItemProps<API.Order>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
