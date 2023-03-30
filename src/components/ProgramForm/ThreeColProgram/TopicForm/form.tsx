import React from 'react';
import ProForm, { ProFormText, ProFormSwitch } from '@ant-design/pro-form';
import { Button } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import JsonEditor from '@/components/JsonEditor';
import { DescriptionModal } from '@/components/ProgramForm/ThreeColProgram/TopicForm/descriptionModal';
import { ParentLesson } from '../ParentLesson';

export const TopicForm: React.FC<{
  onValuesChange: (changedValues: API.Topic, values: API.Topic) => void;
  initialValues: API.Topic;
  courseId: number;
  courseLessons: API.Lesson[];
}> = ({ onValuesChange, initialValues, courseId }) => {
  const intl = useIntl();

  const [visibleModal, setVisibleModal] = React.useState<boolean>(false);

  return (
    <ProForm<API.Topic>
      submitter={false}
      onValuesChange={onValuesChange}
      initialValues={{ ...initialValues }}
      layout={'horizontal'}
    >
      <ProFormText
        name="title"
        label={<FormattedMessage id="title" />}
        tooltip={<FormattedMessage id="title" />}
        placeholder={intl.formatMessage({
          id: 'title',
          defaultMessage: 'title',
        })}
        required
      />
      <ProFormText
        name="duration"
        label={<FormattedMessage id="duration" />}
        tooltip={<FormattedMessage id="duration" />}
        placeholder={intl.formatMessage({
          id: 'duration',
        })}
      />
      <ParentLesson name="lesson_id" />
      <ProForm.Item label={<FormattedMessage id="description" />}>
        <Button type={'primary'} onClick={() => setVisibleModal(true)}>
          <FormattedMessage id="open_editor" />
        </Button>
      </ProForm.Item>
      <ProFormSwitch name="active" label={<FormattedMessage id="is_active" />} />
      <ProFormSwitch name="preview" label={<FormattedMessage id="able_to_preview" />} />
      <ProFormSwitch name="can_skip" label={<FormattedMessage id="can_skip" />} />
      <ProForm.Item
        name="json"
        label={<FormattedMessage id="json" />}
        tooltip={<FormattedMessage id="json_tooltip" />}
        valuePropName="value"
      >
        <JsonEditor />
      </ProForm.Item>
      <DescriptionModal
        isModalVisible={visibleModal}
        handleOk={() => setVisibleModal(false)}
        initialValues={initialValues}
        courseId={courseId}
      />
    </ProForm>
  );
};

export default TopicForm;
