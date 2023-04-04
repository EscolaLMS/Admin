import React from 'react';

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
  if (!answerObj) return <></>;

  if (isTextAnswer(answerObj.answer)) {
    return <pre>text answer</pre>;
  }

  if (isMultipleAnswer(answerObj.answer)) {
    return <pre>multiple answer</pre>;
  }

  if (isMatchingAnswer(answerObj.answer)) {
    return <pre>matching answer</pre>;
  }

  if (isNumericAnswer(answerObj.answer)) {
    return <pre>numeric answer</pre>;
  }

  if (isBooleanAnswer(answerObj.answer)) {
    return <pre>boolean answer</pre>;
  }

  return <pre>answer type not supported</pre>;
};

export default QuizReportQuestionAnswerDetails;
