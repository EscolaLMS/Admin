import React from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import { useIntl, FormattedMessage } from 'umi';

type Values = Record<string, any>;

export const TopicEditForm: React.FC<{
  topic: API.Topic;
  onSubmit?: (values: Values) => void;
  onChange: (values: Values) => void;
}> = ({ topic, onSubmit, onChange }) => {
  const onFinish = (values: Values) => {
    return onSubmit && onSubmit(values);
  };
  const intl = useIntl();

  return (
    <Form
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 10 }}
      layout="horizontal"
      name="basic"
      initialValues={topic}
      onFinish={onFinish}
      onValuesChange={(values) => onChange && onChange(values)}
    >
      <Form.Item
        label={<FormattedMessage id="title" />}
        tooltip={<FormattedMessage id="title" />}
        name="title"
        rules={[
          () => ({
            validator(_, value) {
              if (value.length <= 255) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(`
                  ${intl.formatMessage({
                    id: 'too_many_chars',
                  })}, max 255`),
              );
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default TopicEditForm;
