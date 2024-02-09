import { EditOutlined } from '@ant-design/icons';
import { Button, Descriptions, Space, Tooltip, Typography } from 'antd';
import React, { useCallback, useState } from 'react';
import { FormattedMessage } from 'umi';

import { QuizReportEditAnswerScore } from './QuizReportEditAnswerScore';

type OpenEditScoreFactory = (answer: API.AttemptAnswer) => () => void;

interface DetailsBaseTemplateProps {
  children: React.ReactNode;
  openEditScoreFactory: OpenEditScoreFactory;
  answer: API.AttemptAnswer;
}

const DetailsBaseTemplate: React.FC<DetailsBaseTemplateProps> = ({
  children,
  openEditScoreFactory,
  answer,
}) => (
  <Descriptions column={2} labelStyle={{ fontWeight: 'bold' }}>
    <Descriptions.Item
      label={
        <Space align="center">
          <FormattedMessage id="student_score" defaultMessage="Student score" />
          <Tooltip title={<FormattedMessage id="edit_score" />}>
            <Button
              type="text"
              style={{ width: 22, height: 22 }}
              icon={<EditOutlined />}
              onClick={openEditScoreFactory(answer)}
            />
          </Tooltip>
        </Space>
      }
    >
      {answer.score}
    </Descriptions.Item>
    <Descriptions.Item
      contentStyle={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}
      label={<FormattedMessage id="student_answer" defaultMessage="Student answer" />}
    >
      {children}
    </Descriptions.Item>
  </Descriptions>
);

function isTextAnswer(answer: API.GiftQuizAnswer): answer is API.TextAnswer {
  return typeof (answer as API.TextAnswer)?.text === 'string';
}

function isMultipleAnswer(answer: API.GiftQuizAnswer): answer is API.MultipleAnswer {
  return Array.isArray((answer as API.MultipleAnswer)?.multiple);
}

function isMatchingAnswer(answer: API.GiftQuizAnswer): answer is API.MatchingAnswer {
  return typeof (answer as API.MatchingAnswer)?.matching === 'object';
}

function isNumericAnswer(answer: API.GiftQuizAnswer): answer is API.NumericAnswer {
  return typeof (answer as API.NumericAnswer)?.numeric === 'number';
}

function isBooleanAnswer(answer: API.GiftQuizAnswer): answer is API.BooleanAnswer {
  return typeof (answer as API.BooleanAnswer)?.bool === 'boolean';
}

interface QuizReportQuestionAnswerDetailsContentProps {
  answerObj?: API.AttemptAnswer;
  openEditScoreFactory: OpenEditScoreFactory;
}

const QuizReportQuestionAnswerDetailsContent: React.FC<
  QuizReportQuestionAnswerDetailsContentProps
> = ({ answerObj, openEditScoreFactory }) => {
  if (!answerObj)
    return (
      <Typography.Paragraph style={{ fontStyle: 'italic' }}>
        <FormattedMessage
          id="student_didnt_answer"
          defaultMessage="Student didn't answer this question"
        />
      </Typography.Paragraph>
    );

  if (isTextAnswer(answerObj.answer)) {
    return (
      <DetailsBaseTemplate openEditScoreFactory={openEditScoreFactory} answer={answerObj}>
        {answerObj.answer.text}
      </DetailsBaseTemplate>
    );
  }

  if (isMultipleAnswer(answerObj.answer)) {
    return (
      <DetailsBaseTemplate openEditScoreFactory={openEditScoreFactory} answer={answerObj}>
        {answerObj.answer.multiple.join(', ')}
      </DetailsBaseTemplate>
    );
  }

  if (isMatchingAnswer(answerObj.answer)) {
    const answersArr = Object.entries(answerObj.answer.matching).map(
      ([key, val]) => `${key} - ${val ?? ''}`,
    );

    return (
      <DetailsBaseTemplate openEditScoreFactory={openEditScoreFactory} answer={answerObj}>
        {answersArr.map((str) => (
          <Typography.Text style={{ width: 'max-content' }} key={str}>
            {str}
          </Typography.Text>
        ))}
      </DetailsBaseTemplate>
    );
  }

  if (isNumericAnswer(answerObj.answer)) {
    return (
      <DetailsBaseTemplate openEditScoreFactory={openEditScoreFactory} answer={answerObj}>
        {answerObj.answer.numeric}
      </DetailsBaseTemplate>
    );
  }

  if (isBooleanAnswer(answerObj.answer)) {
    return (
      <DetailsBaseTemplate openEditScoreFactory={openEditScoreFactory} answer={answerObj}>
        {answerObj.answer.bool ? (
          <FormattedMessage id="true_answer" defaultMessage="True" />
        ) : (
          <FormattedMessage id="false_answer" defaultMessage="False" />
        )}
      </DetailsBaseTemplate>
    );
  }

  return <pre>answer type not supported</pre>;
};

interface QuizReportQuestionAnswerDetailsProps {
  refreshData: () => void;
  answerObj?: API.AttemptAnswer;
}

const QuizReportQuestionAnswerDetails: React.FC<QuizReportQuestionAnswerDetailsProps> = ({
  refreshData,
  ...props
}) => {
  const [editScoreModal, setEditScoreModal] = useState<API.AttemptAnswer>();
  const openEditScoreFactory = useCallback(
    (answer: API.AttemptAnswer) => () => setEditScoreModal(answer),
    [],
  );
  const closeEditScore = useCallback(() => setEditScoreModal(undefined), []);

  const onEditAnswerScoreSuccess = useCallback(() => {
    refreshData();
    closeEditScore();
  }, []);

  return (
    <>
      <QuizReportQuestionAnswerDetailsContent
        {...props}
        openEditScoreFactory={openEditScoreFactory}
      />
      <QuizReportEditAnswerScore
        answer={editScoreModal}
        onSuccess={onEditAnswerScoreSuccess}
        onClose={closeEditScore}
      />
    </>
  );
};

export default QuizReportQuestionAnswerDetails;
