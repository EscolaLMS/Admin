import { Button, Modal } from 'antd';
import ProForm from '@ant-design/pro-form';
import { FormattedMessage } from '@@/plugin-locale/localeExports';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import React from 'react';

interface DescriptionModalProps {
  handleOk: () => void;
  isModalVisible: boolean;
  initialValues: API.Topic;
  courseId: number;
}

export const DescriptionModal: React.FC<DescriptionModalProps> = (props) => {
  const { handleOk, isModalVisible, initialValues, courseId } = props;

  return (
    <Modal
      title={<FormattedMessage id="description" />}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleOk}
      width={1000}
      footer={[
        <Button key="back" type={'primary'} onClick={handleOk}>
          Ok
        </Button>,
      ]}
    >
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
    </Modal>
  );
};
