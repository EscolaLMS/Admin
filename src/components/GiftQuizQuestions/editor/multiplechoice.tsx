import React from 'react';
import { FormattedMessage, useIntl } from 'umi';
import { Button } from 'antd';
import ProForm, {
  ProFormCheckbox,
  ProFormDigit,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-form';
import { DeleteOutlined } from '@ant-design/icons';

import { QuestionType } from '@/services/escola-lms/enums';

const INITIAL_VALUES = {
  [QuestionType.MULTIPLE_CHOICE]: [
    { isCorrect: false, value: '' },
    { isCorrect: false, value: '' },
  ],
  [QuestionType.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS]: [
    { value: '', weight: '' },
    { value: '', weight: '' },
  ],
};

interface Props {
  type: QuestionType.MULTIPLE_CHOICE | QuestionType.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS;
}

export const GiftQuizQuestionMultipleChoiceEditor: React.FC<Props> = ({ type }) => {
  const intl = useIntl();

  return (
    <>
      <ProFormText
        name="question"
        label={<FormattedMessage id="question" />}
        rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
        required
      />
      <ProFormList
        name="answers"
        creatorButtonProps={{
          creatorButtonText: intl.formatMessage({ id: 'Questions.addAnswer' }),
        }}
        actionRender={() => []}
        initialValue={INITIAL_VALUES[type] ?? []}
      >
        {(field, i, action, count) => (
          <ProForm.Group
            title={
              <>
                <FormattedMessage id="Questions.answer" values={{ ordinalNumber: i + 1 }} />
                {count > 2 && (
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    onClick={() => action.remove(field.name)}
                  />
                )}
              </>
            }
            titleStyle={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
          >
            {type === QuestionType.MULTIPLE_CHOICE && (
              <ProFormCheckbox
                name="isCorrect"
                label={
                  <FormattedMessage
                    id="Questions.correctAnswer"
                    defaultMessage="Is Correct Answer?"
                  />
                }
                rules={[
                  ({ getFieldValue }) => ({
                    validator: () => {
                      const answers = getFieldValue('answers') ?? [];
                      if (
                        answers.filter((answer: { isCorrect: boolean }) => answer?.isCorrect)
                          .length > 1
                      ) {
                        return Promise.reject('Only one answer can be correct');
                      }

                      return Promise.resolve();
                    },
                    message: <FormattedMessage id="Questions.onlyOneAnswerIsCorrect" />,
                  }),
                ]}
              />
            )}
            <ProFormText
              name="value"
              rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
              label={<FormattedMessage id="content" defaultMessage="Content" />}
            />
            {type === QuestionType.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS && (
              <ProFormDigit
                name="weight"
                rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
                fieldProps={{ min: 1, max: 100, addonAfter: '%' }}
                label={<FormattedMessage id="weight" defaultMessage="Weight" />}
              />
            )}
          </ProForm.Group>
        )}
      </ProFormList>
    </>
  );
};
