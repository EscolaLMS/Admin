import React, { useEffect, useLayoutEffect } from 'react';
import { Row } from 'antd';
import { FormattedMessage } from 'umi';
import { GiftQuestions } from '@/components/GiftQuizQuestions';

export const GiftQuiz: React.FC<{
  topicable: API.TopicQuiz['topicable'];
  onAdded: () => void;
  onRemoved: () => void;
}> = ({ topicable, onAdded, onRemoved }) => {
  console.log('t', topicable);
  return (
    <GiftQuestions
      questions={topicable.questions}
      quizId={topicable.id}
      onAdded={onAdded}
      onRemoved={onRemoved}
    />
  );
};

export default GiftQuiz;
