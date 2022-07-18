import React, { useState, useContext, useCallback } from 'react';
import { Collapse, Button, Divider, Tag, Spin, Tooltip } from 'antd';
import Lesson from '@/components/ProgramForm/Lesson';
import { Context } from '@/components/ProgramForm/Context';
import { PlusOutlined, CopyOutlined } from '@ant-design/icons';
import SortingButtons from '@/components/sortingbuttons';
import { getLocale, FormattedMessage } from 'umi';

const { Panel } = Collapse;

export const Curriculum = () => {
  const { state, addNewLesson, sortLesson, cloneLesson } = useContext(Context);

  const [activeKeys, setActiveKeys] = useState<string | string[]>([]);

  const onNew = useCallback(() => {
    if (addNewLesson) {
      const newLesson = addNewLesson();
      setActiveKeys(String(newLesson.id));
    }
    // setActiveKeys(prevState => [...prevState, state.lessons.length]);
  }, [addNewLesson]);

  const onSort = useCallback(
    (lesson: API.Lesson, up: boolean) => {
      return lesson.id && sortLesson && sortLesson(lesson.id, up);
    },
    [sortLesson],
  );

  const getTopicVariant = (num: number | undefined) => {
    if (getLocale() === 'pl-PL' && num) {
      if (num === 1) {
        return '';
      }
      if (num > 1 && num < 5) return 'y';
      if (num > 21 && Number(String(num).slice(-1)) > 1 && Number(String(num).slice(-1)) < 5)
        return 'y';
      return 'ów';
    }

    if (getLocale() === 'en-US' && num) {
      if (num > 1) return 's';
      return '';
    }

    return undefined;
  };

  if (state && state.lessons) {
    return (
      <div className="course-block">
        <Button onClick={onNew} type="primary" className="green" icon={<PlusOutlined />}>
          <FormattedMessage id="add_new_lesson" />
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
                      {lesson.isNew && (
                        <Tag color="#2db7f5">
                          <FormattedMessage id="new" />
                        </Tag>
                      )}
                      <FormattedMessage id="lesson" />: <strong>{lesson.title}</strong>{' '}
                      <Tag>
                        {lesson.active ? (
                          <FormattedMessage id="Active" />
                        ) : (
                          <FormattedMessage id="Inactive" />
                        )}
                      </Tag>
                      {lesson?.topics?.length !== 0 && (
                        <small>
                          ({lesson?.topics?.length} <FormattedMessage id="topic" />
                          {getTopicVariant(Number(lesson?.topics?.length))})
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
                      <React.Fragment>
                        <SortingButtons
                          // eslint-disable-next-line no-nested-ternary
                          mode={i === 0 ? 'first' : i === arr.length - 1 ? 'last' : 'middle'}
                          onUp={() => onSort(lesson, true)}
                          onDown={() => onSort(lesson, false)}
                        />
                        <Divider type="vertical" />
                        <Tooltip title={<FormattedMessage id="copy_lesson" />}>
                          <Button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              return lesson.id && cloneLesson && cloneLesson(lesson.id);
                            }}
                            size="small"
                          >
                            <CopyOutlined />
                          </Button>
                        </Tooltip>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <Tooltip title={<FormattedMessage id="copy_lesson" />}>
                          <Button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              return lesson.id && cloneLesson && cloneLesson(lesson.id);
                            }}
                            size="small"
                          >
                            <CopyOutlined />
                          </Button>
                        </Tooltip>
                      </React.Fragment>
                    )
                  }
                >
                  <Lesson
                    key={lesson.id}
                    lesson={lesson}
                    courseLessons={state.lessons}
                    courseId={state.id}
                  />
                </Panel>
              ))}
          </Collapse>
        </div>
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
