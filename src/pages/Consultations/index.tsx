import CategoryTree from '@/components/CategoryTree';
import { DATETIME_FORMAT, DAY_FORMAT } from '@/consts/dates';
import { consultations, deleteConsultation } from '@/services/escola-lms/consultations';
import { createTableOrderObject, roundTo } from '@/utils/utils';
import {
  DeleteOutlined,
  DollarOutlined,
  EditOutlined,
  FireOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Popconfirm, Select, Tag, Tooltip, Typography, message } from 'antd';
import { format } from 'date-fns';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FormattedMessage, Link, useIntl } from 'umi';
import ProCard from "@ant-design/pro-card";
import useModelFields from "@/hooks/useModelFields";
import { getLocale, history } from 'umi';
import { FieldType } from "@/services/escola-lms/enums";
import {useParams} from "@@/exports";

export const TableColumns: ProColumns<API.Consultation>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
    sorter: true,
    width: '80px',
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
    title: <FormattedMessage id="name" defaultMessage="name" />,
    dataIndex: 'name',
    sorter: true,
  },
  {
    title: <FormattedMessage id="status" defaultMessage="status" />,
    dataIndex: 'status',
    hideInSearch: true,
    sorter: true,
    renderFormItem: ({ type }) => {
      if (type === 'form') {
        return null;
      }
      return (
        <Select mode="multiple">
          <Select.Option value="draft">
            <Tag>
              <FormattedMessage id="draft" defaultMessage="draft" />
            </Tag>
          </Select.Option>
          <Select.Option value="archived">
            <Tag color="error">
              <FormattedMessage id="archived" defaultMessage="archived" />
            </Tag>
          </Select.Option>
          <Select.Option value="published">
            <Tag color="success">
              <FormattedMessage id="published" defaultMessage="published" />
            </Tag>
          </Select.Option>
        </Select>
      );
    },

    valueEnum: {
      draft: {
        text: (
          <Tag>
            <FormattedMessage id="draft" defaultMessage="draft" />
          </Tag>
        ),
        status: 'draft',
      },
      archived: {
        text: (
          <Tag color="error">
            <FormattedMessage id="archived" defaultMessage="archived" />
          </Tag>
        ),
        status: 'archived',
      },
      published: {
        text: (
          <Tag color="success">
            <FormattedMessage id="published" defaultMessage="published" />
          </Tag>
        ),
        status: 'published',
      },
    },
  },
  {
    title: <FormattedMessage id="product" defaultMessage="base_price" />,
    dataIndex: 'product',
    valueType: 'textarea',
    search: false,
    render: (_, record) => {
      if (record.product && record.product.price) {
        return (
          <Link to={`/other/consultations/${record.id}/product`}>
            <Button type="primary" icon={<DollarOutlined />}>
              <span>{roundTo(record.product.price, 2, 100)}</span>
            </Button>
          </Link>
        );
      }
      return (
        <Typography>
          <FireOutlined /> <FormattedMessage id="no_pricing" defaultMessage="no pricing" />
        </Typography>
      );
    },
  },
  {
    title: <FormattedMessage id="duration" defaultMessage="duration" />,
    dataIndex: 'duration',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: <FormattedMessage id="active_from" defaultMessage="active_from" />,
    dataIndex: 'active_from',
    hideInSearch: true,
    sorter: true,
    render: (_, record) => format(new Date(record.active_from), DAY_FORMAT),
  },
  {
    title: <FormattedMessage id="active_to" defaultMessage="active_to" />,
    dataIndex: 'active_to',
    hideInSearch: true,
    sorter: true,
    render: (_, record) => format(new Date(record.active_to), DAY_FORMAT),
  },
  {
    title: <FormattedMessage id="categories" defaultMessage="Categories" />,
    dataIndex: 'category_id',
    key: 'category_id',
    sorter: false,
    renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
      if (type === 'form') {
        return null;
      }
      const stateType = form.getFieldValue('state');
      return (
        <CategoryTree
          {...rest}
          state={{
            type: stateType,
          }}
        />
      );
    },
    render: (_, record) => (
      <React.Fragment>
        {record.categories?.map((category) =>
          typeof category === 'object' ? (
            <Tag key={category.name}>{category.name}</Tag>
          ) : (
            <Tag key={category}>{category}</Tag>
          ),
        )}
      </React.Fragment>
    ),
  },
];

