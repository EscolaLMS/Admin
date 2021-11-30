import React, { useEffect } from 'react';
import { Form } from 'antd';
import ProForm, { ProFormText, ProFormSwitch, ModalForm } from '@ant-design/pro-form';
import { Typography } from 'antd';

import { FormattedMessage } from 'umi';
import { updateConfig } from '@/services/escola-lms/settings';

const { Text } = Typography;

export const SettingsPackageModalForm: React.FC<{
  value: API.ConfigEntry;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  onFinish: (updated: boolean) => Promise<boolean | void>;
}> = (props) => {
  const { visible, onVisibleChange, onFinish, value } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(value);
  }, [value, form]);

  return (
    <ModalForm
      form={form}
      title={value.full_key}
      width="60vw"
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={async () => {
        const result = await updateConfig({
          key: value.full_key,
          value: form.getFieldsValue().value,
        });
        onFinish(result.success === true);
        return result.success;
      }}
    >
      <ProForm.Group>
        <ProFormSwitch
          disabled
          name="public"
          label={<FormattedMessage id="public" defaultMessage="public" />}
        />
        <ProFormSwitch
          disabled
          name="readonly"
          label={<FormattedMessage id="readonly" defaultMessage="readonly" />}
        />

        <ProForm.Item shouldUpdate label={<FormattedMessage id="rules" defaultMessage="rules" />}>
          {() => <Text code>{JSON.stringify(form.getFieldValue('rules'))}</Text>}
        </ProForm.Item>
      </ProForm.Group>

      <ProFormText width="lg" name="value" label={<FormattedMessage id="value" />} />
    </ModalForm>
  );
};

export default SettingsPackageModalForm;
