import { FormattedMessage } from '@@/plugin-locale/localeExports';
import { Button, Modal } from 'antd';
import React from 'react';

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
      footer={[
        <Button key="link" onClick={handleCancel}>
          <FormattedMessage
            id="course_success_modal_button_cancel"
            defaultMessage="course_success_modal_button_cancel"
          />
        </Button>,
        <Button key="link" type="primary" onClick={handleOk}>
          <FormattedMessage
            id="course_success_modal_button_ok"
            defaultMessage="course_success_modal_button_ok"
          />
        </Button>,
      ]}
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
