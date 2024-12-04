import { QuestionnaireQuestionType } from '@/services/escola-lms/enums';
import { getQuestion } from '@/services/escola-lms/questionnaire';
import {
  ModalForm,
  ProFormDigit,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
} from '@ant-design/pro-form';
import { Form } from 'antd';
import type { DefaultOptionType } from 'antd/lib/select';
import React, { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'umi';

export const QuestionModalForm: React.FC<{
  id?: number | false;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  onFinish: (formData: API.QuestionnaireQuestion) => Promise<boolean | void>;
  questionsList: API.QuestionnaireQuestion[];
}> = (props) => {
  const intl = useIntl();
  const [showScore, setShowScore] = React.useState(false);
  const { visible, onVisibleChange, onFinish, id, questionsList } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    if (typeof id === 'number' && id > 0) {
      getQuestion(id).then((response) => {
        if (response.success) form.setFieldsValue(response.data);
      });
    } else {
      form.resetFields();
    }
  }, [id, form]);

  const questionTypeOptions: DefaultOptionType[] = Object.values(QuestionnaireQuestionType).map(
    (name) => ({
      name,
      label: intl.formatMessage({
        id: `QuestionType.${name}`,
      }),
      value: name,
      disabled:
        name === QuestionnaireQuestionType.Review &&
        questionsList.findIndex(({ type }) => type === QuestionnaireQuestionType.Review) !== -1,
    }),
  );

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: typeof id === 'number' && id > 0 ? 'question_edit' : 'question_add',
        defaultMessage: typeof id === 'number' && id > 0 ? 'question_edit' : 'question_add',
      })}
      width="400px"
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={onFinish}
    >
      <ProFormSelect
        name="type"
        options={questionTypeOptions}
        label={<FormattedMessage id="type" />}
        initialValue={QuestionnaireQuestionType.Rate}
        onChange={(value) => {
          if (value === QuestionnaireQuestionType.Review) {
            setShowScore(true);
          } else {
            setShowScore(false);
          }
        }}
      />
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
      {showScore && (
        <ProFormDigit
          width="lg"
          name="max_score"
          label={<FormattedMessage id="max_score" />}
          tooltip={<FormattedMessage id="max_score" />}
          placeholder={intl.formatMessage({
            id: 'max_score',
            defaultMessage: 'max_score',
          })}
          min={0}
          max={9999}
          fieldProps={{ step: 1 }}
        />
      )}

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
      <ProFormSwitch
        initialValue={true}
        name="public_answers"
        label={<FormattedMessage id="show_hide_on_front" defaultMessage="show_hide_on_front" />}
      />
    </ModalForm>
  );
};

export default QuestionModalForm;
