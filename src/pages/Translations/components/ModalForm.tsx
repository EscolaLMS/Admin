import { slugify } from '@/services/escola-lms/slug';
import { getTranslation } from '@/services/escola-lms/translations';
import ProForm, { ModalForm, ProFormText } from '@ant-design/pro-form';
import { Form } from 'antd';
import React, { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import { JsonLangEditor } from './JsonLangEditor';

export const TranslationModalForm: React.FC<{
  id?: number | false;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  onFinish: (formData: API.Translation) => Promise<boolean | void>;
}> = (props) => {
  const intl = useIntl();

  const { visible, onVisibleChange, onFinish, id } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    if (typeof id === 'number' && id > 0) {
      getTranslation(id).then((response) => {
        if (response.success) form.setFieldsValue(response.data);
      });
    } else {
      form.resetFields();
    }
  }, [id, form]);

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: typeof id === 'number' && id > 0 ? 'editTranslation' : 'newTranslation',
        defaultMessage: typeof id === 'number' && id > 0 ? 'editTranslation' : 'newTranslation',
      })}
      width="700px"
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={(values) => onFinish({ ...values })}
      onValuesChange={(values) => {
        if (values.name) {
          form.setFieldsValue({ slug: slugify(values.name) });
        }
      }}
    >
      <ProFormText
        label={<FormattedMessage id="group" defaultMessage="group" />}
        width="md"
        name="group"
        initialValue={'*'}
      />
      <ProFormText
        width="md"
        name="key"
        label={<FormattedMessage id="key" />}
        placeholder={intl.formatMessage({
          id: 'key',
        })}
        required
      />
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
