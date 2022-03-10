import React, { useEffect } from 'react';
import { Form } from 'antd';
import { ProFormText, ProFormSwitch, ModalForm, ProFormDigit } from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';
import { getQuestion } from '@/services/escola-lms/questionnaire';

export const QuestionModalForm: React.FC<{
  id?: number | false;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  onFinish: (formData: API.Question) => Promise<boolean | void>;
}> = (props) => {
  const intl = useIntl();

  const { visible, onVisibleChange, onFinish, id } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    if (typeof id === 'number' && id > 0) {
      getQuestion(id).then((response) => {
        form.setFieldsValue(response.data);
      });
    } else {
      form.resetFields();
    }
  }, [id, form]);

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: typeof id === 'number' && id > 0 ? 'editCategory' : 'question_add',
        defaultMessage: typeof id === 'number' && id > 0 ? 'editCategory' : 'question_add',
      })}
      width="400px"
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={onFinish}
    >
      <ProFormText
        width="lg"
        name="title"
        label={<FormattedMessage id="title" />}
        tooltip={<FormattedMessage id="title" />}
        placeholder={intl.formatMessage({
          id: 'title',
        })}
      />
      <ProFormText
        width="lg"
        name="description"
        label={<FormattedMessage id="description" />}
        tooltip={<FormattedMessage id="description" />}
        placeholder={intl.formatMessage({
          id: 'description',
        })}
      />
      <ProFormDigit
        width="lg"
        name="position"
        label={<FormattedMessage id="position" />}
        tooltip={<FormattedMessage id="position" />}
        placeholder={intl.formatMessage({
          id: 'position',
          defaultMessage: 'position',
        })}
        min={0}
        max={9999}
        fieldProps={{ step: 1 }}
      />
      <ProFormSwitch
        initialValue={true}
        name="active"
        label={<FormattedMessage id="is_active" defaultMessage="is_active" />}
      />
    </ModalForm>
  );
};

export default QuestionModalForm;
