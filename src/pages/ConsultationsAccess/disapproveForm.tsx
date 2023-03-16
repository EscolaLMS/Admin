import { DrawerForm, ProFormTextArea } from '@ant-design/pro-form';

import { Form } from 'antd';
import { FormattedMessage } from 'umi';

import { disapproveConsultationAccess } from '@/services/escola-lms/consultations_access';

export const DisapproveForm: React.FC<{
  id?: number;
  onClose: () => void;
  onSuccess: () => void;
}> = ({ id, onClose, onSuccess }) => {
  const [form] = Form.useForm<{ name: string; company: string }>();

  return (
    <DrawerForm<{
      message: string;
    }>
      title={<FormattedMessage id="disapprove_form" defaultMessage="Disapprove Form" />}
      onVisibleChange={(visible) => !visible && onClose()}
      form={form}
      visible={!!id}
      autoFocusFirstInput
      drawerProps={{
        destroyOnClose: true,
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        if (id) {
          await disapproveConsultationAccess(id, values).then((data) => {
            if (data.success) {
              onClose();
              onSuccess();
            }
          });
        }

        return true;
      }}
    >
      <ProFormTextArea
        name="message"
        label={<FormattedMessage id="reason" defaultMessage="Reason" />}
        tooltip={<FormattedMessage id="reason_tooltip" defaultMessage="Reason" />}
      />
    </DrawerForm>
  );
};
