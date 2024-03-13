import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { Col, Form, Row } from 'antd';
import React, { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'umi';

export const DictionaryWordsDescriptionsModal: React.FC<{
  selectedField: API.DictionaryWordData | null;
  isOpen: boolean;
  onOpenChange: (visible: boolean) => void;
  onFinish: (formData: API.DictionaryWordData) => Promise<boolean | void>;
}> = (props) => {
  const intl = useIntl();

  const { isOpen, selectedField, onOpenChange, onFinish } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    if (selectedField) {
      form.setFieldsValue(selectedField);
      return;
    }
    form.resetFields();
  }, [selectedField]);

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: selectedField?.id ? 'editSetting' : 'newSetting',
        defaultMessage: selectedField?.id ? 'editSetting' : 'newSetting',
      })}
      width="40vw"
      open={isOpen}
      onOpenChange={(newVisibleValue) => {
        onOpenChange(newVisibleValue);
        form.resetFields();
      }}
      onFinish={(formData) => {
        form.resetFields();
        return onFinish({ ...formData, id: selectedField?.id || null });
      }}
    >
      <Row>
        <Col span={24}>
          <ProFormText
            label={<FormattedMessage id="title" defaultMessage="title" />}
            rules={[
              {
                required: true,
              },
            ]}
            name="title"
          />
        </Col>
        <Col span={24}>
          <ProFormText
            label={<FormattedMessage id="video_url" defaultMessage="video_url" />}
            rules={[
              {
                required: true,
              },
            ]}
            name="video_url"
          />
        </Col>
        <Col span={24}>
          <ProFormTextArea
            label={<FormattedMessage id="description" defaultMessage="description" />}
            rules={[
              {
                required: true,
              },
            ]}
            name="description"
          />
        </Col>
      </Row>
    </ModalForm>
  );
};

export default DictionaryWordsDescriptionsModal;
