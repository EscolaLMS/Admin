import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Tooltip, Popconfirm, message } from 'antd';
import React, { useRef } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import { format } from 'date-fns';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { templates, deleteTemplate } from '@/services/escola-lms/templates';
import { DATETIME_FORMAT } from '@/consts/dates';
import { channelType } from '..';

const TableList: React.FC<{ templateType: string; channel: channelType }> = ({
  templateType,
  channel,
}) => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const columns: ProColumns<API.TemplateListItem>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="created_at" defaultMessage="created_at" />,
      dataIndex: 'created_at',
      hideInSearch: true,
      render: (_, record) =>
        record.created_at && format(new Date(record.created_at), DATETIME_FORMAT),
    },
    {
      title: <FormattedMessage id="name" defaultMessage="name" />,
      dataIndex: 'name',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="event" defaultMessage="event" />,
      dataIndex: 'event',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="templates.is_default" />,
      dataIndex: 'default',
      hideInSearch: true,
      render: (_, record) => record.default && <FormattedMessage id="yes" />,
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
        <Link to={`/templates/${templateType}/new`}>
          <Button type="primary" key="primary">
            <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
          </Button>
        </Link>,
      ]}
      request={({ pageSize, current }) => {
        return templates({ pageSize, current }).then((response) => {
          if (response.success) {
            return {
              data: response.data.filter((item) => item.channel === channel),
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
            <Link to={`/templates/${templateType}/${record.id}`} key="edit">
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