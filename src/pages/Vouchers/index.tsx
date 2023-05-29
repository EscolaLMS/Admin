import React, { useCallback, useRef, useState } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { format } from 'date-fns';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Tooltip, Popconfirm, message } from 'antd';

import { deleteVoucher } from '@/services/escola-lms/vouchers';

import { vouchers } from '@/services/escola-lms/vouchers';
import { DATETIME_FORMAT, DAY_FORMAT } from '@/consts/dates';
import { createTableOrderObject, roundTo } from '@/utils/utils';

export const TableColumns: ProColumns<EscolaLms.Vouchers.Models.Coupon>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: <FormattedMessage id="name" defaultMessage="name" />,
    dataIndex: 'name',
    hideInSearch: false,
    sorter: true,
  },
  {
    title: <FormattedMessage id="vouchers.code" defaultMessage="vouchers.code" />,
    dataIndex: 'code',
    hideInSearch: false,
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
    title: <FormattedMessage id="amount" defaultMessage="amount" />,
    dataIndex: 'amount',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: <FormattedMessage id="limit_per_user" defaultMessage="limit_per_user" />,
    dataIndex: 'limit_per_user',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: <FormattedMessage id="vouchers.limit_usage" defaultMessage="vouchers.limit_usage" />,
    dataIndex: 'limit_usage',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: (
      <FormattedMessage id="vouchers.max_cart_price" defaultMessage="vouchers.max_cart_price" />
    ),
    dataIndex: 'max_cart_price',
    hideInSearch: true,
    sorter: true,
    render: (_, record) => (record.max_cart_price ? roundTo(record.max_cart_price, 2, 100) : ''),
  },
  {
    title: (
      <FormattedMessage id="vouchers.min_cart_price" defaultMessage="vouchers.min_cart_price" />
    ),
    dataIndex: 'min_cart_price',
    hideInSearch: true,
    sorter: true,
    render: (_, record) => (record.min_cart_price ? roundTo(record.min_cart_price, 2, 100) : ''),
  },
  {
    title: <FormattedMessage id="active_from" defaultMessage="active_from" />,
    dataIndex: 'active_from',
    hideInSearch: true,
    sorter: true,
    render: (_, record) => record.active_from && format(new Date(record.active_from), DAY_FORMAT),
  },
  {
    title: <FormattedMessage id="active_to" defaultMessage="active_to" />,
    dataIndex: 'active_to',
    hideInSearch: true,
    sorter: true,
    render: (_, record) => record.active_to && format(new Date(record.active_to), DAY_FORMAT),
  },
];

const Vouchers: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [loading, setLoading] = useState<boolean>(false);
  const intl = useIntl();

  const handleRemove = useCallback(
    async (id: number) => {
      setLoading(true);
      const hide = message.loading(<FormattedMessage id="loading" defaultMessage="loading" />);
      try {
        await deleteVoucher(id).then((response) => {
          setLoading(false);
          if (response.success) {
            message.success(response.message);
          }
        });
        hide();
        setLoading(false);
        actionRef.current?.reload();
        return true;
      } catch (error) {
        hide();
        message.error(<FormattedMessage id="error" defaultMessage="error" />);
        setLoading(false);
        return false;
      }
    },
    [actionRef],
  );

  return (
    <PageContainer>
      <ProTable<EscolaLms.Vouchers.Models.Coupon, API.Vouchers>
        headerTitle={intl.formatMessage({
          id: 'menu.Sales.Vouchers',
          defaultMessage: 'Vouchers',
        })}
        loading={loading}
        actionRef={actionRef}
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        toolBarRender={() => [
          <Link key="addnew" to="/sales/vouchers/new">
            <Button type="primary" key="primary">
              <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
            </Button>
          </Link>,
        ]}
        request={({ pageSize, current, name, code, dateRange }, sort) => {
          setLoading(true);
          const active_from =
            dateRange && dateRange[0] ? format(new Date(dateRange[0]), DATETIME_FORMAT) : undefined;
          const active_to =
            dateRange && dateRange[1] ? format(new Date(dateRange[1]), DATETIME_FORMAT) : undefined;

          return vouchers({
            per_page: pageSize,
            page: current,
            name: name || undefined,
            code: code || undefined,
            active_from,
            active_to,
            ...createTableOrderObject(sort, 'created_at'),
          }).then((response) => {
            setLoading(false);
            if (response.success) {
              return {
                data: response.data,
                total: response.meta.total,
                success: true,
              };
            }
            return {
              success: false,
            };
          });
        }}
        columns={[
          ...TableColumns,
          {
            title: <FormattedMessage id="options" defaultMessage="options" />,
            dataIndex: 'option',
            valueType: 'option',
            width: '10%',
            render: (_, record) => [
              <Link key="edit" to={`/sales/vouchers/${record.id}`}>
                <Tooltip title={<FormattedMessage id="edit" defaultMessage="edit" />}>
                  <Button type="primary" icon={<EditOutlined />} />
                </Tooltip>
              </Link>,
              <Popconfirm
                key="delete"
                title={
                  <FormattedMessage
                    id="deleteQuestion"
                    defaultMessage="Are you sure to delete this record?"
                  />
                }
                onConfirm={() => record.id && handleRemove(record.id)}
                okText={<FormattedMessage id="yes" defaultMessage="Yes" />}
                cancelText={<FormattedMessage id="no" defaultMessage="No" />}
              >
                <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
                  <Button type="primary" icon={<DeleteOutlined />} danger />
                </Tooltip>
              </Popconfirm>,
            ],
          },
        ]}
      />
    </PageContainer>
  );
};

export default Vouchers;
