import { Modal } from 'antd';
import { FormattedMessage } from 'umi';

type Data = {
  showModal: boolean;
  disableEdit: boolean;
  clicked: boolean;
};

const EditValidateModal: React.FC<{
  visible: boolean;
  setManage: (data: Data) => void;
}> = ({ visible, setManage }) => {
  return (
    <Modal
      width={'600px'}
      title={
        <FormattedMessage
          id="course.validate_edit.header"
          defaultMessage="course.validate_edit.header"
        />
      }
      visible={visible}
      onOk={() =>
        setManage({
          showModal: false,
          disableEdit: false,
          clicked: true,
        })
      }
      onCancel={() =>
        setManage({
          showModal: false,
          disableEdit: true,
          clicked: false,
        })
      }
      okText="OK"
      cancelText="Cancel"
    >
      <p>
        <FormattedMessage
          id="course.validate_edit.content"
          defaultMessage="course.validate_edit.content"
        />
      </p>
    </Modal>
  );
};

export default EditValidateModal;
