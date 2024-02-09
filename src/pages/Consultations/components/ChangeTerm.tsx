import { ModalForm, ProFormDateTimePicker } from '@ant-design/pro-form';
import { Form } from 'antd';
import React from 'react';

import { FormattedMessage, useIntl } from 'umi';

export const ChangeTerm: React.FC<{
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
        id: 'change_term',
        defaultMessage: 'change_term',
      })}
      width="400px"
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={onFinish}
    >
      <ProFormDateTimePicker
        width="sm"
        name="executed_at"
        label={<FormattedMessage id="executed_at" />}
        tooltip={<FormattedMessage id="executed_at" />}
        placeholder={intl.formatMessage({
          id: 'executed_at',
          defaultMessage: 'executed_at',
        })}
        fieldProps={{
          disabledDate: (current) => {
            const date = new Date();
            return current && current.valueOf() <= date.setDate(date.getDate() - 1);
          },
          format: 'YYYY-MM-DD HH:00',
          showSecond: false,
          showMinute: false,
          showTime: {
            format: 'HH',
          },
        }}
      />
    </ModalForm>
  );
};

export default ChangeTerm;
