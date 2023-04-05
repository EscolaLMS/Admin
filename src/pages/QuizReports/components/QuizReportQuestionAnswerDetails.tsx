import React from 'react';
import { FormattedMessage } from 'umi';
import { Descriptions, Typography } from 'antd';

interface Props {
  answerObj?: API.AttemptAnswer;
}

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

const QuizReportQuestionAnswerDetails: React.FC<Props> = ({ answerObj }) => {
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
      <Descriptions column={2} labelStyle={{ fontWeight: 'bold' }}>
        <Descriptions.Item
          label={<FormattedMessage id="student_score" defaultMessage="Student score" />}
        >
          {answerObj.score}
        </Descriptions.Item>
        <Descriptions.Item
          label={<FormattedMessage id="student_answer" defaultMessage="Student answer" />}
        >
          {answerObj.answer.text}
        </Descriptions.Item>
      </Descriptions>
    );
  }

  if (isMultipleAnswer(answerObj.answer)) {
    return (
      <Descriptions column={2} labelStyle={{ fontWeight: 'bold' }}>
        <Descriptions.Item
          label={<FormattedMessage id="student_score" defaultMessage="Student score" />}
        >
          {answerObj.score}
        </Descriptions.Item>
        <Descriptions.Item
          label={<FormattedMessage id="student_answer" defaultMessage="Student answer" />}
        >
          {answerObj.answer.multiple.join(', ')}
        </Descriptions.Item>
      </Descriptions>
    );
  }

  if (isMatchingAnswer(answerObj.answer)) {
    const answersArr = Object.entries(answerObj.answer.matching).map(
      ([key, val]) => `${key} - ${val ?? ''}`,
    );

    return (
      <Descriptions column={2} labelStyle={{ fontWeight: 'bold' }}>
        <Descriptions.Item
          label={<FormattedMessage id="student_score" defaultMessage="Student score" />}
        >
          {answerObj.score}
        </Descriptions.Item>
        <Descriptions.Item
          contentStyle={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}
          label={<FormattedMessage id="student_answer" defaultMessage="Student answer" />}
        >
          {answersArr.map((str) => (
            <Typography.Text style={{ width: 'max-content' }} key={str}>
              {str}
            </Typography.Text>
          ))}
        </Descriptions.Item>
      </Descriptions>
    );
  }

  if (isNumericAnswer(answerObj.answer)) {
    return (
      <Descriptions column={2} labelStyle={{ fontWeight: 'bold' }}>
        <Descriptions.Item
          label={<FormattedMessage id="student_score" defaultMessage="Student score" />}
        >
          {answerObj.score}
        </Descriptions.Item>
        <Descriptions.Item
          label={<FormattedMessage id="student_answer" defaultMessage="Student answer" />}
        >
          {answerObj.answer.numeric}
        </Descriptions.Item>
      </Descriptions>
    );
  }

  if (isBooleanAnswer(answerObj.answer)) {
    return (
      <Descriptions column={2} labelStyle={{ fontWeight: 'bold' }}>
        <Descriptions.Item
          label={<FormattedMessage id="student_score" defaultMessage="Student score" />}
        >
          {answerObj.score}
        </Descriptions.Item>
        <Descriptions.Item
          label={<FormattedMessage id="student_answer" defaultMessage="Student answer" />}
        >
          {answerObj.answer.bool ? (
            <FormattedMessage id="true_answer" defaultMessage="True" />
          ) : (
            <FormattedMessage id="false_answer" defaultMessage="False" />
          )}
        </Descriptions.Item>
      </Descriptions>
    );
  }

  return <pre>answer type not supported</pre>;
};

export default QuizReportQuestionAnswerDetails;
