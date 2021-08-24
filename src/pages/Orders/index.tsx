import React, { useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

import { orders } from '@/services/escola-lms/orders';
import UserLink from '@/components/UserLink';
import CourseLink from '@/components/CourseLink';
import UserSelect from '@/components/UserSelect';
import CourseSelect from '@/components/CourseSelect';

const OrderItems: React.FC<{ items: API.OrderItem[] }> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {item.buyable_type === 'EscolaLms\\Cart\\Models\\Course' && (
            <CourseLink id={item.buyable_id} />
          )}
        </div>
      ))}
    </div>
  );
};

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const columns: ProColumns<API.OrderListItem>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="created_at" defaultMessage="created_at" />,
      dataIndex: 'created_at',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="subtotal" defaultMessage="subtotal" />,
      dataIndex: 'subtotal',
      hideInSearch: true,
      render: (_, record) => Number(record.subtotal) / 100,
    },
    {
      title: <FormattedMessage id="tax" defaultMessage="tax" />,
      dataIndex: 'tax',
      hideInSearch: true,
      render: (_, record) => Number(record.tax) / 100,
    },
    {
      title: <FormattedMessage id="total" defaultMessage="total" />,
      dataIndex: 'total',
      hideInSearch: true,
      render: (_, record) => Number(record.total) / 100,
    },
    {
      title: <FormattedMessage id="items" defaultMessage="items" />,
      dataIndex: 'items',
      hideInSearch: true,
      render: (_, record) => <OrderItems items={record.items} />,
    },
    {
      title: <FormattedMessage id="user" defaultMessage="user" />,
      dataIndex: 'user_id',
      key: 'user_id',
      hideInSearch: false,
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
      render: (_, record) => [<UserLink id={record.user_id} />],
    },

    {
      title: <FormattedMessage id="author" defaultMessage="author" />,
      dataIndex: 'author_id',
      key: 'author_id',
      hideInSearch: false,
      hideInTable: true,
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
      render: (_, record) => [<UserLink id={record.user_id} />],
    },

    {
      title: <FormattedMessage id="course" defaultMessage="course" />,
      dataIndex: 'course_id',
      key: 'course_id',
      hideInSearch: false,
      hideInTable: true,
      renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
        if (type === 'form') {
          return null;
        }
        const stateType = form.getFieldValue('state');
        return (
          <CourseSelect
            {...rest}
            state={{
              type: stateType,
            }}
          />
        );
      },
      render: (_, record) => [<UserLink id={record.user_id} />],
    },
    {
      title: <FormattedMessage id="status" defaultMessage="status" />,
      dataIndex: 'status',
      hideInSearch: true,
    },
  ];

  return (
    <PageContainer>
      <ProTable<
        API.OrderListItem,
        API.PageParams & { user_id: number; author_id: number; course_id: number }
      >
        headerTitle={intl.formatMessage({
          id: 'orders',
          defaultMessage: 'orders',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        request={({ pageSize, current, user_id, author_id, course_id }) => {
          return orders({ pageSize, current, user_id, author_id, course_id }).then((response) => {
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
