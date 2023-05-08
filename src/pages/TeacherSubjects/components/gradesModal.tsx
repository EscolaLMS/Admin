import { FC } from 'react';
import { Button, Modal, Form, Space, Row, Col } from 'antd';
import { FormattedMessage } from '@@/plugin-locale/localeExports';
import ProForm, {
  ProFormText,
  ModalForm,
  ProFormTextArea,
  ProFormTimePicker,
  ProFormDatePicker,
  ProFormSelect,
} from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';

interface GradesModalProps {
  visible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}
//TODO: Get correct data when possible
export const GradesModal: FC<GradesModalProps> = (props) => {
  const { visible = false, handleOk, handleCancel } = props;
  const [form] = Form.useForm();
  return (
    <ModalForm
      form={form}
      title={<FormattedMessage id="uploadGrades" />}
      width="40vw"
      visible={visible}
      // onVisibleChange={(newVisibleValue) => {
      //   onVisibleChange(newVisibleValue);
      //   form.resetFields();
      // }}
      // onFinish={(formData) => {
      //   form.resetFields();
      //   return onFinish({ ...formData, id: fields?.id || null });
      // }}
    >
      <ProForm.Group>
        <ProFormText
          label={<FormattedMessage id="egzamTitle" defaultMessage="egzamTitle" />}
          rules={[
            {
              required: true,
            },
          ]}
          width="lg"
          name="title"
        />
        <ProFormDatePicker
          label={<FormattedMessage id="datePassingEgzam" defaultMessage="datePassingEgzam" />}
          rules={[
            {
              required: true,
            },
          ]}
          width="lg"
          name="subtitle"
        />
        <ProFormSelect
          name="egzamImportance"
          label={<FormattedMessage id="egzamImportance" defaultMessage="egzamImportance" />}
          rules={[
            {
              required: true,
            },
          ]}
          width="sm"
        />
        <ProFormSelect
          name="semester"
          label={<FormattedMessage id="semester" defaultMessage="semester" />}
          rules={[
            {
              required: true,
            },
          ]}
          width="sm"
        />
      </ProForm.Group>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Button type="primary" key="primary" onClick={() => console.log('MSTeams')}>
            <FormattedMessage
              id="uploadFile.MsTeamsForms"
              defaultMessage="uploadFile.MsTeamsForms"
            />
          </Button>
        </Col>
        <Col span={12}>
          <Button type="primary" key="primary" onClick={() => console.log('attendence')}>
            <FormattedMessage id="uploadFile.TestPortal" defaultMessage="uploadFile.TestPortal" />
          </Button>
        </Col>
        <Col span={12}>
          <Button type="primary" key="primary" onClick={() => console.log('upload')}>
            <FormattedMessage id="uploadFile.MsTeams" defaultMessage="uploadFile.MsTeams" />
          </Button>
        </Col>
        <Col span={12}>
          <Button type="primary" key="primary" onClick={() => console.log('upload')}>
            <FormattedMessage id="uploadGradesManullay" defaultMessage="uploadGradesManullay" />
          </Button>
        </Col>
      </Row>
    </ModalForm>
  );
};
