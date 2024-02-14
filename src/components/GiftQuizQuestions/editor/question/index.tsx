import React from 'react';

import { QuestionType } from '@/services/escola-lms/enums';
import { GiftQuizQuestionEssayEditor } from './Essay';
import { GiftQuizQuestionMatchingEditor } from './Matching';
import { GiftQuizQuestionMultipleChoiceEditor } from './MultipleChoice';
import { GiftQuizQuestionNumericalEditor } from './Numerical';
import { GiftQuizQuestionShortEditor } from './ShortAnswers';
import { GiftQuizQuestionTrueFalseEditor } from './TrueFalse';

interface Props {
  type: QuestionType | undefined;
}

export const GiftQuizQuestion: React.FC<Props> = ({ type }) => {
  if (!type) return null;

  switch (type) {
    case QuestionType.MULTIPLE_CHOICE:
    case QuestionType.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS:
      return <GiftQuizQuestionMultipleChoiceEditor type={type} />;
    case QuestionType.TRUE_FALSE:
      return <GiftQuizQuestionTrueFalseEditor />;
    case QuestionType.SHORT_ANSWERS:
      return <GiftQuizQuestionShortEditor />;
    case QuestionType.MATCHING:
      return <GiftQuizQuestionMatchingEditor />;
    case QuestionType.NUMERICAL_QUESTION:
      return <GiftQuizQuestionNumericalEditor />;
    case QuestionType.ESSAY:
    case QuestionType.DESCRIPTION:
      return <GiftQuizQuestionEssayEditor />;
    default:
      return <pre>Unsupported type {type}</pre>;
  }
};
