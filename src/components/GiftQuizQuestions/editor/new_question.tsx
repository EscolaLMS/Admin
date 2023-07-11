import { GiftQuizQuestionMultipleChoiceEditor } from './multiplechoice';
import { GiftQuizQuestionEsseyEditor } from './essey';
import { GiftQuizQuestionTrueFalseEditor } from './true_false';
import { GiftQuizQuestionMatchingEditor } from './matching';
import { GiftQuizQuestionDescriptionEditor } from './description';
import { GiftQuizQuestionNumericalEditor } from './numerical';
import { GiftQuizQuestionShortEditor } from './short_answers';
import { isCorrectCategoryType } from './utils';

import CategoryTree, { type CategoryTreeProps } from '@/components/CategoryTree';
import { QuestionType } from '@/services/escola-lms/enums';
import { useState, useEffect } from 'react';
import { FormattedMessage } from 'umi';

import { Button, InputNumber, Typography, Space, Select, Divider } from 'antd';

type NewQuestionType = {
  score: number;
  value: string;
  category_id?: number;
};

const DEFAULT_VALUES: Record<QuestionType, string> = {
  [QuestionType.DESCRIPTION]: 'You can use your pencil and paper for these next math questions.',
  [QuestionType.ESSAY]: 'Write a short biography of Dag Hammarskjöld. {}',
  [QuestionType.MATCHING]: `Match the following countries with their corresponding capitals. {
        =Canada -> Ottawa
        =Italy  -> Rome
        =Japan  -> Tokyo
        =India  -> New Delhi
        }`,
  [QuestionType.MULTIPLE_CHOICE]:
    "Who's buried in Grant's tomb?{=Grant ~no one ~Napoleon ~Churchill ~Mother Teresa }",
  [QuestionType.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS]: `What two people are entombed in Grant's tomb? {
        ~%-100%No one
        ~%50%Grant
        ~%50%Grant's wife
        ~%-100%Grant's father
     }`,
  [QuestionType.NUMERICAL_QUESTION]: 'When was Ulysses S. Grant born?{#1822:5}',
  [QuestionType.SHORT_ANSWERS]:
    "Who's buried in Grant's tomb?{=Grant =Ulysses S. Grant =Ulysses Grant}",
  [QuestionType.TRUE_FALSE]: 'Grant was buried in a tomb in New York City.{T}',
};

const typeOptions = Object.values(QuestionType).reduce<
  { value: QuestionType; label: React.ReactNode }[]
>(
  (acc, q) => (q ? [...acc, { value: q, label: <FormattedMessage id={`gift_type.${q}`} /> }] : acc),
  [],
);

export const GiftQuizNewQuestionEditor: React.FC<{
  value: NewQuestionType;
  onChange: (value: NewQuestionType | ((prevState: NewQuestionType) => NewQuestionType)) => void;
  onCreate: () => void;
  loading?: boolean;
  debug?: boolean;
  categoryProps?: boolean | Omit<CategoryTreeProps, 'value' | 'onChange'>;
}> = ({ value, onChange, loading = false, onCreate, categoryProps = false, debug = false }) => {
  const [type, setType] = useState<QuestionType & ''>();
  const [categoryId, setCategoryId] = useState<number>();

  useEffect(() => {
    onChange({ value: type ? DEFAULT_VALUES[type] : '', score: value.score });
  }, [type]);

  useEffect(() => {
    onChange((prevState) => ({ ...prevState, category_id: categoryId }));
  }, [categoryId]);

  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Divider>
        <FormattedMessage id="addNewQuestion" defaultMessage="New Question" />
      </Divider>
      <Space wrap>
        <Typography>
          <FormattedMessage id={'type'} defaultMessage="Type:" />
          {':'}
        </Typography>
        <Select
          value={type}
          onChange={(newType) => setType(newType)}
          placeholder={
            <FormattedMessage
              id={'selectNewQuestionType'}
              defaultMessage="Select new question type"
            />
          }
          options={typeOptions}
          style={{
            maxWidth: '330px',
          }}
        />
      </Space>
      {categoryProps && (
        <Space wrap>
          <Typography>
            <FormattedMessage id="category" defaultMessage="Category" />
            {':'}
          </Typography>
          <CategoryTree
            {...(typeof categoryProps === 'object' ? categoryProps : {})}
            value={categoryId}
            onChange={(v) => isCorrectCategoryType(v) && setCategoryId(v)}
          />
        </Space>
      )}
      {(type === QuestionType.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS ||
        type === QuestionType.MULTIPLE_CHOICE) && (
        <GiftQuizQuestionMultipleChoiceEditor
          value={value.value}
          onChange={(v) => onChange({ value: v, score: value.score })}
        />
      )}

      {type === QuestionType.ESSAY && (
        <GiftQuizQuestionEsseyEditor
          value={value.value}
          onChange={(v) => onChange({ value: v, score: value.score })}
        />
      )}
      {type === QuestionType.DESCRIPTION && (
        <GiftQuizQuestionDescriptionEditor
          value={value.value}
          onChange={(v) => onChange({ value: v, score: value.score })}
        />
      )}
      {type === QuestionType.TRUE_FALSE && (
        <GiftQuizQuestionTrueFalseEditor
          value={value.value}
          onChange={(v) => onChange({ value: v, score: value.score })}
        />
      )}
      {type === QuestionType.MATCHING && (
        <GiftQuizQuestionMatchingEditor
          value={value.value}
          onChange={(v) => onChange({ value: v, score: value.score })}
        />
      )}
      {type === QuestionType.NUMERICAL_QUESTION && (
        <GiftQuizQuestionNumericalEditor
          value={value.value}
          onChange={(v) => onChange({ value: v, score: value.score })}
        />
      )}
      {type === QuestionType.SHORT_ANSWERS && (
        <GiftQuizQuestionShortEditor
          value={value.value}
          onChange={(v) => onChange({ value: v, score: value.score })}
        />
      )}

      {type && (
        <Space>
          <Typography>
            <FormattedMessage id="Questions.score" defaultMessage="Score" />:
          </Typography>
          <InputNumber
            disabled={loading}
            size="small"
            value={value.score}
            onChange={(v) => onChange({ score: v ?? 1, value: value.value })}
          />
        </Space>
      )}
      {type && (
        <Button
          loading={loading}
          key={'new'}
          size="small"
          type="primary"
          onClick={() => {
            onCreate();
            setType(undefined);
            setCategoryId(undefined);
          }}
        >
          <FormattedMessage id="Questions.create" defaultMessage="Create Question" />
        </Button>
      )}
      {type && debug && <Typography.Paragraph code>{value.value}</Typography.Paragraph>}
    </Space>
  );
};
