import React, { useCallback, useRef, useState } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Tooltip, Popconfirm, message, Space, Typography, Tag } from 'antd';

import type { PossibleType } from '@/components/TypeButtonDrawer';
import TypeButtonDrawer from '@/components/TypeButtonDrawer';

import { products, deleteProduct } from '@/services/escola-lms/products';
import ProductSelect from '@/components/ProductablesSelect';

const ProductableItems: React.FC<{ items: API.ProductProductable[] }> = ({ items }) => {
  return (
    <Space>
      {items.map((item) => (
        <TypeButtonDrawer
          key={`${item.productable_type}:${item.productable_id}`}
          type={item.productable_type as PossibleType}
          type_id={item.productable_id}
        />
      ))}
    </Space>
  );
};

export const TableColumns: ProColumns<EscolaLms.Cart.Models.Product>[] = [
  {
    title: <FormattedMessage id="id" defaultMessage="id" />,
    dataIndex: 'id',
    hideInSearch: true,
  },

  {
    title: <FormattedMessage id="name" defaultMessage="name" />,
    dataIndex: 'name',
    sorter: true,
  },

  {
    title: <FormattedMessage id="price" defaultMessage="price" />,
    dataIndex: 'price',
    hideInSearch: true,
  },

  {
    title: <FormattedMessage id="productable" defaultMessage="productable" />,
    dataIndex: 'productable',
    key: 'productable',
    sorter: false,
    hideInSearch: false,
    hideInTable: true,
    hideInDescriptions: true,
    renderFormItem: (item, { type }) => {
      if (type === 'form') {
        return null;
      }
      return <ProductSelect />;
    },
  },
  {
    title: <FormattedMessage id="price_old" defaultMessage="price_old" />,
    dataIndex: 'price_old',
    hideInSearch: true,
  },

  {
    title: <FormattedMessage id="tax_rate" defaultMessage="tax_rate" />,
    dataIndex: 'tax_rate',
    hideInSearch: true,
  },

  {
    title: <FormattedMessage id="type" defaultMessage="type" />,
    dataIndex: 'type',
    hideInSearch: false,
    valueType: 'select',
    initialValue: 'all',
    valueEnum: {
      all: <FormattedMessage id="all" defaultMessage="all" />,
      single: <FormattedMessage id="single" defaultMessage="single" />,
      bundle: <FormattedMessage id="bundle" defaultMessage="bundle" />,
    },
    render: (_, record) => (
      <Tag>
        <FormattedMessage id={record.type} defaultMessage={record.type} />
      </Tag>
    ),
  },

  {
    title: <FormattedMessage id="purchasable" defaultMessage="purchasable" />,
    dataIndex: 'purchasable',
    hideInSearch: false,
    valueType: 'select',
    initialValue: 'all',
    valueEnum: {
      all: <FormattedMessage id="all" defaultMessage="all" />,
      true: <FormattedMessage id="true" defaultMessage="true" />,
      false: <FormattedMessage id="false" defaultMessage="false" />,
    },
    render: (_, record) => (
      <Tag color={record.purchasable ? 'success' : 'error'}>
        <FormattedMessage
          id={record.purchasable ? 'true' : 'false'}
          defaultMessage={record.purchasable ? 'true' : 'false'}
        />
      </Tag>
    ),
  },

  {
    title: <FormattedMessage id="free_capi" defaultMessage="free_capi" />,
    dataIndex: 'free',
    hideInSearch: false,
    hideInTable: true,
    hideInDescriptions: true,
    valueType: 'select',
    initialValue: 'all',
    valueEnum: {
      all: <FormattedMessage id="all" defaultMessage="all" />,
      true: <FormattedMessage id="true" defaultMessage="true" />,
      false: <FormattedMessage id="false" defaultMessage="false" />,
    },
  },
  {
    title: <FormattedMessage id="items" defaultMessage="items" />,
    dataIndex: 'items',
    hideInSearch: true,
    render: (_, record) => {
      return record.productables ? (
        <ProductableItems items={record.productables as API.ProductProductable[]} />
      ) : (
        <Typography>...</Typography>
      );
    },
  },
];

const Products: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const handleRemove = useCallback(
    async (id: number) => {
      setLoading(true);
      const hide = message.loading(<FormattedMessage id="loading" defaultMessage="loading" />);
      try {
        await deleteProduct(id).then((response) => {
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
        EscolaLms.Cart.Models.Product,
        API.PageParams &
          API.PaginationParams &
          EscolaLms.Cart.Http.Requests.ProductSearchRequest & {
            productable: string;
            type: 'bundle' | 'single' | 'all';
            purchasable: string;
            free: string;
          }
      >
        headerTitle={intl.formatMessage({
          id: 'Products',
          defaultMessage: 'Products',
        })}
        loading={loading}
        actionRef={actionRef}
        rowKey="id"
        toolBarRender={() => [
          <Link key="addnew" to="/sales/products/new">
            <Button type="primary" key="primary">
              <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
            </Button>
          </Link>,
        ]}
        request={({ name, pageSize, current, productable, type, purchasable, free }, sort) => {
          const sortArr = sort && Object.entries(sort)[0];
          setLoading(true);

          return products({
            pageSize,
            current,
            name,
            order_by: sortArr && sortArr[0], // i like nested ternary
            /* eslint-disable */ order: sortArr
              ? sortArr[1] === 'ascend'
                ? 'ASC'
                : 'DESC'
              : undefined,
            productable_id: productable ? Number((productable as string).split(':')[1]) : undefined,
            productable_type: productable ? (productable as string).split(':')[0] : undefined,
            type: type && type !== 'all' ? type : undefined,
            purchasable:
              purchasable && purchasable !== 'all' ? (purchasable === 'true' ? 1 : 0) : undefined,
            free: free && free !== 'all' ? free : undefined,
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
            title: <FormattedMessage id="options" defaultMessage="options" />,
            dataIndex: 'option',
            valueType: 'option',
            width: '10%',
            render: (_, record) => [
              <Link key="edit" to={`/sales/products/${record.id}`}>
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

export default Products;
