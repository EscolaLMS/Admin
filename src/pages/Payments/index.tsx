import { PlusOutlined } from '@ant-design/icons';
import { Button, Tooltip, Popconfirm, Typography } from 'antd';
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

import { payments } from '@/services/escola-lms/payments';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

/*
const handleUpdate = async (fields: API.PaymentListItem, id?: number) => {
  console.log('handleUpdate', fields, id);
  return true;
};
*/

const handleRemove = async (id: number) => {
  console.log('handleRemove', id);
  return true;
};

const TableList: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<number | false>(false);
  const [data, setData] = useState<API.PaymentListItem[]>([]);
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  console.log('outupt', data, modalVisible);

  const columns: ProColumns<API.PaymentListItem>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="amount" defaultMessage="amount" />,
      dataIndex: 'amount',
      hideInSearch: false,
      render: (_, record) => (
        <Typography>
          {record.amount / 100} {record.currency}{' '}
        </Typography>
      ),
    },
    {
      title: <FormattedMessage id="status" defaultMessage="status" />,
      dataIndex: 'status',
      hideInSearch: false,
    },
    {
      hideInSearch: true,
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="操作" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Tooltip key="edit" title={<FormattedMessage id="edit" defaultMessage="edit" />}>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => setModalVisible(record.id)}
          ></Button>
        </Tooltip>,
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
              setModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
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
      <ProTable<API.PaymentListItem, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'payments',
          defaultMessage: 'payments',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setModalVisible(-1);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="新建" />
          </Button>,
        ]}
        request={() => {
          return payments().then((records) => {
            setData(records.data);
            return records;
          });
        }}
        columns={columns}
      />
    </PageContainer>
  );
};

export default TableList;
