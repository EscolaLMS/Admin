import { createQuestion, updateQuestion, deleteQuestion } from '@/services/escola-lms/gift_quiz';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { Button, Input, List, Tag, InputNumber, Typography } from 'antd';
import { FormattedMessage } from 'umi';

export const QuestionItemList: React.FC<{
  quizId: number;
  question: API.GiftQuestion;
  onRemoved: () => void;
  onLoading: () => void;
  onEdited: () => void;
  loading: boolean;
}> = ({ question, onRemoved, onEdited, quizId, loading = false, onLoading }) => {
  const [value, setValue] = useState(question.value);
  const [score, setScore] = useState(question.score);
  return (
    <List.Item
      actions={[
        <Button
          loading={loading}
          key={'update'}
          size="small"
          type="primary"
          onClick={() => {
            onLoading();
            updateQuestion(question.id, {
              ...question,
              topic_gift_quiz_id: quizId,
              value,
              score,
            }).then(() => {
              if (onEdited) {
                onEdited();
              }
            });
          }}
        >
          <FormattedMessage id="Questions.edit" defaultMessage="Edit Question" />
        </Button>,
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
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={
          <Fragment>
            <FormattedMessage id="Questions.type" defaultMessage="Type" />:
            <Tag>{question.type}</Tag>
            <br />
            <Typography>
              <FormattedMessage id="Questions.score" defaultMessage="Score" />:
            </Typography>
            <InputNumber
              disabled={loading}
              size="small"
              value={score}
              onChange={(v) => v && setScore(v)}
            />
          </Fragment>
        }
        description={
          <Input.TextArea
            disabled={loading}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        }
      />
    </List.Item>
  );
};

export const GiftQuestions: React.FC<{
  quizId: number;
  questions: API.GiftQuestion[];
  onAdded?: () => void;
  onRemoved?: () => void;
  onEdited?: () => void;
}> = ({ questions, onAdded, onRemoved, onEdited, quizId }) => {
  const [newQuestionValue, setNewQuestionValue] = useState('');
  const [newQuestionScore, setNewQuestionScore] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [questions]);

  const onNew = useCallback(() => {
    setLoading(true);

    createQuestion({
      topic_gift_quiz_id: quizId,
      value: newQuestionValue,
      score: newQuestionScore,
    })
      .catch((err) => console.log('err', err))
      .then(() => {
        setNewQuestionValue('');
        setNewQuestionScore(1);
        if (onAdded) {
          onAdded();
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [newQuestionValue, quizId]);
  return (
    <div>
      <List
        loading={loading}
        itemLayout="horizontal"
        dataSource={[...questions, 0]}
        renderItem={(item) => {
          if (Number.isInteger(item)) {
            return (
              <List.Item
                actions={[
                  <Button
                    loading={loading}
                    key={'new'}
                    size="small"
                    type="primary"
                    onClick={() => {
                      onNew();
                    }}
                  >
                    <FormattedMessage id="Questions.create" defaultMessage="Create Question" />
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Fragment>
                      <FormattedMessage id="Questions.new" defaultMessage="New Question" />
                      <br />
                      <Typography>
                        <FormattedMessage id="Questions.score" defaultMessage="Score" />:
                      </Typography>
                      <InputNumber
                        disabled={loading}
                        size="small"
                        value={newQuestionScore}
                        onChange={(v) => v && setNewQuestionScore(v)}
                      />
                    </Fragment>
                  }
                  description={
                    <Input.TextArea
                      value={newQuestionValue}
                      onChange={(e) => setNewQuestionValue(e.target.value)}
                    />
                  }
                />
              </List.Item>
            );
          }
          return (
            typeof item === 'object' && (
              <QuestionItemList
                onLoading={() => setLoading(true)}
                loading={loading}
                quizId={quizId}
                question={item}
                onRemoved={() => {
                  if (onRemoved) {
                    onRemoved();
                  }
                  setLoading(false);
                }}
                onEdited={() => {
                  if (onEdited) {
                    onEdited();
                  }
                  setLoading(false);
                }}
              />
            )
          );
        }}
      />
    </div>
  );
};
