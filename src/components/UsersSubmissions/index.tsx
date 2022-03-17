import React, { Fragment, useCallback, useRef, useState } from 'react';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';

import { Button, message, Popconfirm, Tooltip } from 'antd';

import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { DeleteOutlined } from '@ant-design/icons';
import {
  assignUserSubmission,
  deleteUserSubmission,
  userSubmissions,
} from '@/services/escola-lms/users_submissions';

export const TableColumns: ProColumns<EscolaLms.AssignWithoutAccount.Models.UserSubmission>[] = [
  {
    title: <FormattedMessage id="id" defaultMessage="id" />,
    dataIndex: 'id',
    hideInSearch: true,
  },

  {
    title: <FormattedMessage id="email" defaultMessage="email" />,
    dataIndex: 'email',
    hideInSearch: false,
  },
  {
    title: <FormattedMessage id="status" defaultMessage="status" />,
    dataIndex: 'status',
    hideInSearch: true,
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

  const onFinish = useCallback(
    async (values) => {
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
        }
      } catch (error) {
        message.error(<FormattedMessage id="error" defaultMessage="error" />);
        setLoading(false);
      }
    },
    [id, type],
  );

  const onDetachUser = useCallback(
    async (user_id) => {
      setLoading(true);
      await deleteUserSubmission(Number(user_id));
      actionRef.current?.reload();
      setLoading(false);
    },
    [id, type],
  );
  return (
    <Fragment>
      <ProForm layout="inline" onFinish={onFinish} form={form}>
        <ProForm.Group>
          <ProFormText
            width="md"
            name="email"
            label={<FormattedMessage id="email" />}
            tooltip={<FormattedMessage id="email_tooltip" />}
            placeholder={intl.formatMessage({
              id: 'email',
              defaultMessage: 'email',
            })}
            required
          />
        </ProForm.Group>
      </ProForm>

      <ProTable<
        EscolaLms.AssignWithoutAccount.Models.UserSubmission,
        API.PageParams & { email?: string; morphable_id?: number; morphable_type?: string }
      >
        defaultSize="small"
        loading={loading}
        search={{
          labelWidth: 120,
        }}
        headerTitle={intl.formatMessage({
          id: 'email',
          defaultMessage: 'Email',
        })}
        actionRef={actionRef}
        rowKey="id"
        request={async ({ email, pageSize, current }) => {
          setLoading(true);
          return userSubmissions({
            email,
            pageSize,
            current,
            morphable_type: type,
            morphable_id: id,
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
      />
    </Fragment>
  );
};

export default UserSubmissions;
