import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Tooltip, Popconfirm, message } from 'antd';
import React, { useRef } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';

import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

import { templates, deleteTemplate } from '@/services/escola-lms/templates';

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const columns: ProColumns<API.TemplateListItem>[] = [
    {
      width: '20%',
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
    },
    {
      width: '80%',
      title: <FormattedMessage id="name" defaultMessage="name" />,
      dataIndex: 'name',
      hideInSearch: true,
    },
  ];

  return (
    <ProTable<API.TemplateListItem, API.PageParams>
      headerTitle={intl.formatMessage({
        id: 'templates',
        defaultMessage: 'templates',
      })}
      actionRef={actionRef}
      rowKey="id"
      search={false}
      toolBarRender={() => [
        <Link to="/templates/new">
          <Button type="primary" key="primary">
            <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
          </Button>
        </Link>,
      ]}
      request={({ pageSize, current }) => {
        return templates({ pageSize, current }).then((response) => {
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
        ...columns,
        {
          hideInSearch: true,
          title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="option" />,
          dataIndex: 'option',
          valueType: 'option',
          render: (_, record) => [
            <Link to={`/templates/${record.id}`} key="edit">
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
                const request = await deleteTemplate(record.id);
                const response = await request;

                if (response.success) {
                  message.success(response.message);
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
      ]}
    />
  );
};

export default TableList;
