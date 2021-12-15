import React, { useEffect } from 'react';
import { Form } from 'antd';
import ProForm, { ProFormText, ModalForm } from '@ant-design/pro-form';

import { useIntl, FormattedMessage } from 'umi';

export const SettingsModalForm: React.FC<{
  id?: number | false;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  onFinish: (formData: API.UserSetting) => Promise<boolean | void>;
}> = (props) => {
  const intl = useIntl();

  const { visible, onVisibleChange, onFinish } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    return () => {
      form.resetFields();
    };
  }, []);

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: 'newSetting',
        defaultMessage: 'newSetting',
      })}
      width="30vw"
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={onFinish}
    >
      <ProForm.Group>
        <ProFormText
          label={<FormattedMessage id="key" defaultMessage="key" />}
          rules={[
            {
              required: true,
            },
          ]}
          width="md"
          name="key"
        />
        <ProFormText
          label={<FormattedMessage id="value" defaultMessage="value" />}
          rules={[
            {
              required: true,
            },
          ]}
          width="md"
          name="value"
        />
      </ProForm.Group>
    </ModalForm>
  );
};

export default SettingsModalForm;
