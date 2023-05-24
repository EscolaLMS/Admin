import React, { Fragment, useCallback, useRef, useState } from 'react';
import ProForm from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';

import { Button, message, Popconfirm, Tag, Tooltip } from 'antd';

import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import {
  assignUserSubmission,
  deleteUserSubmission,
  userSubmissions,
} from '@/services/escola-lms/users_submissions';
import { createTableOrderObject } from '@/utils/utils';
import AddUserSubmission from './form';
import './index.css';

export const TableColumns: ProColumns<EscolaLms.AssignWithoutAccount.Models.UserSubmission>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
    sorter: true,
  },

  {
    title: <FormattedMessage id="email" defaultMessage="email" />,
    dataIndex: 'email',
    hideInSearch: false,
    width: '70%',
    sorter: true,
  },
  {
    title: <FormattedMessage id="status" defaultMessage="status" />,
    dataIndex: 'status',
    hideInSearch: true,
    sorter: true,
    valueEnum: {
      sent: (
        <Tag color="processing">
          <FormattedMessage id="sent" />
        </Tag>
      ),
      assigned: (
        <Tag color="default">
          <FormattedMessage id="assigned" />
        </Tag>
      ),
      accepted: (
        <Tag color="success">
          <FormattedMessage id="accepted" />
        </Tag>
      ),
      rejected: (
        <Tag color="error">
          <FormattedMessage id="rejected" />
        </Tag>
      ),
    },
  },
];

export const UserSubmissions: React.FC<{
  id: number;
  type: string;
}> = ({ id, type }) => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = ProForm.useForm();
  const [modalVisible, setModalVisible] = useState(false);

  const onDetachUser = useCallback(
    async (user_id: number) => {
      setLoading(true);
      await deleteUserSubmission(Number(user_id));
      actionRef.current?.reload();
      setLoading(false);
    },
    [id, type],
  );
  return (
    <Fragment>
      <ProTable<
        EscolaLms.AssignWithoutAccount.Models.UserSubmission,
        API.PageParams & { email?: string; morphable_id?: number; morphable_type?: string }
      >
        defaultSize="small"
        loading={loading}
        search={{
          layout: 'vertical',
        }}
        headerTitle={intl.formatMessage({
          id: 'user_submission',
          defaultMessage: 'user_submission',
        })}
        actionRef={actionRef}
        toolBarRender={() => [
          <Button type="primary" key="primary" onClick={() => setModalVisible(true)}>
            <PlusOutlined /> <FormattedMessage id="email_to_add" defaultMessage="email_to_add" />
          </Button>,
        ]}
        rowKey="id"
        request={async ({ email, pageSize, current }, sort) => {
          setLoading(true);
          return userSubmissions({
            email,
            per_page: pageSize,
            page: current,
            morphable_type: type,
            morphable_id: id,
            ...createTableOrderObject(sort, 'created_at'),
          }).then((response) => {
            setLoading(false);
            if (response.success) {
              return {
                data: response.data,
                total: response.data.length,
                success: true,
              };
            }
            if (!response.success) {
              return {
                data: [],
                total: 0,
                success: false,
              };
            }
            return [];
          });
        }}
        columns={[
          ...TableColumns,
          {
            title: <FormattedMessage id="options" defaultMessage="options" />,
            dataIndex: 'option',
            valueType: 'option',
            width: '10%',
            render: (_, record) => [
              <Popconfirm
                key="delete"
                title={
                  <FormattedMessage
                    id="deleteQuestion"
                    defaultMessage="Are you sure to delete this record?"
                  />
                }
                onConfirm={() => onDetachUser(record.id)}
                okText={<FormattedMessage id="yes" />}
                cancelText={<FormattedMessage id="no" />}
              >
                <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
                  <Button type="primary" icon={<DeleteOutlined />} danger />
                </Tooltip>
              </Popconfirm>,
            ],
          },
        ]}
      />{' '}
      <AddUserSubmission
        visible={modalVisible}
        onVisibleChange={(value) => {
          return value === false && setModalVisible(false);
        }}
        onFinish={async (values) => {
          setLoading(true);
          try {
            const req = await assignUserSubmission({
              ...values,
              morphable_id: id,
              morphable_type: type,
            });
            if (req.success) {
              form.resetFields();
              actionRef.current?.reload();
              setLoading(false);
              setModalVisible(false);
            }
          } catch (error) {
            setModalVisible(false);
            message.error(<FormattedMessage id="error" defaultMessage="error" />);
            setLoading(false);
          }
        }}
      />
    </Fragment>
  );
};

export default UserSubmissions;
