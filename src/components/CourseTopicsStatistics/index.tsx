import React, { useMemo } from 'react';

import { TopicType } from '@/services/escola-lms/enums';
import { GiftQuizStatistics } from './GiftQuizStatistics';

interface TopicsGroupedByType {
  [TopicType.RichText]: API.TopicRichText[];
  [TopicType.OEmbed]: API.TopicOEmbed[];
  [TopicType.Audio]: API.TopicAudio[];
  [TopicType.Video]: API.TopicVideo[];
  [TopicType.H5P]: API.TopicH5P[];
  [TopicType.Image]: API.TopicImage[];
  [TopicType.PDF]: API.TopicPDF[];
  [TopicType.SCORM]: API.TopicScorm[];
  [TopicType.Project]: API.TopicProject[];
  [TopicType.GiftQuiz]: API.TopicQuiz[];
  [TopicType.Unselected]: API.TopicUnselected[];
}

interface Props {
  flatTopics: API.Topic[];
}

export const CourseTopicsStatistics: React.FC<Props> = ({ flatTopics }) => {
  const topicsGroupedByType = useMemo(
    () =>
      flatTopics.reduce<TopicsGroupedByType>(
        (acc, t) => ({ ...acc, [t.topicable_type]: [...acc[t.topicable_type], t] }),
        {
          [TopicType.RichText]: [],
          [TopicType.OEmbed]: [],
          [TopicType.Audio]: [],
          [TopicType.Video]: [],
          [TopicType.H5P]: [],
          [TopicType.Image]: [],
          [TopicType.PDF]: [],
          [TopicType.SCORM]: [],
          [TopicType.Project]: [],
          [TopicType.GiftQuiz]: [],
          [TopicType.Unselected]: [],
        },
      ),
    [flatTopics],
  );

  return (
    <>
      {topicsGroupedByType[TopicType.GiftQuiz].length > 0 && (
        <GiftQuizStatistics quizTopics={topicsGroupedByType[TopicType.GiftQuiz]} />
      )}
      {/* TODO add other topics statistics */}
    </>
  );
};
