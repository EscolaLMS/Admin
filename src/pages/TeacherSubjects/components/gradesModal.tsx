import { Button, Form, Row, Col } from 'antd';
import { FormattedMessage } from '@@/plugin-locale/localeExports';
import ProForm, {
  ProFormText,
  ModalForm,
  ProFormDatePicker,
  ProFormSelect,
} from '@ant-design/pro-form';

interface GradesModalProps {
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  onFinish: (formData: Record<string, string>) => Promise<boolean | void>;
}

export const GradesModal: React.FC<GradesModalProps> = (props) => {
  const { visible = false, onFinish, onVisibleChange } = props;
  const [form] = Form.useForm();
  return (
    <ModalForm
      form={form}
      title={<FormattedMessage id="uploadGrades" />}
      width="40vw"
      visible={visible}
      onVisibleChange={(newVisibleValue) => {
        onVisibleChange(newVisibleValue);
        form.resetFields();
      }}
      onFinish={(formData) => {
        form.resetFields();
        return onFinish(formData);
      }}
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
              required: false,
            },
          ]}
          width="sm"
        />
        <ProFormSelect
          name="semester"
          label={<FormattedMessage id="semester" defaultMessage="semester" />}
          rules={[
            {
              required: false,
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
