import { ProFormTextArea } from '@ant-design/pro-form';
import React from 'react';
import { FormattedMessage } from 'umi';

export const GiftQuizQuestionEssayEditor: React.FC = () => (
  <ProFormTextArea
    name="question"
    label={<FormattedMessage id="question" />}
    rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
    required
  />
);
