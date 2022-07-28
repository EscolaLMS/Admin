import { useContext } from 'react';
import { Spin, Col, Row, Typography } from 'antd';

import { Context } from '@/components/ProgramForm/Context';

import List from './List/index';
import LessonForm from './LessonForm/index';
import TopicForm from './TopicForm/index';
import { FormattedMessage } from 'react-intl';

export const Curriculum = () => {
  const { state /*, sortLesson */, currentEditMode } = useContext(Context);

  const { Title } = Typography;

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
              <LessonForm key={currentEditMode.id} />
            )}
            {currentEditMode && currentEditMode.mode === 'topic' && currentEditMode.value && (
              <TopicForm key={currentEditMode.id} />
            )}
            {currentEditMode && currentEditMode.mode === 'init' && (
              <Row
                style={{
                  height: '100%',
                }}
              >
                <Col span={16}>
                  <div className={'program__empty-message'}>
                    {state.lessons.length > 0 ? (
                      <Title level={4}>
                        <FormattedMessage id="program_form_not_selected_list_message" />
                      </Title>
                    ) : (
                      <Title level={4}>
                        <FormattedMessage id="program_form_empty_list_message" />
                      </Title>
                    )}
                  </div>
                </Col>
                <Col span={8}>
                  <aside className="program-sidebar program-sidebar--right"></aside>
                </Col>
              </Row>
            )}
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
