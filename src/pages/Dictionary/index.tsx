import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Popconfirm, Tooltip, message } from 'antd';
import React, { useRef } from 'react';
import { FormattedMessage, Link, useIntl } from 'umi';

import { DictionaryTabNames } from '@/pages/Dictionary/form';
import { deleteDictionary, dictionaries } from '@/services/escola-lms/dictionary';
import { createTableOrderObject } from '@/utils/utils';

const handleRemove = async (id: number) => {
  return deleteDictionary(id).then((response) => {
    if (response.success) {
      message.success(response.message);
    }
    return true;
  });
};

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const columns: ProColumns<API.Dictionaries>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
      sorter: true,
      width: '80px',
    },
    {
      title: <FormattedMessage id="name" defaultMessage="name" />,
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: <FormattedMessage id="slug" defaultMessage="slug" />,
      dataIndex: 'slug',
      sorter: true,
    },
    {
      title: <FormattedMessage id="free_views_count" defaultMessage="free_views_count" />,
      dataIndex: 'free_views_count',
      sorter: true,
    },
    {
      hideInSearch: true,
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="option" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Link to={`/other/dictionary/${record.id}/${DictionaryTabNames.FORM}`} key="edit">
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
      <ProTable<API.Dictionaries, API.DictionariesParams>
        headerTitle={intl.formatMessage({
          id: 'menu.Other activities.Dictionary',
          defaultMessage: 'Dictionary',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        toolBarRender={() => [
          <Link to={`/other/dictionary/new/${DictionaryTabNames.FORM}`} key="new">
            <Button type="primary" key="primary">
              <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
            </Button>
          </Link>,
        ]}
        request={({ pageSize, current, name, slug }, sort) => {
          return dictionaries({
            per_page: pageSize,
            page: current,
            name,
            slug,
            ...createTableOrderObject(sort, 'created_at'),
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
