import React, { useState, useContext, useCallback } from 'react';
import { Collapse, Button, Divider, Tag, Spin } from 'antd';
import Lesson from '@/components/ProgramForm/Lesson';
import { Context } from '@/components/ProgramForm/Context';
import { PlusOutlined } from '@ant-design/icons';
import SortingButtons from '@/components/sortingbuttons';

const { Panel } = Collapse;

export const Curriculum = () => {
  const { state, addNewLesson, sortLesson } = useContext(Context);

  const [activeKeys, setActiveKeys] = useState<string | string[]>([]);

  const onNew = useCallback(() => {
    if (addNewLesson) {
      const newLesson = addNewLesson();
      setActiveKeys(String(newLesson.id));
    }
    // setActiveKeys(prevState => [...prevState, state.lessons.length]);
  }, [addNewLesson]);

  const onSort = useCallback(
    (lesson, up) => {
      return sortLesson && sortLesson(lesson.id, up);
    },
    [sortLesson],
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
            {state.lessons

              .sort((lessonA, lessonB) => (lessonA.order || 0) - (lessonB.order || 0))
              .map((lesson, i, arr) => (
                <Panel
                  header={
                    <span>
                      {lesson.isNew && <Tag color="#2db7f5">NEW</Tag>}
                      Lesson: <strong>{lesson.title}</strong>{' '}
                      <Tag>{lesson.active ? 'Active' : 'Inactive'}</Tag>
                      {lesson?.topics?.length !== 0 && (
                        <small>
                          ({lesson?.topics?.length} topic
                          {Number(lesson?.topics?.length) > 1 ? 's' : ''})
                        </small>
                      )}
                    </span>
                  }
                  key={lesson.id || i}
                  extra={
                    // eslint-disable-next-line no-nested-ternary
                    lesson.isNew ? (
                      <React.Fragment />
                    ) : arr.length > 1 ? (
                      <SortingButtons
                        // eslint-disable-next-line no-nested-ternary
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
