import React, { Fragment } from 'react';
import { Table } from '@/components/GiftQuizQuestions/table';
import { Divider } from 'antd';
import ProForm, { ProFormGroup, ProFormDigit } from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';
import Typography from 'antd/lib/typography/Typography';

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
          max_attempts: topicable ? topicable.max_attempts : undefined,
          max_execution_time: topicable ? topicable.max_execution_time : undefined,
          min_pass_score: topicable ? topicable.min_pass_score : undefined,
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
          <ProFormDigit
            name="max_attempts"
            label={<FormattedMessage id="max_attempts" />}
            tooltip={<FormattedMessage id="max_attempts" />}
            placeholder={intl.formatMessage({
              id: 'max_attempts',
              defaultMessage: 'max_attempts',
            })}
          />
          <ProFormDigit
            name="max_execution_time"
            label={<FormattedMessage id="max_execution_time" />}
            tooltip={<FormattedMessage id="max_execution_time_tooltip" />}
            placeholder={intl.formatMessage({
              id: 'max_execution_time',
              defaultMessage: 'max_execution_time',
            })}
          />
          <ProFormDigit
            name="min_pass_score"
            max={100}
            label={<FormattedMessage id="min_pass_score" />}
            tooltip={<FormattedMessage id="min_pass_score_tooltip" />}
            placeholder={intl.formatMessage({
              id: 'min_pass_score',
              defaultMessage: 'min_pass_score',
            })}
          />
        </ProFormGroup>
      </ProForm>

      <Divider />

      {topicable ? (
        <Table
          questions={topicable.questions}
          quizId={topicable.id}
          onAdded={onAdded}
          onRemoved={onRemoved}
        />
      ) : (
        <Typography>
          <FormattedMessage
            id="pressSaveToCreateQuestions"
            defaultMessage="Create this Topic before adding questions"
          />
        </Typography>
      )}
    </Fragment>
  );
};

export default GiftQuiz;
