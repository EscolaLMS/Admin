import React, { useCallback, useEffect, useState, useContext } from 'react';
import { Context } from '@/components/ProgramForm/Context';
import { getFormData } from '@/services/api';
import { useParams } from 'umi';
import LessonForm from './form';

export const Lesson: React.FC<{
  // TODO refactor this as you shouldn't pass this but fetch from `{ currentEditMode } = useContext(Context);`
  lesson: API.Lesson;
  courseLessons: API.Lesson[];
  courseId?: number;
}> = ({ lesson }) => {
  const [state, setState] = useState<API.Lesson>(lesson);
  const [, setTopicList] = useState<API.Topic[]>([]);
  const [loading, setLoading] = useState(false);
  const { updateLesson, deleteLesson } = useContext(Context);

  const params = useParams<{ course?: string; tab?: string }>();

  useEffect(() => {
    setState(lesson);
    return lesson.topics && setTopicList(lesson.topics);
  }, [lesson]);

  const handleSave = useCallback(() => {
    setLoading(true);

    const formData = getFormData({
      course_id: lesson.course_id || params.course,
      ...state,
      order: 0,
      active: state.active ? 1 : 0,
    });

    if (updateLesson && state.id) {
      return updateLesson(state.id, formData)
        .then(() => setLoading(false))
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
    return Promise.resolve();
  }, [state, lesson.course_id, updateLesson]);

  const handleDelete = useCallback(() => {
    if (state.id && deleteLesson) {
      deleteLesson(state.id);
    }
    return Promise.resolve();
  }, [deleteLesson, state.id]);

  return (
    <React.Fragment>
      <LessonForm
        loading={loading}
        lesson={state}
        initialValues={state}
        onDelete={handleDelete}
        onFinish={handleSave}
        onValuesChange={(changedValues) => {
          setState((prevState) => ({
            ...prevState,
            ...changedValues,
          }));
        }}
      />
    </React.Fragment>
  );
};

export default Lesson;
