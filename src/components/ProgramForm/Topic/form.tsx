import React from 'react';
import ProForm, { ProFormText, ProFormSwitch } from '@ant-design/pro-form';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';

export const TopicForm: React.FC<{
  onValuesChange: (changedValues: any, values: Record<string, string>) => void;
  initialValues: API.Topic;
  courseId: number;
}> = ({ onValuesChange, initialValues, courseId }) => {
  return (
    <ProForm submitter={false} onValuesChange={onValuesChange} initialValues={{ ...initialValues }}>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="title"
          label="Title"
          tooltip="Title"
          placeholder="Title"
          required
        />
        <ProFormSwitch name="active" label="Is Active?" />
        <ProFormSwitch name="preview" label="Able to preview?" />
      </ProForm.Group>
      <ProForm.Group>
        <ProForm.Item
          name="summary"
          label="Summary"
          tooltip="The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown."
          valuePropName="value"
        >
          <WysiwygMarkdown
            directory={`course/${courseId}/lesson/${initialValues.lesson_id}/topic/${initialValues.id}/wysiwyg`}
          />
        </ProForm.Item>
      </ProForm.Group>
    </ProForm>
  );
};

export default TopicForm;
