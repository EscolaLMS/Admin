import { DeleteOutlined } from '@ant-design/icons';
import ProForm, { ProFormList, ProFormText } from '@ant-design/pro-form';
import { Button, Tooltip } from 'antd';
import React from 'react';
import { FormattedMessage, useIntl } from 'umi';

const INITIAL_VALUES = [{ value: '', feedback: '' }];

export const GiftQuizQuestionShortEditor: React.FC = () => {
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
        initialValue={INITIAL_VALUES}
      >
        {(field, i, action, count) => (
          <ProForm.Group
            title={
              <>
                <FormattedMessage id="Questions.answer" values={{ ordinalNumber: i + 1 }} />
                {count > 1 && (
                  <Tooltip title={intl.formatMessage({ id: 'Questions.deleteAnswer' })}>
                    <Button
                      type="text"
                      icon={<DeleteOutlined />}
                      onClick={() => action.remove(field.name)}
                    />
                  </Tooltip>
                )}
              </>
            }
            titleStyle={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
          >
            <ProFormText
              name="value"
              rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
              label={<FormattedMessage id="content" defaultMessage="Content" />}
            />
            <ProFormText
              name="feedback"
              label={
                <FormattedMessage id="Questions.answerFeedback" defaultMessage="Answer feedback" />
              }
            />
          </ProForm.Group>
        )}
      </ProFormList>
    </>
  );
};
