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
import { DAY_FORMAT } from '@/consts/dates';

export const TableColumns: ProColumns<EscolaLms.Vouchers.Models.Coupon>[] = [
  {
    title: <FormattedMessage id="id" defaultMessage="id" />,
    dataIndex: 'id',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="name" defaultMessage="name" />,
    dataIndex: 'name',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="vouchers.code" defaultMessage="vouchers.code" />,
    dataIndex: 'code',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="amount" defaultMessage="amount" />,
    dataIndex: 'amount',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="limit_per_user" defaultMessage="limit_per_user" />,
    dataIndex: 'limit_per_user',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="vouchers.limit_usage" defaultMessage="vouchers.limit_usage" />,
    dataIndex: 'limit_usage',
    hideInSearch: true,
  },
  {
    title: (
      <FormattedMessage id="vouchers.max_cart_price" defaultMessage="vouchers.max_cart_price" />
    ),
    dataIndex: 'max_cart_price',
    hideInSearch: true,
  },
  {
    title: (
      <FormattedMessage id="vouchers.min_cart_price" defaultMessage="vouchers.min_cart_price" />
    ),
    dataIndex: 'min_cart_price',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="active_from" defaultMessage="active_from" />,
    dataIndex: 'active_from',
    hideInSearch: true,
    render: (_, record) => record.active_from && format(new Date(record.active_from), DAY_FORMAT),
  },
  {
    title: <FormattedMessage id="active_to" defaultMessage="active_to" />,
    dataIndex: 'active_to',
    hideInSearch: true,
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
      <ProTable<
        EscolaLms.Vouchers.Models.Coupon,
        EscolaLms.Vouchers.Http.Requests.ListCouponsRequest
      >
        headerTitle={intl.formatMessage({
          id: 'Vouchers',
          defaultMessage: 'Vouchers',
        })}
        loading={loading}
        actionRef={actionRef}
        rowKey="id"
        search={false}
        toolBarRender={() => [
          <Link key="addnew" to="/sales/vouchers/new">
            <Button type="primary" key="primary">
              <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
            </Button>
          </Link>,
        ]}
        request={({ pageSize, current }) => {
          setLoading(true);

          return vouchers({ pageSize, current }).then((response) => {
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
