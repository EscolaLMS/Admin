import { Table } from '@/components/GiftQuizQuestions/table';
import { DEFAULT_GRADE_WEIGHT, GRADEBOOK_FIELDS } from '@/consts/gradebook';
import ProForm, { ProFormDigit, ProFormGroup, ProFormSwitch } from '@ant-design/pro-form';
import { Divider } from 'antd';
import Typography from 'antd/lib/typography/Typography';
import React, { Fragment, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

type QuizChangeKey =
  | 'max_attempts'
  | 'max_execution_time'
  | 'min_pass_score'
  | typeof GRADEBOOK_FIELDS.flag
  | typeof GRADEBOOK_FIELDS.weight;

export const GiftQuiz: React.FC<{
  topicable: API.TopicQuiz['topicable'];
  onChange: (key: QuizChangeKey, value: number | boolean | null) => void;
  onAdded?: () => void;
  onRemoved?: () => void;
  onEdited?: () => void;
}> = ({ topicable, onAdded, onRemoved, onEdited, onChange }) => {
  const intl = useIntl();
  const [addToGradebook, setAddToGradebook] = useState<boolean>(
    Boolean(topicable?.add_to_gradebook),
  );

  return (
    <Fragment>
      <ProForm
        initialValues={{
          max_attempts: topicable ? topicable.max_attempts : undefined,
          max_execution_time: topicable ? topicable.max_execution_time : undefined,
          min_pass_score: topicable ? topicable.min_pass_score : undefined,
          [GRADEBOOK_FIELDS.flag]: Boolean(topicable?.add_to_gradebook),
          [GRADEBOOK_FIELDS.weight]: topicable?.grade_weight ?? DEFAULT_GRADE_WEIGHT,
        }}
        onValuesChange={(values) => {
          const key = Object.keys(values)[0] as QuizChangeKey;
          if (!key) return;
          if (key === GRADEBOOK_FIELDS.flag) {
            setAddToGradebook(Boolean(values[key]));
          }
          onChange(key, values[key]);
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
        <ProFormGroup>
          <ProFormSwitch
            name={GRADEBOOK_FIELDS.flag}
            label={
              <FormattedMessage id="add_to_gradebook" defaultMessage="Add grade to gradebook" />
            }
            tooltip={
              <FormattedMessage
                id="add_to_gradebook_tooltip"
                defaultMessage="When enabled, this grade is counted in the subject gradebook."
              />
            }
          />
          {addToGradebook && (
            <ProFormDigit
              name={GRADEBOOK_FIELDS.weight}
              label={<FormattedMessage id="grade_weight" defaultMessage="Grade weight" />}
              tooltip={
                <FormattedMessage id="grade_weight_tooltip" defaultMessage="Default weight is 1." />
              }
              extra={
                <FormattedMessage
                  id="grade_weight_default_hint"
                  defaultMessage="Default weight is 1."
                />
              }
              min={0}
              fieldProps={{ step: 0.25, precision: 2 }}
              rules={[
                {
                  validator: (_rule, value) =>
                    value === undefined || value === null || Number(value) > 0
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error(
                            intl.formatMessage({
                              id: 'grade_weight_must_be_positive',
                              defaultMessage: 'Weight must be greater than 0.',
                            }),
                          ),
                        ),
                },
              ]}
            />
          )}
        </ProFormGroup>
      </ProForm>

      <Divider />

      {topicable ? (
        <Table
          questions={topicable.questions}
          quizId={topicable.id}
          onAdded={onAdded}
          onEdited={onEdited}
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
