import React, { useCallback, useEffect, useState, useContext } from 'react';
import { Context } from '@/components/ProgramForm/Context';
import { getFormData } from '@/services/api';
import { Button, Divider, Card, Popconfirm } from 'antd';
import { FormattedMessage, useParams } from 'umi';
import LessonForm from './form';

// DNDEDITOR
import { DndEditorContainer } from '@/components/ProgramForm/DndEditor/index';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const Lesson: React.FC<{ lesson: API.Lesson; courseLessons: API.Lesson[] }> = ({
  lesson,
  courseLessons,
}) => {
  const [state, setState] = useState<API.Lesson>(lesson);
  const [topicList, setTopicList] = useState<API.Topic[]>([]);
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
    <Card
      title={
        <>
          <FormattedMessage id="lesson" />
          {`: ${state.title}`}
        </>
      }
      extra={
        <Popconfirm
          title={<FormattedMessage id="deleteQuestion" />}
          onConfirm={handleDelete}
          okText={<FormattedMessage id="yes" />}
          cancelText={<FormattedMessage id="no" />}
        >
          <Button loading={loading} size="small" danger>
            <FormattedMessage id="delete" />
          </Button>
        </Popconfirm>
      }
    >
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

      {!lesson.isNew && (
        <Divider>
          <FormattedMessage id="topics" />
        </Divider>
      )}

      <DndProvider backend={HTML5Backend}>
        <DndEditorContainer
          courseId={lesson.course_id}
          courseLessons={courseLessons}
          state={state}
          setState={setState}
          topicList={topicList as (API.TopicNew | API.TopicNotEmpty)[]}
        />
      </DndProvider>
    </Card>
  );
};

export default Lesson;
