import React from 'react';
import ProForm, { ProFormText, ProFormSwitch } from '@ant-design/pro-form';

export const TopicForm: React.FC<{
  onValuesChange: (changedValues: any, values: Record<string, string>) => void;
  initialValues: any;
}> = ({ onValuesChange, initialValues }) => {
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
    </ProForm>
  );
};

export default TopicForm;
