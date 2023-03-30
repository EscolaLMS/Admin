import React, { Fragment } from 'react';
import { GiftQuestions } from '@/components/GiftQuizQuestions';
import { Divider } from 'antd';
import ProForm, { ProFormText, ProFormGroup } from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';

export const GiftQuiz: React.FC<{
  topicable: API.TopicQuiz['topicable'];
  onAdded: () => void;
  onRemoved: () => void;
  onChange: (key: 'max_attempts' | 'max_execution_time', value: number | null) => void;
}> = ({ topicable, onAdded, onRemoved, onChange }) => {
  const intl = useIntl();
  return (
    <Fragment>
      <ProForm
        initialValues={{
          max_attempts: topicable.max_attempts,
          max_execution_time: topicable.max_execution_time,
        }}
        onValuesChange={(values) => {
          const key = Object.keys(values)[0] as 'max_attempts' | 'max_execution_time';
          if (key) {
            onChange(key, values[key]);
          }
        }}
        submitter={false}
      >
        <ProFormGroup>
          <ProFormText
            name="max_attempts"
            label={<FormattedMessage id="max_attempts" />}
            tooltip={<FormattedMessage id="max_attempts" />}
            placeholder={intl.formatMessage({
              id: 'max_attempts',
              defaultMessage: 'max_attempts',
            })}
          />
          <ProFormText
            name="max_execution_time"
            label={<FormattedMessage id="max_execution_time" />}
            tooltip={<FormattedMessage id="max_execution_time" />}
            placeholder={intl.formatMessage({
              id: 'max_execution_time',
              defaultMessage: 'max_execution_time',
            })}
          />
        </ProFormGroup>
      </ProForm>

      <Divider />

      <GiftQuestions
        questions={topicable.questions}
        quizId={topicable.id}
        onAdded={onAdded}
        onRemoved={onRemoved}
      />
    </Fragment>
  );
};

export default GiftQuiz;
