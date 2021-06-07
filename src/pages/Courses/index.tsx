import { PlusOutlined } from '@ant-design/icons';
import { Button, Drawer, Tag, Tooltip, Popconfirm, message } from 'antd';
import React, { useState, useRef, useCallback } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import ProDescriptions from '@ant-design/pro-descriptions';
import { course, removeCourse } from '@/services/escola-lms/course';
import CategoryTree from '@/components/CategoryTree';
import Tags from '@/components/Tags';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const TableList: React.FC = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.CourseListItem>();

  const intl = useIntl();

  const handleRemove = useCallback(
    async (id: number) => {
      setLoading(true);
      const hide = message.loading(<FormattedMessage id="loading" defaultMessage="loading" />);
      try {
        await removeCourse(id);
        hide();
        message.success(<FormattedMessage id="success" defaultMessage="success" />);
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

  const columns: ProColumns<API.CourseListItem>[] = [
    {
      title: <FormattedMessage id="title" defaultMessage="title" />,
      dataIndex: 'title',
      sorter: true,
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {entity.title}
          </a>
        );
      },
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
          {record.categories?.map(({ name }) => (
            <Tag key={name}>{name}</Tag>
          ))}
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
          {record.tags?.map(({ title }) => (
            <Tag key={title}>{title}</Tag>
          ))}
        </React.Fragment>
      ),
    },
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
          okText="Yes"
          cancelText="No"
        >
          <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
            <Button type="primary" icon={<DeleteOutlined />} danger></Button>
          </Tooltip>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.CourseListItem, API.CourseParams>
        loading={loading}
        headerTitle={intl.formatMessage({
          id: 'Courses',
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
        request={({ pageSize, current, title, category_id, tag }, sort) => {
          const sortArr = sort && Object.entries(sort)[0];
          setLoading(true);
          return course({
            title,
            pageSize,
            current,
            category_id,
            tag,
            order_by: sortArr && sortArr[0], // i like nested ternary
            /* eslint-disable */ order: sortArr
              ? sortArr[1] === 'ascend'
                ? 'ASC'
                : 'DESC'
              : undefined,
          }).then((data) => {
            setLoading(false);
            return data.success ? data.data : [];
          });
        }}
        columns={columns}
      />

      <Drawer
        width={600}
        visible={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.title && (
          <ProDescriptions<API.CourseListItem>
            column={2}
            title={currentRow?.title}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.title,
            }}
            columns={columns as ProDescriptionsItemProps<API.CourseListItem>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
