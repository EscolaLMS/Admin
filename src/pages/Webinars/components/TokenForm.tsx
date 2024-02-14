import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { Form } from 'antd';
import React from 'react';

import { FormattedMessage, useIntl } from 'umi';

export const TokenForm: React.FC<{
  id?: number | false;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  onFinish: (formData: Record<string, string>) => Promise<boolean | void>;
}> = (props) => {
  const intl = useIntl();

  const { visible, onVisibleChange, onFinish } = props;

  const [form] = Form.useForm();

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: 'generate_token',
        defaultMessage: 'generate_token',
      })}
      width="400px"
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={onFinish}
    >
      <ProFormText
        label={<FormattedMessage id="email" defaultMessage="email" />}
        rules={[
          {
            required: true,
          },
        ]}
        width="md"
        name="email"
      />
    </ModalForm>
  );
};

export default TokenForm;
