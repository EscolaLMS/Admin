import React, { Fragment, useCallback, useRef, useState } from 'react';
import ProForm from '@ant-design/pro-form';
import UserSelect from '@/components/UserSelect';
import { useIntl, FormattedMessage } from 'umi';
import {
  productAttachToUser,
  productDetachToUser,
  getProduct,
} from '@/services/escola-lms/products';
import { Button, Tooltip } from 'antd';

import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { DeleteOutlined } from '@ant-design/icons';

export type MinimumUser = {
  id: number;
  email: string;
  name: string;
};

export const TableColumns: ProColumns<MinimumUser>[] = [
  {
    title: <FormattedMessage id="name" defaultMessage="name" />,
    dataIndex: 'name',
  },

  {
    title: <FormattedMessage id="email" defaultMessage="email" />,
    dataIndex: 'email',
  },
];

export const UserAccess: React.FC<{
  id: number | string;
}> = ({ id }) => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = ProForm.useForm();
  const onFinish = useCallback(
    async (values) => {
      setLoading(true);
      await productAttachToUser(Number(id), { user_id: values.user_id });

      form.resetFields();
      actionRef.current?.reload();
      setLoading(false);
    },
    [id],
  );

  const onDetachUser = useCallback(
    async (user_id) => {
      setLoading(true);
      await productDetachToUser(Number(id), { user_id });
      actionRef.current?.reload();
      setLoading(false);
    },
    [id],
  );
  return (
    <Fragment>
      <ProForm layout="inline" onFinish={onFinish} form={form} labelWrap={true}>
        <ProForm.Group>
          <ProForm.Item
            name="user_id"
            label={<FormattedMessage id="users" />}
            valuePropName="value"
          >
            <UserSelect />
          </ProForm.Item>
        </ProForm.Group>
      </ProForm>

      <ProTable<MinimumUser>
        defaultSize="small"
        loading={loading}
        search={false}
        headerTitle={intl.formatMessage({
          id: 'users',
          defaultMessage: 'Users',
        })}
        actionRef={actionRef}
        rowKey="id"
        request={async () => {
          setLoading(true);
          return getProduct(Number(id)).then((response) => {
            setLoading(false);
            if (response.success && response.data.users) {
              return {
                data: response.data.users as MinimumUser[],
                total: response.data.users.length,
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
              <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
                <Button
                  type="primary"
                  icon={<DeleteOutlined />}
                  danger
                  onClick={() => onDetachUser(record.id)}
                />
              </Tooltip>,
            ],
          },
        ]}
      />
    </Fragment>
  );
};

export default UserAccess;
