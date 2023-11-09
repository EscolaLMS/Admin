import React, { useCallback, useContext, useEffect, useState } from 'react';
import { getCourseRecommender, getExerciseRecommender } from '@/services/escola-lms/recommender';
import { FormattedMessage, history } from 'umi';
import { Context } from '../../../Context';
import { RecommenderType, TopicType } from '@/services/escola-lms/enums';

import { ExerciseRecommender } from './ExerciseRecommender';
import { CourseRecommender } from './CourseRecommender';
import { RecommenderIcon } from '@/icons';
import { RecommenderInfo } from './RecommenderInfo';
import { Spin } from 'antd';

export const Recommender: React.FC<{
  courseId: number;
  lessonId: number;
  recommenderType?: RecommenderType;
}> = ({ courseId, lessonId, recommenderType = RecommenderType.Exercise }) => {
  const [course, setCourse] = useState<API.Recommender>();
  const [excercise, setExcercise] = useState<API.RecommenderExercise>();
  const { addNewTopic } = useContext(Context);

  const onTopicCreate = useCallback(
    (lesson_id: number, topic_type: TopicType) => {
      if (addNewTopic) {
        const newTopic = addNewTopic(lesson_id, topic_type);
        history.push(`/courses/list/${courseId}/program/?topic=${newTopic.id}`);
      }
    },
    [addNewTopic],
  );

  const getTopicType = (topic: API.RecommenderTopicType) => (topic.includes('H5P') ? 'H5P' : topic);

  const getRecommender = (type: RecommenderType) => {
    switch (type) {
      case RecommenderType.Course:
        return course && <CourseRecommender recommendedData={course} />;
      case RecommenderType.Exercise:
        return (
          excercise && (
            <ExerciseRecommender
              createTopic={() =>
                onTopicCreate(lessonId, TopicType[getTopicType(excercise?.topic_type)])
              }
              recommendedData={excercise}
            />
          )
        );
      default:
        return <FormattedMessage id="no_recommendation" />;
    }
  };

  useEffect(() => {
    getCourseRecommender(courseId).then((res) => res.success && setCourse(res.data));
    getExerciseRecommender(lessonId).then((res) => res.success && setExcercise(res.data));
  }, [courseId, lessonId]);

  return (
    <div className="recommender">
      <RecommenderIcon style={{ marginTop: '4px' }} />
      <div>
        <h3 className="recommender__title">
          <FormattedMessage id="recommender.title" />
        </h3>
        {!excercise && <Spin />}
        {getRecommender(recommenderType)}
      </div>
      <RecommenderInfo />
    </div>
  );
};
