import React, { useState, useContext, useCallback, useMemo } from 'react';
import { Collapse, Button, Divider, Tag, Spin, Tooltip, Col, Row } from 'antd';

import Lesson from '@/components/ProgramForm/Lesson';
import { Context } from '@/components/ProgramForm/Context';
import { PlusOutlined, CopyOutlined } from '@ant-design/icons';
import SortingButtons from '@/components/sortingbuttons';
import { getLocale, FormattedMessage, useLocation } from 'umi';
import List from './List/index';
import type { Location } from 'history';
import LessonForm from './LessonForm/index';
import TopicForm from './TopicForm/index';

const { Panel } = Collapse;

export const Curriculum = () => {
  const { state, addNewLesson, sortLesson, cloneLesson, currentEditMode } = useContext(Context);

  const [activeKeys, setActiveKeys] = useState<string | string[]>([]);

  const onSort = useCallback(
    (lesson: API.Lesson, up: boolean) => {
      return lesson.id && sortLesson && sortLesson(lesson.id, up);
    },
    [sortLesson],
  );

  if (state && state.lessons) {
    return (
      <div className="course-block">
        <Row gutter={16}>
          <Col span={4}>
            <List />
          </Col>
          <Col span={24 - 4}>
            {currentEditMode.mode === 'lesson' && currentEditMode.value && (
              <LessonForm
                key={currentEditMode.id}
                // TODO refactor this you shoundn't need to pass any props here
                lesson={currentEditMode.value}
                courseLessons={state.lessons}
                courseId={state.id}
              />
            )}
            {currentEditMode.mode === 'topic' && currentEditMode.value && (
              <TopicForm
                key={currentEditMode.id}
                // TODO refactor this you shoundn't need to pass any props here
                onClose={() => console.log('close')}
                topic={currentEditMode.value}
                courseLessons={state.lessons}
                courseId={state.id}
              />
            )}
            {currentEditMode.mode === 'init' && <p>Init screen</p>}
          </Col>
        </Row>
        <div className="curriculum-lessons-wrapper"></div>
        <Divider />
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
