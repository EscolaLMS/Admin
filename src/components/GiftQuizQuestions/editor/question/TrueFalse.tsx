import React from 'react';
import { FormattedMessage } from 'umi';
import { ProFormCheckbox, ProFormText } from '@ant-design/pro-form';

export const GiftQuizQuestionTrueFalseEditor: React.FC = () => (
  <>
    <ProFormText
      name="question"
      label={<FormattedMessage id="question" />}
      rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
      required
    />
    <ProFormCheckbox name="isCorrect" label={<FormattedMessage id="Questions.correctAnswer" />} />
  </>
);
