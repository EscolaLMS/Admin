import React, { useState, useContext, useCallback } from 'react';
import { Collapse, Button, Divider, Tag, Spin } from 'antd';
import Lesson from '@/components/lesson';
import { Context } from '@/context/curriculum';
import { PlusOutlined } from '@ant-design/icons';
import SortingButtons from '@/components/sortingbuttons';
const { Panel } = Collapse;

export const Curriculum = () => {
  const { state, addNewLesson, sortLesson } = useContext(Context);

  const [activeKeys, setActiveKeys] = useState([]);

  const onNew = useCallback(
    (e) => {
      addNewLesson();
      setActiveKeys('0');
      // setActiveKeys(prevState => [...prevState, state.lessons.length]);
    },
    [state],
  );

  const onSort = useCallback(
    (lesson, up) => {
      sortLesson(lesson.id, up);
    },
    [state],
  );

  if (state && state.lessons) {
    return (
      <div className="course-block">
        <Button onClick={onNew} type="primary" className="green" icon={<PlusOutlined />}>
          Add new lesson
        </Button>
        <Divider />
        <div className="curriculum-lessons-wrapper">
          <Collapse onChange={(key) => setActiveKeys(key)} activeKey={activeKeys}>
            {state.lessons.map((lesson, i, arr) => (
              <Panel
                header={
                  <span>
                    {lesson.isNew && <Tag color="#2db7f5">NEW</Tag>}
                    Lesson: <strong>{lesson.title}</strong>{' '}
                    {lesson.topics.length !== 0 && (
                      <small>
                        ({lesson.topics.length} topic
                        {lesson.topics.length > 1 ? 's' : ''})
                      </small>
                    )}
                  </span>
                }
                key={i}
                extra={
                  lesson.isNew ? (
                    <React.Fragment />
                  ) : arr.length > 1 ? (
                    <SortingButtons
                      mode={i === 0 ? 'first' : i === arr.length - 1 ? 'last' : 'middle'}
                      onUp={() => onSort(lesson, true)}
                      onDown={() => onSort(lesson, false)}
                    />
                  ) : (
                    <React.Fragment />
                  )
                }
              >
                <Lesson key={lesson.id} lesson={lesson} />
              </Panel>
            ))}
          </Collapse>
        </div>
        <Divider />
        <Button onClick={onNew} type="primary" className="green" icon={<PlusOutlined />}>
          Add new lesson
        </Button>
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
