import { Button, Tooltip, Popconfirm, message } from 'antd';
import React, { useRef } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

import { DeleteOutlined, SendOutlined } from '@ant-design/icons';
import { scorms, deleteScorm } from '@/services/escola-lms/scorm';
import UploadScorm from '@/components/Scorm/upload';

const handleRemove = async (id: number) => {
  await deleteScorm(id);
  return true;
};

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const columns: ProColumns<API.SCORM>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="version" defaultMessage="version" />,
      dataIndex: 'version',
      hideInSearch: true,
    },

    {
      title: <FormattedMessage id="newScorm" defaultMessage="New Scorm" />,
      dataIndex: 'upload',
      hideInSearch: false,
      hideInTable: true,

      renderFormItem: () => [
        <UploadScorm
          onSuccess={() => {
            if (actionRef.current) {
              actionRef.current.reload();
            }
            message.success(
              <FormattedMessage id="scorm_uploaded" defaultMessage="scorm uploaded" />,
            );
          }}
          onError={(error) => message.error(error)}
        />,
      ],
    },

    {
      title: <FormattedMessage id="SCOS" defaultMessage="Sharable Content Objects" />,
      dataIndex: 'SCOS',
      hideInSearch: true,
      render: (_, record) => [
        record.scos.map((sco) => (
          <Link key={sco.uuid} to={`/scorms/preview/${sco.uuid}`}>
            <Tooltip title={<FormattedMessage id="preview" defaultMessage="preview" />}>
              <Button size="small" icon={<SendOutlined />} type="primary">
                {sco.title}
              </Button>
            </Tooltip>
          </Link>
        )),
      ],
    },

    {
      hideInSearch: true,
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="操作" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
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
          okText={<FormattedMessage id="yes" defaultMessage="Yes" />}
          cancelText={<FormattedMessage id="no" defaultMessage="No" />}
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
      <ProTable<API.SCORM, API.PageParams & { search: string; role: string }>
        headerTitle={intl.formatMessage({
          id: 'scorms',
          defaultMessage: 'scorms',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={
          {
            // labelWidth: 120,
          }
        }
        request={({ pageSize, current }) => {
          return scorms({ pageSize, current }).then((response) => {
            if (response.success) {
              return {
                data: response.data.data,
                total: response.data.total,
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
