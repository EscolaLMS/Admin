import { Modal } from 'antd';
import { FormattedMessage } from 'umi';

const ConfirmModal: React.FC<{
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  title?: React.ReactNode;
  content?: React.ReactNode;
  okText?: React.ReactNode;
  loading?: boolean;
}> = ({ open, onOk, onCancel, title, content, okText, loading }) => {
  return (
    <Modal
      width={'600px'}
      title={title ?? <FormattedMessage id="confirmModal.title" />}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      okText={okText ?? <FormattedMessage id="save" />}
      cancelText={<FormattedMessage id="cancel" />}
      confirmLoading={loading}
    >
      {content ?? (
        <p>
          <FormattedMessage id="confirmModal.content" />
        </p>
      )}
    </Modal>
  );
};

export default ConfirmModal;
