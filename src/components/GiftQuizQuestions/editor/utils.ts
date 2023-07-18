import { QuestionType } from '@/services/escola-lms/enums';
import type {
  DescriptionFormData,
  EssayFormData,
  GiftQuizFormData,
  MatchingFormData,
  MultipleChoiceFormData,
  MultipleChoiceWithMultipleRightAnswersFormData,
  NumericalFormData,
  ShortAnswersFormData,
  TrueFalseFormData,
} from './types';

const parseMultipleChoice = ({ question, answers }: MultipleChoiceFormData): string => {
  if (answers.length === 0) return `${question} { }`;

  let giftString = `${question} {\n`;

  for (const { isCorrect, value } of answers) {
    const sign = isCorrect ? '=' : '~';

    giftString += `${sign}${value}\n`;
  }

  giftString += '}';

  return giftString.trim();
};

const parseMultipleChoiceWithMultipleRightAnswers = ({
  question,
  answers,
}: MultipleChoiceWithMultipleRightAnswersFormData): string => {
  if (answers.length == 0) return `${question} { }`;

  let giftString = `${question} {\n`;

  for (const { value, weight } of answers) {
    giftString += `~%${weight}%${value}\n`;
  }

  giftString += '}';

  return giftString.trim();
};

const parseTrueFalse = ({ question, isCorrect }: TrueFalseFormData): string =>
  `${question} {${isCorrect ? 'T' : 'F'}}`;

const parseShortAnswers = ({ question, answers }: ShortAnswersFormData): string => {
  if (answers.length === 0) return `${question} { }`;

  let giftString = `${question} {\n`;

  for (const { value } of answers) {
    giftString += `=${value}\n`;
  }

  giftString += '}';

  return giftString.trim();
};

const parseMatching = ({ question, answers }: MatchingFormData): string => {
  if (answers.length === 0) return `${question} { }`;

  let giftString = `${question} {\n`;

  for (const { firstOfPair, secondOfPair } of answers) {
    giftString += `=${firstOfPair} -> ${secondOfPair}\n`;
  }

  giftString += '}';

  return giftString.trim();
};

const parseNumerical = ({ question, answer, errorMargin }: NumericalFormData): string =>
  `${question} {#${answer}:${errorMargin}}`;

const parseEssay = ({ question }: EssayFormData): string => `${question} {}`;

const parseDescription = ({ question }: DescriptionFormData): string => question;

export const parseToGIFT = (formData: GiftQuizFormData): string => {
  switch (formData.type) {
    case QuestionType.MULTIPLE_CHOICE:
      return parseMultipleChoice(formData);
    case QuestionType.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS:
      return parseMultipleChoiceWithMultipleRightAnswers(formData);
    case QuestionType.TRUE_FALSE:
      return parseTrueFalse(formData);
    case QuestionType.SHORT_ANSWERS:
      return parseShortAnswers(formData);
    case QuestionType.MATCHING:
      return parseMatching(formData);
    case QuestionType.NUMERICAL_QUESTION:
      return parseNumerical(formData);
    case QuestionType.ESSAY:
      return parseEssay(formData);
    case QuestionType.DESCRIPTION:
      return parseDescription(formData);
    default:
      throw new Error(`Unsupported type: ${(formData as GiftQuizFormData).type}`);
  }
};

export const parseToFormData = (gift: string | undefined): GiftQuizFormData | undefined => {
  if (!gift) return;

  throw new Error('Implement it!');
};
