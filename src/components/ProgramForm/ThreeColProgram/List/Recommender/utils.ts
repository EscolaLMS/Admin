import { useEffect, useState } from 'react';
import { getCourseRecommender, getExerciseRecommender } from '@/services/escola-lms/recommender';

export type RecommenderSimpleTopicType = 'OEmbed' | 'PDF' | 'Video' | 'RichText' | 'Image' | 'H5P';

export const useCourseRecommender = (courseId: number) => {
  const [course, setCourse] = useState<API.Recommender>();

  useEffect(() => {
    getCourseRecommender(courseId).then((res) => res.success && setCourse(res.data));
  }, [courseId]);

  return course;
};

export const useExerciseRecommender = (lessonId: number) => {
  const [exercise, setExercise] = useState<API.RecommenderExercise>();

  useEffect(() => {
    getExerciseRecommender(lessonId).then((res) => res.success && setExercise(res.data));
  }, [lessonId]);

  return exercise;
};

export const getTopicType = (topic: API.RecommenderTopicType): RecommenderSimpleTopicType =>
  topic.includes('H5P') ? 'H5P' : topic;

export const createText = (topic: API.RecommenderTopicType) =>
  topic?.includes('.') && topic?.split('.').join(' ');

export const formatRecommenderProbability = (probability: number): number =>
  Math.floor(probability * 100);
