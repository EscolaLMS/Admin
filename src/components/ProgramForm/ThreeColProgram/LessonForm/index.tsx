import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'umi';

import { Context } from '@/components/ProgramForm/Context';
import { getFormData } from '@/services/api';
import LessonForm from './form';
import type { StateLesson } from './types';

const getStateLesson = (lesson: API.Lesson): StateLesson => ({
  ...lesson,
  parent_id: lesson.parent_id ?? '',
});

export const Lesson: React.FC = () => {
  const { currentEditMode } = useContext(Context);

  const lesson =
    currentEditMode && currentEditMode.mode === 'lesson' && currentEditMode.value
      ? currentEditMode.value
      : {};
  const [state, setState] = useState<StateLesson>(getStateLesson(lesson));
  const [, setTopicList] = useState<API.Topic[]>([]);
  const [loading, setLoading] = useState(false);
  const { updateLesson, deleteLesson, cloneLesson } = useContext(Context);

  const params = useParams<{ course?: string; tab?: string }>();

  useEffect(() => {
    setState(getStateLesson(lesson));
    return lesson?.topics && setTopicList(lesson.topics);
  }, [lesson]);

  const handleSave = useCallback(() => {
    setLoading(true);

    const formData = getFormData({
      course_id: lesson?.course_id || params.course,
      ...state,
      active: state.active ? 1 : 0,
      parent_lesson_id: state.parent_id,
    });

    if (updateLesson && state.id) {
      return updateLesson(state.id, formData)
        .then(() => setLoading(false))
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
    return Promise.resolve();
  }, [state, lesson?.course_id, updateLesson]);

  const handleDelete = useCallback(() => {
    if (state.id && deleteLesson) {
      deleteLesson(state.id);
    }
    return Promise.resolve();
  }, [deleteLesson, state.id]);

  const handleClone = useCallback(() => {
    return state.id && cloneLesson?.(state.id);
  }, [cloneLesson, state.id]);

  return (
    <LessonForm
      loading={loading}
      lesson={state}
      initialValues={state}
      onDelete={handleDelete}
      onFinish={handleSave}
      onClone={handleClone}
      onValuesChange={(changedValues) => {
        setState((prevState) => ({
          ...prevState,
          ...changedValues,
        }));
      }}
    />
  );
};

export default Lesson;
