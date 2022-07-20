import React from 'react';
import { Modal } from 'antd';
import { FormattedMessage } from '@@/plugin-locale/localeExports';

interface CourseSuccessModalProps {
  visible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

export const CourseSuccessModal: React.FC<CourseSuccessModalProps> = (props) => {
  const { visible = false, handleOk, handleCancel } = props;

  return (
    <Modal
      title={
        <FormattedMessage
          id="course_success_modal_title"
          defaultMessage="course_success_modal_title"
        />
      }
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>
        <FormattedMessage
          id="course_success_modal_content"
          defaultMessage="course_success_modal_content"
        />
      </p>
    </Modal>
  );
};
