import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Tooltip, Popconfirm, message } from 'antd';
import React, { useRef } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

import { pages, deletePage } from '@/services/escola-lms/pages';
import TypeButtonDrawer from '@/components/TypeButtonDrawer';

const handleRemove = async (id: number) => {
  return deletePage(id).then((response) => {
    if (response.success) {
      message.success(response.message);
    }
    return true;
  });
};

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const columns: ProColumns<API.PageListItem>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="title" defaultMessage="title" />,
      dataIndex: 'title',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="slug" defaultMessage="slug" />,
      dataIndex: 'slug',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="author" defaultMessage="author" />,
      dataIndex: 'author_id',
      hideInSearch: true,
      render: (_, record) => (
        <TypeButtonDrawer
          key={'user'}
          type="EscolaLms\Core\Models\User"
          type_id={record.author_id}
        />
      ),
    },
    {
      hideInSearch: true,
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="option" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Link to={`/pages/${record.id}`} key="edit">
          <Tooltip title={<FormattedMessage id="edit" defaultMessage="edit" />}>
            <Button type="primary" icon={<EditOutlined />}></Button>
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
            <Button type="primary" icon={<DeleteOutlined />} danger></Button>
          </Tooltip>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.PageListItem, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'pages',
          defaultMessage: 'pages',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={
          {
            // labelWidth: 120,
          }
        }
        toolBarRender={() => [
          <Link to="/pages/new">
            <Button type="primary" key="primary">
              <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
            </Button>
          </Link>,
        ]}
        request={({ pageSize, current }) => {
          return pages({
            pageSize,
            current,
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
