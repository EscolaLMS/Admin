import React from 'react';
import { FormattedMessage, useIntl } from 'umi';
import ProForm, { ProFormList, ProFormText } from '@ant-design/pro-form';

const INITIAL_VALUES = [
  {
    firstOfPair: '',
    secondOfPair: '',
  },
];

export const GiftQuizQuestionMatchingEditor: React.FC = () => {
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
          creatorButtonText: intl.formatMessage({
            id: 'Questions.addMatchingPair',
            defaultMessage: 'Add Matching Pair',
          }),
        }}
        deleteIconProps={{ tooltipText: intl.formatMessage({ id: 'Questions.deletePair' }) }}
        actionRender={(_f, _a, [, deleteButton]) => [deleteButton]}
        min={1}
        initialValue={INITIAL_VALUES}
      >
        {(_f, i) => (
          <ProForm.Group
            direction="horizontal"
            align="baseline"
            size="small"
            spaceProps={{ style: { flexWrap: 'nowrap' } }}
            title={
              <FormattedMessage
                id="Questions.pair"
                values={{ ordinalNumber: i + 1 }}
                defaultMessage={`Pair ${i + 1}`}
              />
            }
          >
            <ProFormText
              name="firstOfPair"
              rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
            />
            <ProFormText
              name="secondOfPair"
              rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
            />
          </ProForm.Group>
        )}
      </ProFormList>
    </>
  );
};
