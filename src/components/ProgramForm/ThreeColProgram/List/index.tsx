import React, { useState, useContext, useCallback } from 'react';
import { Collapse, Button, Divider, Tag, Spin, Tooltip, Col, Row } from 'antd';

import { Link, NavLink, history } from 'umi';

import Lesson from '@/components/ProgramForm/Lesson';
import { Context } from '@/components/ProgramForm/Context';
import { PlusOutlined, CopyOutlined } from '@ant-design/icons';
import SortingButtons from '@/components/sortingbuttons';
import { getLocale, FormattedMessage } from 'umi';
import { getTypeIcon } from './../TopicForm/index';
import { getTypeName } from './../TopicForm/media';
import { TopicType } from '@/services/escola-lms/enums';
import { TopicTypesSelector } from './types';
const { Panel } = Collapse;

export const CurriculumList = () => {
  const { state, addNewLesson, sortLesson, cloneLesson, currentEditMode, addNewTopic } =
    useContext(Context);

  const [activeKeys, setActiveKeys] = useState<string | string[]>([]);

  const onNew = useCallback(() => {
    if (addNewLesson && state) {
      const newLesson = addNewLesson();
      history.push(`/courses/list/${state.id}/program/?lesson=${newLesson.id}`);
      //setActiveKeys(String(newLesson.id));
    }
  }, [addNewLesson, state]);

  const onSort = useCallback(
    (lesson: API.Lesson, up: boolean) => {
      return lesson.id && sortLesson && sortLesson(lesson.id, up);
    },
    [sortLesson],
  );

  const addNewTopicToLesson = useCallback(
    (lesson_id: number, topic_type: TopicType) => {
      if (addNewTopic && state) {
        const newTopic = addNewTopic(lesson_id, topic_type);
        history.push(`/courses/list/${state.id}/program/?topic=${newTopic.id}`);
      }
    },
    [addNewTopic, state],
  );

  if (state && state.lessons) {
    return (
      <div>
        <ul>
          {state.lessons
            .sort((lessonA, lessonB) => (lessonA.order || 0) - (lessonB.order || 0))
            .map((lesson) => (
              <li
                key={lesson.id}
                className={
                  currentEditMode.mode === 'lesson' && currentEditMode.id === lesson.id
                    ? 'active'
                    : ''
                }
              >
                <NavLink to={`/courses/list/${state.id}/program/?lesson=${lesson.id}`}>
                  {lesson.title}
                </NavLink>

                <TopicTypesSelector
                  onSelected={(topic_type) =>
                    lesson.id && addNewTopicToLesson(lesson.id, topic_type)
                  }
                />

                {lesson.topics && lesson.topics?.length > 0 && (
                  <ul>
                    {lesson.topics?.map((topic) => (
                      <li
                        key={topic.id}
                        className={
                          currentEditMode.mode === 'topic' && currentEditMode.id === topic.id
                            ? 'active'
                            : ''
                        }
                      >
                        <NavLink to={`/courses/list/${state.id}/program/?topic=${topic.id}`}>
                          {getTypeIcon(getTypeName(topic))} {topic.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
        <Button onClick={onNew} type="primary" className="green" icon={<PlusOutlined />}>
          <FormattedMessage id="add_new_lesson" />
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

export default CurriculumList;
