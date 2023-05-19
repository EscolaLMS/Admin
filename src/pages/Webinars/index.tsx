import React, { useCallback, useRef, useState } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';

import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  DollarOutlined,
  FireOutlined,
} from '@ant-design/icons';
import { Button, Tooltip, Popconfirm, Tag, Select, message, Typography } from 'antd';
import { format } from 'date-fns/esm';
import { deleteWebinar, webinars, generateYoutubeToken } from '@/services/escola-lms/webinars';
import { roundTo } from '@/utils/utils';

import { DATETIME_FORMAT, DAY_FORMAT } from '@/consts/dates';
import Tags from '@/components/Tags';

import TokenForm from './components/TokenForm';

export const TableColumns: ProColumns<API.Webinar>[] = [
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
    sorter: false,
    valueType: 'textarea',
    search: false,
    render: (_, record) => {
      if (record.product && record.product.price) {
        return (
          <Link to={`/courses/list/${record.id}/product`}>
            <Button type="primary" icon={<DollarOutlined />}>
              <span>{roundTo(record.product.price / 100)}</span>
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
    title: <FormattedMessage id="tags" defaultMessage="Tags" />,
    dataIndex: 'tag',
    key: 'tag',
    sorter: false,
    renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
      if (type === 'form') {
        return null;
      }
      const stateType = form.getFieldValue('state');
      return (
        <Tags
          {...rest}
          state={{
            type: stateType,
          }}
        />
      );
    },
    render: (_, record) => (
      <React.Fragment>
        {record.tags?.map((tag) =>
          typeof tag === 'object' ? (
            <Tag key={tag.title}>{tag.title}</Tag>
          ) : (
            <Tag key={tag}>{tag}</Tag>
          ),
        )}
      </React.Fragment>
    ),
  },
];

const Webinars: React.FC = () => {
  const [generateToken, setGenarateToken] = useState(false);
  const actionRef = useRef<ActionType>();
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const handleRemove = useCallback(
    async (id: number) => {
      setLoading(true);
      const hide = message.loading(<FormattedMessage id="loading" defaultMessage="loading" />);
      try {
        await deleteWebinar(id).then((response) => {
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
      <ProTable<API.Webinar, API.ConsultationsParams>
        headerTitle={intl.formatMessage({
          id: 'menu.Courses.Webinars',
          defaultMessage: 'Webinars',
        })}
        loading={loading}
        actionRef={actionRef}
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        toolBarRender={() => [
          <Link key="addnew" to="/courses/webinars/new">
            <Button type="primary" key="primary">
              <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
            </Button>
          </Link>,
        ]}
        request={({ name, status, dateRange, pageSize, current }, sort) => {
          setLoading(true);
          const sortArr = sort && Object.entries(sort)[0];
          const date_from =
            dateRange && dateRange[0] ? format(new Date(dateRange[0]), DATETIME_FORMAT) : undefined;
          const date_to =
            dateRange && dateRange[1] ? format(new Date(dateRange[1]), DATETIME_FORMAT) : undefined;

          return webinars({
            name,
            pageSize,
            current,
            date_from,
            date_to,
            status,
            order_by: sortArr && sortArr[0],
            order: sortArr ? (sortArr[1] === 'ascend' ? 'ASC' : 'DESC') : undefined,
          })
            .then((response) => {
              if (response.success) {
                return {
                  data: response.data,
                  total: response.meta.total,
                  success: true,
                };
              }
              return [];
            })
            .catch(async (error) => {
              const err = await error.response.json();
              console.log(err);
              if (err.data.code === 400 && err.data.message.includes('Youtube')) {
                message.error(err.data.message);
                setGenarateToken(true);
              }
              return [];
            })
            .finally(() => {
              setLoading(false);
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
              <Link key="edit" to={`/courses/webinars/${record.id}`}>
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
      <TokenForm
        visible={generateToken}
        onVisibleChange={(value) => {
          return value === false && setGenarateToken(false);
        }}
        onFinish={async (value) => {
          try {
            const request = await generateYoutubeToken({ email: value.email });
            if (request.url) {
              window.open(request.url, '_blank');
              setGenarateToken(false);
            }
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </PageContainer>
  );
};

export default Webinars;
