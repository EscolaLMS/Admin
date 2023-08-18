import { parse } from '@escolalms/gift-pegjs';
import type {
  Description,
  Essay,
  Matching,
  Numerical,
  ShortAnswer,
  TrueFalse,
  MultipleChoice,
} from '@escolalms/gift-pegjs';

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

const escapeQuestionSpecialChars = (inputString: string): string => {
  const charsToEscape = ['~', '=', '#', '{', '}', ':'];
  let escapedString = '';

  for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString[i];
    if (charsToEscape.includes(currentChar)) {
      escapedString += `\\${currentChar}`;
    } else {
      escapedString += currentChar;
    }
  }

  return escapedString;
};

const parseMultipleChoice = ({ question, answers }: MultipleChoiceFormData): string => {
  if (answers.length === 0) return `${question}{}`;

  let giftString = `${question}{`;

  for (const { isCorrect, value } of answers) {
    const sign = isCorrect ? '=' : '~';

    giftString += `${sign}${value}`;
  }

  giftString += '}';

  return giftString.trim();
};

const parseMultipleChoiceWithMultipleRightAnswers = ({
  question,
  answers,
}: MultipleChoiceWithMultipleRightAnswersFormData): string => {
  if (answers.length == 0) return `${question}{}`;

  let giftString = `${question}{`;

  for (const { value, weight } of answers) {
    giftString += `~%${weight}%${value}`;
  }

  giftString += '}';

  return giftString.trim();
};

const parseTrueFalse = ({ question, isCorrect }: TrueFalseFormData): string =>
  `${question}{${isCorrect ? 'T' : 'F'}}`;

const parseShortAnswers = ({ question, answers }: ShortAnswersFormData): string => {
  if (answers.length === 0) return `${question}{}`;

  let giftString = `${question}{`;

  for (const { value } of answers) {
    giftString += `=${value}`;
  }

  giftString += '}';

  return giftString.trim();
};

const parseMatching = ({ question, answers }: MatchingFormData): string => {
  if (answers.length === 0) return `${question}{}`;

  let giftString = `${question}{`;

  for (const { firstOfPair, secondOfPair } of answers) {
    giftString += `=${firstOfPair}->${secondOfPair}`;
  }

  giftString += '}';

  return giftString.trim();
};

const parseNumerical = ({ question, answer, errorMargin }: NumericalFormData): string =>
  `${question}{#${answer}:${errorMargin}}`;

const parseEssay = ({ question }: EssayFormData): string => `${question}{}`;

const parseDescription = ({ question }: DescriptionFormData): string => question;

export const parseToGIFT = ({ question, ...formData }: GiftQuizFormData): string => {
  const safeFormData = { question: escapeQuestionSpecialChars(question), ...formData };

  switch (safeFormData.type) {
    case QuestionType.MULTIPLE_CHOICE:
      return parseMultipleChoice(safeFormData);
    case QuestionType.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS:
      return parseMultipleChoiceWithMultipleRightAnswers(safeFormData);
    case QuestionType.TRUE_FALSE:
      return parseTrueFalse(safeFormData);
    case QuestionType.SHORT_ANSWERS:
      return parseShortAnswers(safeFormData);
    case QuestionType.MATCHING:
      return parseMatching(safeFormData);
    case QuestionType.NUMERICAL_QUESTION:
      return parseNumerical(safeFormData);
    case QuestionType.ESSAY:
      return parseEssay(safeFormData);
    case QuestionType.DESCRIPTION:
      return parseDescription(safeFormData);
    default:
      throw new Error(`Unsupported type: ${(safeFormData as GiftQuizFormData).type}`);
  }
};

const parseMultipleChoiceToFormData = (
  parsedValue: MultipleChoice,
  { type, score, category_id }: API.QuizQuestion,
): MultipleChoiceFormData | MultipleChoiceWithMultipleRightAnswersFormData => {
  const question = parsedValue?.stem.text;

  const isMultipleChoice = parsedValue.choices.every(({ weight }) => weight === null);

  if (isMultipleChoice) {
    const answers: MultipleChoiceFormData['answers'] = parsedValue.choices.map(
      ({ isCorrect, text }) => ({
        isCorrect,
        value: text.text,
      }),
    );

    return { type, score, category_id, question, answers };
  }

  const answers = parsedValue.choices.reduce<
    MultipleChoiceWithMultipleRightAnswersFormData['answers']
  >(
    (acc, { weight, text }) => (weight !== null ? [...acc, { weight, value: text.text }] : acc),
    [],
  );

  return { type, score, category_id, question, answers };
};

const parseTrueFalseToFormData = (
  parsedValue: TrueFalse,
  { type, score, category_id }: API.QuizQuestion,
): TrueFalseFormData => {
  const question = parsedValue?.stem.text;
  const isCorrect = parsedValue.isTrue;

  return { type, score, category_id, question, isCorrect };
};

const parseShortAnswersToFormData = (
  parsedValue: ShortAnswer,
  { type, score, category_id }: API.QuizQuestion,
): ShortAnswersFormData => {
  const question = parsedValue?.stem.text;

  const answers: ShortAnswersFormData['answers'] = parsedValue.choices.map(({ text }) => ({
    value: text.text,
  }));

  return { type, score, category_id, question, answers };
};

const parseMatchingToFormData = (
  parsedValue: Matching,
  { type, score, category_id }: API.QuizQuestion,
): MatchingFormData => {
  const question = parsedValue?.stem.text;
  const answers: MatchingFormData['answers'] = parsedValue.matchPairs.map(
    ({ subquestion, subanswer }) => ({ firstOfPair: subquestion.text, secondOfPair: subanswer }),
  );

  return { type, score, category_id, question, answers };
};

const parseNumericalToFormData = (
  parsedValue: Numerical,
  { type, score, category_id }: API.QuizQuestion,
): NumericalFormData => {
  const question = parsedValue?.stem.text;

  // TODO
  if (Array.isArray(parsedValue?.choices)) {
    throw new Error('Unsupported choices type: array');
  }

  const answer = parsedValue?.choices.number;
  const errorMargin = parsedValue?.choices.range;

  if (answer === undefined || errorMargin === undefined) {
    throw new Error(`Value undefined - answer: ${answer} errorMargin: ${errorMargin}`);
  }

  return { type, score, category_id, question, answer, errorMargin };
};

const parseDescriptionEssayToFormData = (
  parsedValue: Description | Essay,
  { type, score, category_id }: API.QuizQuestion,
): DescriptionFormData | EssayFormData => {
  const question = parsedValue?.stem.text;

  return { type, score, category_id, question };
};

export function parseToFormData(
  questionBase: API.QuizQuestion | undefined,
): GiftQuizFormData | undefined {
  if (!questionBase) return;

  try {
    const [parsedValue] = parse(questionBase.value);

    switch (parsedValue.type) {
      case 'MC':
        return parseMultipleChoiceToFormData(parsedValue, questionBase);
      case 'TF':
        return parseTrueFalseToFormData(parsedValue, questionBase);
      case 'Short':
        return parseShortAnswersToFormData(parsedValue, questionBase);
      case 'Matching':
        return parseMatchingToFormData(parsedValue, questionBase);
      case 'Numerical':
        return parseNumericalToFormData(parsedValue, questionBase);
      case 'Description':
      case 'Essay':
        return parseDescriptionEssayToFormData(parsedValue, questionBase);
      default:
        throw new Error(`Unsupported type: ${parsedValue?.type}`);
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
