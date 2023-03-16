import { DrawerForm, ProFormText } from '@ant-design/pro-form';
import { v4 as uuidv4 } from 'uuid';

import { Button, Form } from 'antd';
import { FormattedMessage } from 'umi';
import { format } from 'date-fns';
import { DATETIME_FORMAT } from '@/consts/dates';
import { Descriptions } from 'antd';
import { approveConsultationAccessTerm } from '@/services/escola-lms/consultations_access';

export const ApproveForm: React.FC<{
  term?: EscolaLms.ConsultationAccess.Models.ConsultationAccessEnquiryProposedTerm;
  onClose: () => void;
  onSuccess: () => void;
}> = ({ term, onClose, onSuccess }) => {
  const [form] = Form.useForm<{ name: string; company: string }>();

  return (
    <DrawerForm<{
      meeting_link: string;
    }>
      title={<FormattedMessage id="approve_form" defaultMessage="Approve Form" />}
      onVisibleChange={(visible) => !visible && onClose()}
      form={form}
      visible={!!term}
      autoFocusFirstInput
      drawerProps={{
        destroyOnClose: true,
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        if (term) {
          await approveConsultationAccessTerm(term?.id, values).then((data) => {
            if (data.success) {
              onClose();
              onSuccess();
            }
          });
        }

        return true;
      }}
    >
      {term && (
        <Descriptions column={2}>
          <Descriptions.Item
            label={<FormattedMessage id="approve_date" defaultMessage="Approved Date" />}
          >
            {format(new Date(term.proposed_at), DATETIME_FORMAT)}
          </Descriptions.Item>
        </Descriptions>
      )}
      <ProFormText
        rules={[
          {
            required: true,
          },
        ]}
        name="meeting_link"
        label={<FormattedMessage id="meeting_link" defaultMessage="Meeting Link" />}
        tooltip={<FormattedMessage id="meeting_link" defaultMessage="Meeting Link" />}
      />
      <Button
        onClick={() => {
          form.setFieldValue('meeting_link', `https://meet.jit.si/${uuidv4()}`);
        }}
      >
        <FormattedMessage id="generate_jitsy" defaultMessage="Generate Jitsy URL" />
      </Button>
    </DrawerForm>
  );
};
