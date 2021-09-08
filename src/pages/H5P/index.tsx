import { PlusOutlined } from '@ant-design/icons';
import { Button, Tooltip, Popconfirm, message } from 'antd';
import React, { useState, useRef, useCallback } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { h5p, removeH5P } from '@/services/escola-lms/h5p';
import { DeleteOutlined, EditOutlined, BookOutlined } from '@ant-design/icons';
import UploadH5P from '@/components/H5P/upload';

const TableList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();

  const intl = useIntl();

  const handleRemove = useCallback(
    async (id: number) => {
      setLoading(true);
      const hide = message.loading(<FormattedMessage id="loading" defaultMessage="loading" />);
      try {
        await removeH5P(id);
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

  const columns: ProColumns<API.H5PContentListItem>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      sorter: false,
      search: false,
    },

    {
      title: <FormattedMessage id="newH5P" defaultMessage="newH5P" />,
      dataIndex: 'upload',
      hideInSearch: false,
      hideInTable: true,

      renderFormItem: () => [
        <UploadH5P
          onSuccess={() => {
            if (actionRef.current) {
              actionRef.current.reload();
            }
            message.success(
              <FormattedMessage id="H5P_uploaded" defaultMessage="new H5P uploaded successfully" />,
            );
          }}
          onError={() => message.error(<FormattedMessage id="error" defaultMessage="error" />)}
        />,
      ],
    },
    {
      title: <FormattedMessage id="title" defaultMessage="title" />,
      dataIndex: 'title',
      sorter: false,
      search: false,
      render: (dom, entity) => {
        return entity.title;
      },
    },
    {
      title: <FormattedMessage id="library" defaultMessage="library" />,
      dataIndex: 'library',
      sorter: false,
      search: false,
      render: (dom, entity) => {
        return entity.library.title;
      },
    },
    {
      title: <FormattedMessage id="options" defaultMessage="options" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Link to={`/h5ps/${record.id}`}>
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
        <Link to={`/h5ps/preview/${record.id}`}>
          <Tooltip title={<FormattedMessage id="preview" defaultMessage="preview" />}>
            <Button icon={<BookOutlined />}></Button>
          </Tooltip>
        </Link>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.H5PContentListItem, API.H5PContentParams>
        loading={loading}
        headerTitle={intl.formatMessage({
          id: 'H5Ps',
          defaultMessage: 'H5Ps List',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Link to="/h5ps/new">
            <Button type="primary" key="primary">
              <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
            </Button>
          </Link>,
        ]}
        request={({ pageSize, current }) => {
          setLoading(true);
          return h5p({
            pageSize,
            current,
          }).then((data) => {
            setLoading(false);
            return data || [];
          });
        }}
        columns={columns}
      />
    </PageContainer>
  );
};

export default TableList;