const Consultations: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [loading, setLoading] = useState(false);
  const intl = useIntl();
  const additionalFields = useModelFields('EscolaLms\\Consultations\\Models\\Consultation');

  const dynamicAdditionalFieldsColumns: ProColumns<API.Consultation>[] = useMemo(() => {
    if (additionalFields.state !== 'loaded') return [];

    return (additionalFields?.list ?? []).reduce<ProColumns<API.Consultation>[]>((acc, field) => {
      const locale = getLocale();
      const fieldTranslatedTitle = field?.extra?.find((i: Record<string, string>) => i?.[locale])?.[
        locale
        ];

      // TODO #1043 add other types support
      switch (field.type) {
        case FieldType.Boolean:
          return [
            ...acc,
            {
              title: fieldTranslatedTitle ?? <FormattedMessage id={field.name} />,
              dataIndex: field.name,
              hideInSearch: true,
              width: 100,
              render: (_n, record) => (
                <Tag color={record?.[field.name as keyof typeof record] ? 'green' : 'red'}>
                  {record?.[field.name as keyof typeof record] ? (
                    <FormattedMessage id="true" />
                  ) : (
                    <FormattedMessage id="false" />
                  )}
                </Tag>
              ),
            },
          ];
        case FieldType.Varchar:
          return [
            ...acc,
            {
              title: fieldTranslatedTitle ?? <FormattedMessage id={field.name} />,
              dataIndex: field.name,
              hideInSearch: true,
            },
          ];
        default:
          return acc;
      }
    }, []);
  }, [additionalFields]);

  const handleRemove = useCallback(
    async (id: number) => {
      setLoading(true);
      const hide = message.loading(<FormattedMessage id="loading" defaultMessage="loading" />);
      try {
        await deleteConsultation(id).then((response) => {
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

  const {consultation} = useParams<{ consultation?: string; }>();
  return (
    <PageContainer>
      <ProCard
        tabs={{
          type: 'card',
          activeKey: consultation,
          onChange: (key) => {
            switch (key) {
              // case 'list':
              //   return history.push(`/other/consultations`);
              // case 'fields':
              //   return history.push(`/other/consultations/fields`);
              default:
                return history.push(`/other/consultations/${key}`);
            }
          },
        }}
      >
        <ProCard.TabPane key="list" tab={<FormattedMessage id="list" />}>
        <ProTable<API.Consultation, API.ConsultationsParams>
          headerTitle={intl.formatMessage({
            id: 'Consultations',
            defaultMessage: 'Consultations',
          })}
          loading={loading}
          actionRef={actionRef}
          rowKey="id"
          search={{
            layout: 'vertical',
          }}
          toolBarRender={() => [
            <Link key="addnew" to="/other/consultations/new">
              <Button type="primary" key="primary">
                <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
              </Button>
            </Link>,
          ]}
          request={({ name, status, dateRange, category_id, pageSize, current }, sort) => {
            setLoading(true);
            const date_from =
              dateRange && dateRange[0] ? format(new Date(dateRange[0]), DATETIME_FORMAT) : undefined;
            const date_to =
              dateRange && dateRange[1] ? format(new Date(dateRange[1]), DATETIME_FORMAT) : undefined;

            return consultations({
              name: name || undefined,
              'categories[]': category_id,
              per_page: pageSize,
              page: current,
              date_from,
              date_to,
              status,
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
              return [];
            });
          }}
          columns={[
            ...TableColumns,
            ...dynamicAdditionalFieldsColumns,
            {
              title: <FormattedMessage id="options" defaultMessage="options" />,
              dataIndex: 'option',
              valueType: 'option',
              width: '10%',
              render: (_, record) => [
                <Link key="edit" to={`/other/consultations/${record.id}`}>
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
        </ProCard.TabPane>
        <ProCard.TabPane key={'fields'} tab={<FormattedMessage id="ModelFields" />} />
      </ProCard>
    </PageContainer>
  );
};

export default Consultations;
