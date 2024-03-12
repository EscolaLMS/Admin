import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Popconfirm, Tag, Tooltip, message } from 'antd';
import React, { useRef } from 'react';
import { FormattedMessage, Link, useIntl, useParams } from 'umi';

import { DictionaryTabNames } from '@/pages/Dictionary/form';
import { deleteDictionaryWord, dictionaryWords } from '@/services/escola-lms/dictionary';
import { createTableOrderObject } from '@/utils/utils';

const handleRemove = async (id: number) => {
  return deleteDictionaryWord(id).then((response) => {
    if (response.success) {
      message.success(response.message);
    }
    return true;
  });
};

const DictionaryWordsTableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();
  const params = useParams<{ dictionaryId?: string; tab?: string }>();
  const { dictionaryId, tab } = params;

  const columns: ProColumns<API.DictionaryWords>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
      sorter: true,
      width: '80px',
    },
    {
      title: <FormattedMessage id="word" defaultMessage="word" />,
      dataIndex: 'word',
      sorter: true,
    },
    {
      title: <FormattedMessage id="categories" defaultMessage="categories" />,
      dataIndex: 'categories',
      sorter: false,
      hideInSearch: true,
      render: (_, record) => (
        <React.Fragment>
          {record.categories?.map((category) => (
            <Tag key={category.name}>{category.name}</Tag>
          ))}
        </React.Fragment>
      ),
    },
    {
      hideInSearch: true,
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="option" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Link to={`/other/dictionary/${dictionaryId}/${tab}/${record.id}`} key="edit">
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
    <ProTable<API.DictionaryWords, API.DictionaryWordsParams>
      headerTitle={intl.formatMessage({
        id: 'words',
        defaultMessage: 'Words',
      })}
      actionRef={actionRef}
      rowKey="id"
      search={{
        layout: 'vertical',
      }}
      toolBarRender={() => [
        <Link to={`/other/dictionary/${dictionaryId}/${tab}/new`} key="new">
          <Button type="primary" key="primary">
            <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
          </Button>
        </Link>,
      ]}
      request={({ pageSize, current, word }, sort) => {
        return dictionaryWords({
          per_page: pageSize,
          page: current,
          word,
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
  );
};

export default DictionaryWordsTableList;
