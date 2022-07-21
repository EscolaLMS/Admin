import { useContext } from 'react';
import { Spin, Col, Row } from 'antd';

import { Context } from '@/components/ProgramForm/Context';

import List from './List/index';
import LessonForm from './LessonForm/index';
import TopicForm from './TopicForm/index';

export const Curriculum = () => {
  const { state /*, sortLesson */, currentEditMode } = useContext(Context);

  /*
  const onSort = useCallback(
    (lesson: API.Lesson, up: boolean) => {
      return lesson.id && sortLesson && sortLesson(lesson.id, up);
    },
    [sortLesson],
  );
  */

  if (state && state.lessons) {
    return (
      <div className="course-block">
        <Row gutter={16}>
          <Col span={4}>
            <List />
          </Col>
          <Col span={24 - 4}>
            {currentEditMode && currentEditMode.mode === 'lesson' && currentEditMode.value && (
              <LessonForm
                key={currentEditMode.id}
                // TODO refactor this you shoundn't need to pass any props here
                lesson={currentEditMode.value}
                courseLessons={state.lessons}
                courseId={state.id}
              />
            )}
            {currentEditMode && currentEditMode.mode === 'topic' && currentEditMode.value && (
              <TopicForm
                key={currentEditMode.id}
                // TODO refactor this you shoundn't need to pass any props here
                onClose={() => console.log('close')}
                topic={currentEditMode.value}
                courseLessons={state.lessons}
                courseId={state.id}
              />
            )}
            {currentEditMode && currentEditMode.mode === 'init' && <p>Init screen</p>}
          </Col>
        </Row>
        <div className="curriculum-lessons-wrapper" />
      </div>
    );
  }

  return (
    <div>
      <Spin />
    </div>
  );
};

export default Curriculum;
