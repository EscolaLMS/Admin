import React from 'react';
import { Button, Popconfirm } from 'antd';
import ProForm, { ProFormText, ProFormSwitch } from '@ant-design/pro-form';

import WysiwygMarkdown from '@/components/WysiwygMarkdown';

export const LessonForm: React.FC<{
  lesson: API.Lesson;
  onFinish: (values: Record<string, string>) => Promise<void>;
  onValuesChange: (changedValues: any, values: Record<string, string>) => void;
  onDelete: () => Promise<void>;
  initialValues: any;
  loading: boolean;
}> = ({ onFinish, onValuesChange, onDelete, initialValues, lesson, loading = false }) => {
  return (
    <ProForm
      submitter={{
        // Fully customize the entire area
        render: (props) => {
          return [
            <Button
              loading={loading}
              type="primary"
              key="submit"
              onClick={() => props.form?.submit()}
              {...props.submitButtonProps}
            >
              {lesson.isNew ? 'Create' : 'Save'}
            </Button>,

            <Popconfirm
              key="delete"
              title="Are you sure to delete this lesson?"
              onConfirm={onDelete}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" danger {...props.submitButtonProps} loading={loading}>
                Delete
              </Button>
            </Popconfirm>,
          ];
        },
      }}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      initialValues={{ ...initialValues, summary: initialValues.summary || '' }}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="title"
          label="Title"
          tooltip="Title"
          placeholder="Title"
          required
        />
        <ProFormText
          width="sm"
          name="duration"
          label="Duration"
          tooltip="duration"
          placeholder="duration"
        />
        <ProFormSwitch name="active" label="Is Active?" />
      </ProForm.Group>
      <ProForm.Group>
        <ProForm.Item
          name="summary"
          label="Summary"
          tooltip="The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown."
          valuePropName="value"
        >
          <WysiwygMarkdown />
        </ProForm.Item>
      </ProForm.Group>
    </ProForm>
  );
};

export default LessonForm;
