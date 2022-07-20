import React from 'react';
import ProForm, { ProFormText, ProFormSwitch } from '@ant-design/pro-form';
import { Button, Select } from 'antd';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import { useIntl, FormattedMessage } from 'umi';
import JsonEditor from '@/components/JsonEditor';

export const TopicForm: React.FC<{
  onValuesChange: (changedValues: API.Topic, values: API.Topic) => void;
  initialValues: API.Topic;
  courseId: number;
  courseLessons: API.Lesson[];
}> = ({ onValuesChange, initialValues, courseId, courseLessons }) => {
  const intl = useIntl();

  const [showTexts, setShowTexts] = React.useState<boolean>(false);

  return (
    <ProForm<API.Topic>
      submitter={false}
      onValuesChange={onValuesChange}
      initialValues={{ ...initialValues }}
    >
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
      <ProFormSwitch name="can_skip" label={<FormattedMessage id="can_skip" />} />
      <ProForm.Item name="lesson_id" label={<FormattedMessage id="lesson" />}>
        <Select style={{ width: '100%' }}>
          {courseLessons.map(
            (element) =>
              element.id && (
                <Select.Option key={element.id} value={element.id}>
                  {element.title}
                </Select.Option>
              ),
          )}
        </Select>
      </ProForm.Item>
      <ProForm.Item
        name="json"
        label={<FormattedMessage id="json" />}
        tooltip={<FormattedMessage id="json_tooltip" />}
        valuePropName="value"
      >
        <JsonEditor />
      </ProForm.Item>
      <Button onClick={() => setShowTexts(!showTexts)}>
        <FormattedMessage id="toggleDescriptions" />
      </Button>
      {showTexts && (
        <React.Fragment>
          <ProForm.Group>
            <ProForm.Item
              name="introduction"
              label={<FormattedMessage id="introduction" />}
              tooltip={<FormattedMessage id="introduction_tooltip" />}
              valuePropName="value"
            >
              <WysiwygMarkdown
                directory={`course/${courseId}/lesson/${initialValues.lesson_id}/topic/${initialValues.id}/wysiwyg`}
              />
            </ProForm.Item>
          </ProForm.Group>
          <ProForm.Group>
            <ProForm.Item
              name="description"
              label={<FormattedMessage id="description" />}
              tooltip={<FormattedMessage id="description_tooltip" />}
              valuePropName="value"
            >
              <WysiwygMarkdown
                directory={`course/${courseId}/lesson/${initialValues.lesson_id}/topic/${initialValues.id}/wysiwyg`}
              />
            </ProForm.Item>
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
        </React.Fragment>
      )}
    </ProForm>
  );
};

export default TopicForm;
