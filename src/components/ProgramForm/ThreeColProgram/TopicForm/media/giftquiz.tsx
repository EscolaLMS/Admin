import { Table } from '@/components/GiftQuizQuestions/table';
import ProForm, { ProFormDigit, ProFormGroup, ProFormSwitch } from '@ant-design/pro-form';
import { Divider } from 'antd';
import Typography from 'antd/lib/typography/Typography';
import React, { Fragment, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import { DEFAULT_GRADE_WEIGHT, GRADEBOOK_FIELDS, isValidGradeWeight } from '../gradebook';

type QuizChangeKey =
  | 'max_attempts'
  | 'max_execution_time'
  | 'min_pass_score'
  | 'randomize_order'
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
  // AW-23: the grade weight input is only relevant when the item counts to the grade.
  const [addToGradebook, setAddToGradebook] = useState<boolean>(
    Boolean(topicable?.counts_to_grade),
  );

  return (
    <Fragment>
      <ProForm
        initialValues={{
          max_attempts: topicable ? topicable.max_attempts : undefined,
          max_execution_time: topicable ? topicable.max_execution_time : undefined,
          min_pass_score: topicable ? topicable.min_pass_score : undefined,
          randomize_order: topicable ? topicable.randomize_order ?? false : false,
          [GRADEBOOK_FIELDS.flag]: Boolean(topicable?.counts_to_grade),
          [GRADEBOOK_FIELDS.weight]: topicable?.weight ?? DEFAULT_GRADE_WEIGHT,
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
          <ProFormSwitch
            name="randomize_order"
            label={<FormattedMessage id="randomize_questions_order" />}
            tooltip={<FormattedMessage id="randomize_questions_order_tooltip" />}
          />
        </ProFormGroup>
        <ProFormGroup>
          <ProFormSwitch
            name={GRADEBOOK_FIELDS.flag}
            label={<FormattedMessage id="counts_to_grade" defaultMessage="Show in final grade" />}
            tooltip={
              <FormattedMessage
                id="counts_to_grade_tooltip"
                defaultMessage="When enabled, this item appears in the final grade and qualifies for a partial grade."
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
                    isValidGradeWeight(value)
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
