import React, { useCallback, useContext } from 'react';
import { FormattedMessage, history } from 'umi';
import { Context } from '../../../Context';
import { RecommenderType, TopicType } from '@/services/escola-lms/enums';
import { ExerciseRecommender } from './ExerciseRecommender';
import { CourseRecommender } from './CourseRecommender';
import { RecommenderIcon } from '@/icons';
import { RecommenderPopoverInfo } from './RecommenderPopoverInfo';
import { Spin } from 'antd';
import { getTopicType, useCourseRecommender, useExerciseRecommender } from './utils';
import { InfoRecommender } from './InfoRecommender';

export const Recommender: React.FC<{
  courseId: number;
  lessonId: number;
  recommenderType?: RecommenderType;
}> = ({ courseId, lessonId, recommenderType = RecommenderType.Exercise }) => {
  const { addNewTopic } = useContext(Context);
  const course = useCourseRecommender(courseId);
  const exercise = useExerciseRecommender(lessonId);

  const onTopicCreate = useCallback(
    (lesson_id: number, topic_type: TopicType) => {
      if (addNewTopic) {
        const newTopic = addNewTopic(lesson_id, topic_type);
        history.push(`/courses/list/${courseId}/program/?topic=${newTopic.id}`);
      }
    },
    [addNewTopic],
  );

  const getRecommender = (type: RecommenderType) => {
    switch (type) {
      case RecommenderType.Info:
        return <InfoRecommender />;
      case RecommenderType.Course:
        return course && <CourseRecommender recommendedData={course} />;
      case RecommenderType.Exercise:
        return (
          exercise && (
            <ExerciseRecommender
              createTopic={() =>
                onTopicCreate(lessonId, TopicType[getTopicType(exercise?.topic_type)])
              }
              recommendedData={exercise}
            />
          )
        );
      default:
        return <FormattedMessage id="recommender.no_recommendation" />;
    }
  };

  const isLoading =
    (recommenderType === RecommenderType.Exercise && !exercise) ||
    (recommenderType === RecommenderType.Course && !course);

  return (
    <div className="recommender">
      <RecommenderIcon style={{ marginTop: '4px' }} />
      <div>
        <h3 className="recommender__title">
          <FormattedMessage id="recommender.title" />
        </h3>
        {isLoading && <Spin />}
        {getRecommender(
          recommenderType === RecommenderType.Course &&
            course?.probability &&
            course?.probability > -0.0116
            ? RecommenderType.Exercise
            : recommenderType,
        )}
      </div>
      <RecommenderPopoverInfo />
    </div>
  );
};
