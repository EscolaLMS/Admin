import ProForm, { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { Form } from 'antd';
import React, { useEffect } from 'react';

import type { AgendaType } from '@/components/Agenda';
import { FormattedMessage, useIntl } from 'umi';

export const DictionaryWordsDescriptionsModal: React.FC<{
  id?: number | false;
  fields: AgendaType | null;
  isOpen: boolean;
  onOpenChange: (visible: boolean) => void;
  onFinish: (formData: API.Setting) => Promise<boolean | void>;
}> = (props) => {
  const intl = useIntl();

  const { isOpen, fields, onOpenChange, onFinish, id } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    if (fields) {
      form.setFieldsValue(fields);
      return;
    }
    form.resetFields();
  }, [fields]);

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: id ? 'editSetting' : 'newSetting',
        defaultMessage: id ? 'editSetting' : 'newSetting',
      })}
      width="40vw"
      open={isOpen}
      onOpenChange={(newVisibleValue) => {
        onOpenChange(newVisibleValue);
        form.resetFields();
      }}
      onFinish={(formData) => {
        form.resetFields();
        return onFinish({ ...formData, id: fields?.id || null });
      }}
    >
      <ProForm.Group>
        <ProFormText
          label={<FormattedMessage id="title" defaultMessage="title" />}
          rules={[
            {
              required: true,
            },
          ]}
          name="title"
        />

        <ProFormTextArea
          label={<FormattedMessage id="description" defaultMessage="description" />}
          rules={[
            {
              required: false,
            },
          ]}
          name="description"
        />
      </ProForm.Group>
    </ModalForm>
  );
};

export default DictionaryWordsDescriptionsModal;
