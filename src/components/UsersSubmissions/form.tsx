import ProForm, { ModalForm, ProFormText } from '@ant-design/pro-form';
import { Form } from 'antd';
import React from 'react';

import { FormattedMessage, useIntl } from 'umi';

export const AddUserSubmission: React.FC<{
  id?: number | false;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  onFinish: (formData: API.Setting) => Promise<boolean | void>;
}> = (props) => {
  const intl = useIntl();

  const { visible, onVisibleChange, onFinish, id } = props;

  const [form] = Form.useForm();

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: id ? 'email' : 'email',
        defaultMessage: id ? 'email' : 'email',
      })}
      width="30vw"
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={onFinish}
    >
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
    </ModalForm>
  );
};

export default AddUserSubmission;
