import React from 'react';
import { FormattedMessage } from 'umi';
import { ProFormDigit, ProFormText } from '@ant-design/pro-form';

export const GiftQuizQuestionNumericalEditor: React.FC = () => (
  <>
    <ProFormText
      name="question"
      label={<FormattedMessage id="question" />}
      rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
      required
    />
    <ProFormDigit
      name="answer"
      label={<FormattedMessage id="answer" />}
      rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
      required
    />
    <ProFormDigit
      name="errorMargin"
      fieldProps={{ addonAfter: '+/-' }}
      label={<FormattedMessage id="Questions.errorMargin" />}
      rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
      required
    />
  </>
);
