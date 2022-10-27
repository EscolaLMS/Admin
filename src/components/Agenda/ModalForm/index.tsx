import React, { useEffect } from 'react';
import { Form } from 'antd';
import ProForm, {
  ProFormText,
  ModalForm,
  ProFormTextArea,
  ProFormTimePicker,
} from '@ant-design/pro-form';

import { useIntl, FormattedMessage } from 'umi';
import UserSelect from '@/components/UserSelect';
import type { AgendaType } from '@/pages/StationaryEvents/form';

export const AgendaModalForm: React.FC<{
  id?: number | false;
  fields: AgendaType | null;
  name: string | boolean;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  onFinish: (formData: API.Setting) => Promise<boolean | void>;
}> = (props) => {
  const intl = useIntl();

  const { visible, fields, onVisibleChange, onFinish, id } = props;

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
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={(formData) => onFinish({ ...formData, id: fields?.id || null })}
    >
      <ProForm.Group>
        <ProFormText
          label={<FormattedMessage id="title" defaultMessage="title" />}
          rules={[
            {
              required: true,
            },
          ]}
          width="lg"
          name="title"
        />
        <ProFormText
          label={<FormattedMessage id="subtitle" defaultMessage="subtitle" />}
          rules={[
            {
              required: true,
            },
          ]}
          width="lg"
          name="subtitle"
        />
        <ProFormTimePicker
          name="hour"
          label={<FormattedMessage id="hour" defaultMessage="hour" />}
          rules={[
            {
              required: true,
            },
          ]}
          width="xs"
        />
        <ProForm.Item
          name="tutors"
          label={<FormattedMessage id="tutors" />}
          rules={[
            {
              required: true,
            },
          ]}
          convertValue={(v) => {
            return v;
          }}
          valuePropName="value"
        >
          <UserSelect multiple />
        </ProForm.Item>

        <ProFormTextArea
          label={<FormattedMessage id="description" defaultMessage="description" />}
          rules={[
            {
              required: false,
            },
          ]}
          width="lg"
          name="description"
        />

        <ProForm.Item name="asCandidate" hidden={true} />
      </ProForm.Group>
    </ModalForm>
  );
};

export default AgendaModalForm;
