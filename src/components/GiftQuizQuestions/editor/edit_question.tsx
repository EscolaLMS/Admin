import { updateQuestion, deleteQuestion } from '@/services/escola-lms/gift_quiz';
import { useState } from 'react';
import { Button, InputNumber, Typography, Divider, Space } from 'antd';
import { FormattedMessage } from 'umi';
import CategoryTree, { type CategoryTreeProps } from '@/components/CategoryTree';
import { GiftQuizQuestionEditor } from './index';
import { isCorrectCategoryType } from './utils';

export const EditQuestion: React.FC<{
  quizId: number;
  question: API.GiftQuestion;
  onRemoved: () => void;
  onLoading: () => void;
  onEdited: () => void;
  loading: boolean;
  debug?: boolean;
  categoryProps?: boolean | Omit<CategoryTreeProps, 'value' | 'onChange'>;
}> = ({
  question,
  onRemoved,
  onEdited,
  quizId,
  loading = false,
  onLoading,
  debug = false,
  categoryProps = false,
}) => {
  const [value, setValue] = useState(question.value);
  const [score, setScore] = useState(question.score);
  const [categoryId, setCategoryId] = useState(question.category_id ?? undefined);

  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Divider>
        <FormattedMessage id={`gift_type.${question.type}`} />
      </Divider>
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
      <GiftQuizQuestionEditor
        type={question.type}
        loading={loading}
        value={value}
        onChange={(v) => setValue(v)}
      />
      <Space>
        <Typography>
          <FormattedMessage id="Questions.score" defaultMessage="Score" />:
        </Typography>
        <InputNumber
          disabled={loading}
          size="small"
          value={score}
          onChange={(v) => v && setScore(v)}
        />
      </Space>
      {debug && <Typography.Paragraph code>{value}</Typography.Paragraph>}
      <Button
        loading={loading}
        key="update"
        size="small"
        type="primary"
        onClick={() => {
          onLoading();
          updateQuestion(question.id, {
            ...question,
            topic_gift_quiz_id: quizId,
            value,
            score,
            category_id: categoryId,
          }).then(() => {
            if (onEdited) {
              onEdited();
            }
          });
        }}
      >
        <FormattedMessage id="Questions.edit" defaultMessage="Edit Question" />
      </Button>
      <Button
        loading={loading}
        key={'delete'}
        size="small"
        danger
        onClick={() => {
          onLoading();
          deleteQuestion(question.id).then(() => {
            if (onRemoved) {
              onRemoved();
            }
          });
        }}
      >
        <FormattedMessage id="Questions.delete" defaultMessage="Delete Question" />
      </Button>
    </Space>
  );
};
