import ProForm, { ModalForm, ProFormText } from '@ant-design/pro-form';
import { Form } from 'antd';
import React, { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import { JsonLangEditor } from './JsonLangEditor';

export const TranslationModalForm: React.FC<{
  langKey?: string;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  onFinish: (formData: API.Translation) => Promise<boolean | void>;
  defaultValue?: Record<string, string>;
}> = ({ visible, onVisibleChange, onFinish, langKey, defaultValue }) => {
  const intl = useIntl();

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      key: langKey,
      text: defaultValue,
    });
  }, [langKey, form]);

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: 'editTranslation',
        defaultMessage: 'Edit Translation',
      })}
      width="700px"
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={(values) => onFinish({ ...values })}
    >
      <ProForm.Group>
        <ProFormText
          disabled
          label={<FormattedMessage id="group" defaultMessage="group" />}
          name="group"
          initialValue={'Admin'}
        />
        <ProFormText
          disabled
          name="key"
          label={<FormattedMessage id="key" />}
          placeholder={intl.formatMessage({
            id: 'key',
          })}
          required
        />
      </ProForm.Group>
      <ProForm.Item
        name={'text'}
        label={<FormattedMessage id={'translationJsonText'} />}
        tooltip={<FormattedMessage id={'translationJsonText_tooltip'} />}
        valuePropName="value"
      >
        <JsonLangEditor />
      </ProForm.Item>
    </ModalForm>
  );
};

export default TranslationModalForm;
