import React from 'react';
import { Descriptions } from 'antd';
import { FormattedMessage } from 'umi';

import { QuestionType } from '@/services/escola-lms/enums';

interface Props {
  question: API.AttemptGiftQuestion;
}

const ANSWER_TYPES = [
  QuestionType.MULTIPLE_CHOICE,
  QuestionType.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS,
];

const QuizReportQuestionDetails: React.FC<Props> = ({ question }) => (
  <Descriptions column={2} labelStyle={{ fontWeight: 'bold' }}>
    <Descriptions.Item label={<FormattedMessage id="ID" defaultMessage="ID" />}>
      {question.id}
    </Descriptions.Item>
    <Descriptions.Item label={<FormattedMessage id="type" defaultMessage="Type" />}>
      <FormattedMessage id={`gift_type.${question.type}`} />
    </Descriptions.Item>
    {question.title && (
      <Descriptions.Item label={<FormattedMessage id="title" defaultMessage="Title" />}>
        {question.title}
      </Descriptions.Item>
    )}
    <Descriptions.Item
      label={<FormattedMessage id="possible_score" defaultMessage="Possible score" />}
    >
      {question.score}
    </Descriptions.Item>
    {ANSWER_TYPES.includes(question.type) && (
      <Descriptions.Item
        label={<FormattedMessage id="possible_answers" defaultMessage="Possible answers" />}
      >
        {(
          question as
            | API.QuizQuestion_MultipleChoiceWithMultipleRightAnswers
            | API.QuizQuestion_MultipleChoice
        ).options.answers.join(', ')}
      </Descriptions.Item>
    )}
    {question.type === QuestionType.TRUE_FALSE && (
      <Descriptions.Item
        label={<FormattedMessage id="possible_answers" defaultMessage="Possible answers" />}
      >
        <FormattedMessage id="possible_true_false" defaultMessage="True, False" />
      </Descriptions.Item>
    )}
    {question.type === QuestionType.MATCHING && (
      <>
        <Descriptions.Item
          label={<FormattedMessage id="matching_questions" defaultMessage="Matching questions" />}
        >
          {(question as API.QuizQuestion_Matching).options.sub_questions.join(', ')}
        </Descriptions.Item>
        <Descriptions.Item
          label={<FormattedMessage id="matching_answers" defaultMessage="Matching answers" />}
        >
          {(question as API.QuizQuestion_Matching).options.sub_answers.join(', ')}
        </Descriptions.Item>
      </>
    )}
  </Descriptions>
);

export default QuizReportQuestionDetails;
