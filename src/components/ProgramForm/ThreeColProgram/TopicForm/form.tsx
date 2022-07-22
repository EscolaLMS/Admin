import React from 'react';
import ProForm, { ProFormText, ProFormSwitch } from '@ant-design/pro-form';
import { Button, Select } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import JsonEditor from '@/components/JsonEditor';
import { DescriptionModal } from '@/components/ProgramForm/ThreeColProgram/TopicForm/descriptionModal';

export const TopicForm: React.FC<{
  onValuesChange: (changedValues: API.Topic, values: API.Topic) => void;
  initialValues: API.Topic;
  courseId: number;
  courseLessons: API.Lesson[];
}> = ({ onValuesChange, initialValues, courseId, courseLessons }) => {
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
      <ProForm.Item label={<FormattedMessage id="description" />}>
        <Button type={'primary'} onClick={() => setVisibleModal(true)}>
          <FormattedMessage id="Otwórz edytor" />
        </Button>
      </ProForm.Item>
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
