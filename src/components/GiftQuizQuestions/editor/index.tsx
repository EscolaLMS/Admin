import { Input } from 'antd';

import { GiftQuizQuestionMultipleChoiceEditor } from './multiplechoice';
import { GiftQuizQuestionEsseyEditor } from './essey';
import { GiftQuizQuestionTrueFalseEditor } from './true_false';
import { GiftQuizQuestionMatchingEditor } from './matching';
import { GiftQuizQuestionDescriptionEditor } from './description';
import { GiftQuizQuestionNumericalEditor } from './numerical';
import { GiftQuizQuestionShortEditor } from './short_answers';

import { QuestionType } from '@/services/escola-lms/enums';

export const GiftQuizQuestionEditor: React.FC<{
  type: API.GiftQuestion['type'];
  value: string;
  onChange: (value: string) => void;
  loading?: boolean;
}> = ({ type, value, onChange, loading = false }) => {
  switch (type) {
    case QuestionType.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS:
    case QuestionType.MULTIPLE_CHOICE:
      return <GiftQuizQuestionMultipleChoiceEditor value={value} onChange={(v) => onChange(v)} />;

    case QuestionType.ESSAY:
      return <GiftQuizQuestionEsseyEditor value={value} onChange={(v) => onChange(v)} />;

    case QuestionType.DESCRIPTION:
      return <GiftQuizQuestionDescriptionEditor value={value} onChange={(v) => onChange(v)} />;

    case QuestionType.TRUE_FALSE:
      return <GiftQuizQuestionTrueFalseEditor value={value} onChange={(v) => onChange(v)} />;

    case QuestionType.MATCHING:
      return <GiftQuizQuestionMatchingEditor value={value} onChange={(v) => onChange(v)} />;

    case QuestionType.NUMERICAL_QUESTION:
      return <GiftQuizQuestionNumericalEditor value={value} onChange={(v) => onChange(v)} />;

    case QuestionType.SHORT_ANSWERS:
      return <GiftQuizQuestionShortEditor value={value} onChange={(v) => onChange(v)} />;

    default:
      return (
        <Input.TextArea
          disabled={loading}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
  }
};
