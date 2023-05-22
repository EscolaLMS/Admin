import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Tooltip, Popconfirm, message, Tag } from 'antd';
import React, { useRef } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import UserSelect from '@/components/UserSelect';
import { format } from 'date-fns';
import { DATETIME_FORMAT } from '@/consts/dates';

import { tasks, deleteTask } from '@/services/escola-lms/tasks';
import TypeButtonDrawer from '@/components/TypeButtonDrawer';

const handleRemove = async (id: number) => {
  return deleteTask(id).then((response) => {
    if (response.success) {
      message.success(response.message);
    }
    return true;
  });
};

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const columns: ProColumns<API.TaskListItem>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
      sorter: true,
    },
    {
      title: <FormattedMessage id="title" defaultMessage="title" />,
      dataIndex: 'title',
      sorter: true,
    },

    {
      title: <FormattedMessage id="type" defaultMessage="type" />,
      dataIndex: 'type',
      sorter: true,
    },

    {
      title: <FormattedMessage id="author" defaultMessage="author" />,
      dataIndex: 'created_by_id',
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
      render: (_, record) =>
        record.created_by?.id && (
          <TypeButtonDrawer
            key={'user'}
            type="EscolaLms\Core\Models\User"
            type_id={record.created_by?.id}
          />
        ),
    },
    {
      title: <FormattedMessage id="assigned" defaultMessage="assigned" />,
      dataIndex: 'user_id',
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
      render: (_, record) =>
        record.user?.id && (
          <TypeButtonDrawer
            key={'user'}
            type="EscolaLms\Core\Models\User"
            type_id={record.user?.id}
          />
        ),
    },
    {
      title: <FormattedMessage id="completed_at" defaultMessage="Completed at" />,
      dataIndex: 'completed_at',
      hideInSearch: true,
      sorter: true,
      render: (_, record) =>
        record.completed_at ? (
          format(new Date(record.completed_at), DATETIME_FORMAT)
        ) : (
          <Tag>
            <FormattedMessage id="uncompleted" defaultMessage="uncompleted" />
          </Tag>
        ),
    },
    {
      hideInSearch: true,
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="option" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Link to={`/other/tasks/${record.id}`} key="edit">
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
          onConfirm={async () => {
            const success = await handleRemove(record.id);
            if (success) {
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          okText={<FormattedMessage id="yes" />}
          cancelText={<FormattedMessage id="no" />}
        >
          <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
            <Button type="primary" icon={<DeleteOutlined />} danger />
          </Tooltip>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.TaskListItem, API.TaskListParams>
        headerTitle={intl.formatMessage({
          id: 'menu.Other activities.Tasks',
          defaultMessage: 'Tasks',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        toolBarRender={() => [
          <Link to="/other/tasks/new" key="new">
            <Button type="primary" key="primary">
              <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
            </Button>
          </Link>,
        ]}
        request={({ pageSize, current, title, user_id, created_by_id }, sort) => {
          const sortArr = sort && Object.entries(sort)[0];
          return tasks({
            pageSize,
            current,
            title,
            created_by_id,
            user_id,
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
