import React from 'react';
import { Button, Popconfirm } from 'antd';
import ProForm, { ProFormText, ProFormSwitch } from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';

export const LessonForm: React.FC<{
  lesson: API.Lesson;
  onFinish: (values: Record<string, string>) => Promise<void>;
  onValuesChange: (changedValues: any, values: Record<string, string>) => void;
  onDelete: () => Promise<void>;
  initialValues: any;
  loading: boolean;
}> = ({ onFinish, onValuesChange, onDelete, initialValues, lesson, loading = false }) => {
  const intl = useIntl();
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
              {lesson.isNew ? <FormattedMessage id="create" /> : <FormattedMessage id="save" />}
            </Button>,

            <Popconfirm
              key="delete"
              onConfirm={onDelete}
              title={<FormattedMessage id="deleteQuestion" />}
              okText={<FormattedMessage id="yes" />}
              cancelText={<FormattedMessage id="no" />}
            >
              <Button type="primary" danger {...props.submitButtonProps} loading={loading}>
                <FormattedMessage id="delete" />
              </Button>
            </Popconfirm>,
          ];
        },
      }}
      onFinish={onFinish}
      onValuesChange={(a, b) => {
        onValuesChange(a, b);
      }}
      initialValues={{ ...initialValues, summary: initialValues.summary || '' }}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="title"
          label={<FormattedMessage id="title" />}
          tooltip={<FormattedMessage id="title" />}
          placeholder={intl.formatMessage({
            id: 'title',
          })}
          required
        />
        <ProFormText
          width="sm"
          name="duration"
          label={<FormattedMessage id="duration" />}
          tooltip={<FormattedMessage id="duration" />}
          placeholder={intl.formatMessage({
            id: 'duration',
          })}
        />
        <ProFormSwitch name="active" label={<FormattedMessage id="is_active" />} />
      </ProForm.Group>
      <ProForm.Group>
        <ProForm.Item
          name="summary"
          label={<FormattedMessage id="summary" />}
          tooltip={<FormattedMessage id="summary_tooltip" />}
          valuePropName="value"
        >
          <WysiwygMarkdown directory={`course/${lesson.course_id}/lesson/${lesson.id}/wysiwyg`} />
        </ProForm.Item>
      </ProForm.Group>
    </ProForm>
  );
};

export default LessonForm;
