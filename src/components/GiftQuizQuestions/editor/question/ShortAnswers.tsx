import React from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { ProFormList, ProFormText } from '@ant-design/pro-form';

const INITIAL_VALUES = [{ value: '' }];

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
        deleteIconProps={{ tooltipText: intl.formatMessage({ id: 'Questions.deleteAnswer' }) }}
        actionRender={(_f, _a, [, deleteButton]) => [deleteButton]}
        min={1}
        initialValue={INITIAL_VALUES}
      >
        {(_f, i) => (
          <ProFormText
            name="value"
            rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
            label={
              <FormattedMessage
                id="Questions.answer"
                values={{ ordinalNumber: i + 1 }}
                defaultMessage={`Answer ${i + 1}`}
              />
            }
          />
        )}
      </ProFormList>
    </>
  );
};
