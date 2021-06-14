import React, { useState } from 'react';
import Button from 'antd/lib/button';
import Upload from 'antd/lib/upload';
import { UploadOutlined } from '@ant-design/icons';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Checkbox from 'antd/lib/checkbox';

const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};

export const TopicEditForm = ({ topic, onSubmit, loading = false, onChange }) => {
  const onFinish = (values) => {
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 10 }}
      layout="horizontal"
      name="basic"
      initialValues={topic}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={(values) => onChange && onChange(values)}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          () => ({
            validator(_, value) {
              if (value.length <= 255) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Too many characters (max 255)'));
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
