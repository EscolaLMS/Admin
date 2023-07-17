import React, { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import { Space, Divider } from 'antd';
import ProForm, { ProFormDigit, ProFormSelect } from '@ant-design/pro-form';

import { QuestionType } from '@/services/escola-lms/enums';
import CategoryTree, { type CategoryTreeProps } from '@/components/CategoryTree';
import { GiftQuizQuestion } from './question';
import type { GiftQuizFormData } from './types';

const VALUES_NOT_TO_RESET = ['type', 'score', 'category'];

const TYPE_OPTIONS = Object.values(QuestionType).reduce<
  { value: QuestionType; label: React.ReactNode }[]
>(
  (acc, q) => (q ? [...acc, { value: q, label: <FormattedMessage id={`gift_type.${q}`} /> }] : acc),
  [],
);

interface Props {
  onFinish: (formData: GiftQuizFormData) => Promise<void>;
  initialValues?: GiftQuizFormData;
  categoryProps?: boolean | Omit<CategoryTreeProps, 'value' | 'onChange'>;
}

export const GiftQuizQuestionEditor: React.FC<Props> = ({
  onFinish,
  initialValues,
  categoryProps = false,
}) => {
  const intl = useIntl();

  const [form] = ProForm.useForm<GiftQuizFormData>();
  const type: API.QuestionType | undefined = ProForm.useWatch('type', form);

  useEffect(() => {
    if (type) {
      const fields = form.getFieldsValue();
      const fieldsToReset = Object.keys(fields).filter((key) => !VALUES_NOT_TO_RESET.includes(key));

      form.resetFields(fieldsToReset);
    }
  }, [type]);

  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Divider>
        <FormattedMessage id="addNewQuestion" defaultMessage="New Question" />
      </Divider>
      <ProForm layout="horizontal" form={form} onFinish={onFinish} initialValues={initialValues}>
        <ProFormSelect
          name="type"
          placeholder={intl.formatMessage({
            id: 'selectNewQuestionType',
            defaultMessage: 'Select new question type',
          })}
          label={<FormattedMessage id="type" defaultMessage="Type:" />}
          options={TYPE_OPTIONS}
          rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
          required
        />
        <GiftQuizQuestion type={type} />
        <ProFormDigit
          name="score"
          label={<FormattedMessage id="Questions.score" defaultMessage="Score" />}
          rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
        />
        {categoryProps && (
          <ProForm.Item
            name="category"
            label={<FormattedMessage id="category" defaultMessage="Category" />}
            rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
            required
          >
            <CategoryTree {...(typeof categoryProps === 'object' ? categoryProps : {})} />
          </ProForm.Item>
        )}
      </ProForm>
    </Space>
  );
};
