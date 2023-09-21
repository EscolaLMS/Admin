import type { QuestionType } from '@/services/escola-lms/enums';

type BaseFormData = {
  type: QuestionType;
  question: string;
  score: number;
  category_id?: API.Nullable<number>;
};

export type MultipleChoiceFormData = BaseFormData & {
  type: QuestionType.MULTIPLE_CHOICE;
  answers: { isCorrect: boolean; value: string; feedback?: string }[];
};

export type MultipleChoiceWithMultipleRightAnswersFormData = BaseFormData & {
  type: QuestionType.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS;
  answers: { value: string; weight: number; feedback?: string }[];
};

export type TrueFalseFormData = BaseFormData & {
  type: QuestionType.TRUE_FALSE;
  isCorrect: boolean;
};

export type ShortAnswersFormData = BaseFormData & {
  type: QuestionType.SHORT_ANSWERS;
  answers: { value: string; feedback?: string }[];
};

export type MatchingFormData = BaseFormData & {
  type: QuestionType.MATCHING;
  answers: { firstOfPair: string; secondOfPair: string }[];
};

export type NumericalFormData = BaseFormData & {
  type: QuestionType.NUMERICAL_QUESTION;
  answer: number;
  errorMargin: number;
};

export type EssayFormData = BaseFormData & {
  type: QuestionType.ESSAY;
};

export type DescriptionFormData = BaseFormData & {
  type: QuestionType.DESCRIPTION;
};

export type GiftQuizFormData =
  | MultipleChoiceFormData
  | MultipleChoiceWithMultipleRightAnswersFormData
  | TrueFalseFormData
  | ShortAnswersFormData
  | MatchingFormData
  | NumericalFormData
  | EssayFormData
  | DescriptionFormData;

export type QuizQuestionSubmitData = Omit<API.CreateQuizQuestion, 'topic_gift_quiz_id'>;
