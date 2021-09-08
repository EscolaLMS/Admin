import React from 'react';
import ProForm, { ProFormText, ProFormSwitch } from '@ant-design/pro-form';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import { useIntl, FormattedMessage } from 'umi';

export const TopicForm: React.FC<{
  onValuesChange: (changedValues: any, values: Record<string, string>) => void;
  initialValues: API.Topic;
  courseId: number;
}> = ({ onValuesChange, initialValues, courseId }) => {
  const intl = useIntl();
  return (
    <ProForm submitter={false} onValuesChange={onValuesChange} initialValues={{ ...initialValues }}>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="title"
          label={<FormattedMessage id="title" />}
          tooltip={<FormattedMessage id="title" />}
          placeholder={intl.formatMessage({
            id: 'title',
            defaultMessage: 'title',
          })}
          required
        />
        <ProFormSwitch name="active" label={<FormattedMessage id="is_active" />} />
        <ProFormSwitch name="preview" label={<FormattedMessage id="able_to_preview" />} />
      </ProForm.Group>
      <ProForm.Group>
        <ProForm.Item
          name="summary"
          label={<FormattedMessage id="summary" />}
          tooltip={<FormattedMessage id="summary_tooltip" />}
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
