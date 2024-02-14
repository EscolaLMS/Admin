import ProForm, { ProFormDigit, ProFormSelect } from '@ant-design/pro-form';
import { Divider, Space } from 'antd';
import React, { useCallback, useEffect, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'umi';

import {
  CompetencyChallengeCategoryTree,
  type CompetencyChallengeCategoryTreeProps,
} from '@/pages/CompetencyChallenges/components/CompetencyChallengeCategoryTree';
import { QuestionType } from '@/services/escola-lms/enums';
import { GiftQuizQuestion } from './question';
import type { GiftQuizFormData, QuizQuestionSubmitData } from './types';
import { parseToFormData, parseToGIFT } from './utils';

const VALUES_NOT_TO_RESET = ['type', 'score', 'category'];

const TYPE_OPTIONS = Object.values(QuestionType).reduce<
  { value: QuestionType; label: React.ReactNode }[]
>(
  (acc, q) => (q ? [...acc, { value: q, label: <FormattedMessage id={`gift_type.${q}`} /> }] : acc),
  [],
);

interface Props {
  onSubmit: (quizQuestion: QuizQuestionSubmitData) => Promise<boolean>;
  values?: API.QuizQuestion;
  competencyChallengeCategoryTreeProps?:
    | boolean
    | Omit<CompetencyChallengeCategoryTreeProps, 'value' | 'onChange'>;
}

export const GiftQuizQuestionEditor: React.FC<Props> = ({
  onSubmit,
  values,
  competencyChallengeCategoryTreeProps = false,
}) => {
  const intl = useIntl();

  const [form] = ProForm.useForm<GiftQuizFormData>();
  const type: QuestionType | undefined = ProForm.useWatch('type', form);

  const initialValues = useMemo(() => parseToFormData(values), [values]);

  const onFinish = useCallback(async (formData: GiftQuizFormData) => {
    const value = parseToGIFT(formData);

    const { score, category_id } = formData;
    const status = await onSubmit({
      value,
      score: score ?? 0,
      category_id,
    });

    if (!status) {
      return;
    }

    form.resetFields();
  }, []);

  useEffect(() => {
    form.resetFields();
  }, [initialValues]);

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
        <FormattedMessage id={initialValues ? 'Questions.edit' : 'addNewQuestion'} />
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
        {type !== QuestionType.DESCRIPTION && (
          <ProFormDigit
            name="score"
            label={<FormattedMessage id="Questions.score" defaultMessage="Score" />}
            rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
          />
        )}
        {competencyChallengeCategoryTreeProps && (
          <ProForm.Item
            name="category_id"
            label={<FormattedMessage id="category" defaultMessage="Category" />}
            rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
            required
          >
            <CompetencyChallengeCategoryTree
              {...(typeof competencyChallengeCategoryTreeProps === 'object'
                ? competencyChallengeCategoryTreeProps
                : {})}
            />
          </ProForm.Item>
        )}
      </ProForm>
    </Space>
  );
};
