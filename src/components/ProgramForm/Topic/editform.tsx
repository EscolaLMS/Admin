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

      {/* <Form.Item label="Image" name="image">
        <Upload
          onRemove={() => setFileList([])}
          beforeUpload={onBeforeUpload}
          listType="picture"
          fileList={fileList}
          onFileChange
        >
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item> */}

      {/*
      <Form.Item
        label="Time Limit"
        name="duration"
        rules={[
          {
            pattern: /^[0-9][0-9]:[0-9][0-9]$/,
            message: 'Please enter a valid time format HH:MM',
          },
        ]}
      >
        <Input maxLength={5} placeholder="HH:MM" />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="publish" valuePropName="checked">
        <Checkbox>Is Published?</Checkbox>
      </Form.Item>


      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Save topic data
        </Button>
      </Form.Item>
      */}
    </Form>
  );
};

export default TopicEditForm;
