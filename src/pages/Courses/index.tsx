import { PlusOutlined } from '@ant-design/icons';
import { Button, Tag, Tooltip, Popconfirm, message } from 'antd';
import React, { useState, useRef, useCallback } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

import { course, removeCourse } from '@/services/escola-lms/course';
import CategoryTree from '@/components/CategoryTree';
import Tags from '@/components/Tags';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

export const TableColumns: ProColumns<API.CourseListItem>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    sorter: true,
    search: false,
  },
  {
    title: <FormattedMessage id="title" defaultMessage="title" />,
    dataIndex: 'title',
    sorter: true,
  },
  {
    title: <FormattedMessage id="Active" defaultMessage="active" />,
    dataIndex: 'active',
    sorter: false,

    valueEnum: {
      true: { text: <FormattedMessage id="Active" defaultMessage="active" /> },
      false: {
        text: <FormattedMessage id="Inactive" defaultMessage="Inactive" />,
      },
    },
    render: (_, record) => <Tag>{record.active ? 'Active' : 'Inactive'}</Tag>,
  },
  {
    title: <FormattedMessage id="base_price" defaultMessage="base_price" />,
    dataIndex: 'base_price',
    sorter: true,
    valueType: 'textarea',
    search: false,
  },
  {
    title: <FormattedMessage id="duration" defaultMessage="Duration" />,
    dataIndex: 'duration',
    sorter: true,
    valueType: 'textarea',
    search: false,
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

const TableList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();

  const intl = useIntl();

  const handleRemove = useCallback(
    async (id: number) => {
      setLoading(true);
      const hide = message.loading(<FormattedMessage id="loading" defaultMessage="loading" />);
      try {
        await removeCourse(id).then((response) => {
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
      <ProTable<API.CourseListItem, API.CourseParams>
        loading={loading}
        headerTitle={intl.formatMessage({
          id: 'menu.Courses',
          defaultMessage: 'Courses List',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Link to="/courses/new">
            <Button type="primary" key="primary">
              <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
            </Button>
          </Link>,
        ]}
        request={({ pageSize, current, title, active, category_id, tag }, sort) => {
          const sortArr = sort && Object.entries(sort)[0];
          setLoading(true);
          return course({
            title,
            pageSize,
            current,
            category_id,
            tag,
            active: active && active,
            order_by: sortArr && sortArr[0], // i like nested ternary
            /* eslint-disable */ order: sortArr
              ? sortArr[1] === 'ascend'
                ? 'ASC'
                : 'DESC'
              : undefined,
          }).then((response) => {
            setLoading(false);
            if (response.success) {
              return {
                data: response.data,
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
            render: (_, record) => [
              <Link to={`/courses/${record.id}`}>
                <Tooltip title={<FormattedMessage id="edit" defaultMessage="edit" />}>
                  <Button type="primary" icon={<EditOutlined />}></Button>
                </Tooltip>
              </Link>,
              <Popconfirm
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
                  <Button type="primary" icon={<DeleteOutlined />} danger></Button>
                </Tooltip>
              </Popconfirm>,
            ],
          },
        ]}
      />
    </PageContainer>
  );
};

export default TableList;
