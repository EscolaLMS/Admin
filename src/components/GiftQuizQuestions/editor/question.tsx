import React from 'react';

import { QuestionType } from '@/services/escola-lms/enums';
import { GiftQuizQuestionMultipleChoiceEditor } from './multiplechoice';
import { GiftQuizQuestionTrueFalseEditor } from './true_false';
import { GiftQuizQuestionShortEditor } from './short_answers';
import { GiftQuizQuestionMatchingEditor } from './matching';

interface Props {
  type: QuestionType | undefined;
}

export const GiftQuizQuestion: React.FC<Props> = ({ type }) => {
  if (!type) return null;

  switch (type) {
    case QuestionType.MULTIPLE_CHOICE:
    case QuestionType.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS:
      return <GiftQuizQuestionMultipleChoiceEditor type={type} />;
    case QuestionType.TRUE_FALSE: {
      return <GiftQuizQuestionTrueFalseEditor />;
    }
    case QuestionType.SHORT_ANSWERS: {
      return <GiftQuizQuestionShortEditor />;
    }
    case QuestionType.MATCHING: {
      return <GiftQuizQuestionMatchingEditor />;
    }
    case QuestionType.NUMERICAL_QUESTION: {
      return <pre>{type}</pre>;
    }
    case QuestionType.ESSAY: {
      return <pre>{type}</pre>;
    }
    case QuestionType.DESCRIPTION: {
      return <pre>{type}</pre>;
    }
  }

  return <pre>Unsupported type {type}</pre>;
};
