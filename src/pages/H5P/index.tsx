import { PlusOutlined } from '@ant-design/icons';
import { Button, Tooltip, Popconfirm, message } from 'antd';
import React, { useState, useRef, useCallback } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { h5p, removeH5P } from '@/services/escola-lms/h5p';
import { DeleteOutlined, EditOutlined, BookOutlined, ExportOutlined } from '@ant-design/icons';
import UploadH5P from '@/components/H5P/upload';
declare const REACT_APP_API_URL: string;

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
          key={'upload'}
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
      sorter: (a, b) => a.title.length - b.title.length,
      render: (dom, entity) => {
        return entity.title;
      },
    },
    {
      title: <FormattedMessage id="library" defaultMessage="library" />,
      dataIndex: 'library',
      sorter: (a, b) => a.library.title.length - b.library.title.length,
      search: false,
      render: (dom, entity) => {
        return entity.library.title;
      },
    },
    {
      title: <FormattedMessage id="library_id" defaultMessage="library_id" />,
      dataIndex: 'library_id',
      sorter: (a, b) => a.library.id - b.library.id,
      render: (dom, entity) => {
        return entity.library.id;
      },
    },
    {
      title: <FormattedMessage id="count_h5p" defaultMessage="count_h5p" />,
      dataIndex: 'count_h5p',
      sorter: (a, b) => a.count_h5p - b.count_h5p,
      search: false,
      render: (dom, entity) => {
        return entity.count_h5p;
      },
    },
    {
      title: <FormattedMessage id="options" defaultMessage="options" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Link key={'edit'} to={`/courses/h5ps/${record.id}`}>
          <Tooltip title={<FormattedMessage id="edit" defaultMessage="edit" />}>
            <Button type="primary" icon={<EditOutlined />} />
          </Tooltip>
        </Link>,

        <Popconfirm
          key={'delete'}
          disabled={record.count_h5p !== 0}
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
            <Button
              disabled={record.count_h5p !== 0}
              type="primary"
              icon={<DeleteOutlined />}
              danger
            />
          </Tooltip>
        </Popconfirm>,
        <Link key={'preview'} to={`/courses/h5ps/preview/${record.id}`}>
          <Tooltip title={<FormattedMessage id="preview" defaultMessage="preview" />}>
            <Button icon={<BookOutlined />} />
          </Tooltip>
        </Link>,
        <a
          key={'export'}
          href={`${window.REACT_APP_API_URL || REACT_APP_API_URL}/api/admin/hh5p/content/${
            record.id
          }/export`}
          download
        >
          <Tooltip title={<FormattedMessage id="export" defaultMessage="export" />}>
            <Button icon={<ExportOutlined />} />
          </Tooltip>
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.H5PContentListItem, API.H5PListParams>
        loading={loading}
        headerTitle={intl.formatMessage({
          id: 'menu.Courses.H5Ps',
          defaultMessage: 'H5Ps List',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={
          {
            // labelWidth: 120,
          }
        }
        toolBarRender={() => [
          <Link to="/courses/h5ps/new" key={'new'}>
            <Button type="primary" key="primary">
              <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
            </Button>
          </Link>,
        ]}
        request={({ pageSize, current, title, library_id }) => {
          setLoading(true);

          return h5p({
            title,
            library_id,
            pageSize,
            current,
          }).then((response) => {
            setLoading(false);
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
