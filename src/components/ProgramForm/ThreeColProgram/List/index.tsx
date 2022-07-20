import { useContext, useCallback } from 'react';
import { Button, Spin } from 'antd';

import { NavLink, history } from 'umi';

import { Context } from '@/components/ProgramForm/Context';
import { PlusOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'umi';
import { getTypeIcon } from './../TopicForm/index';
import { getTypeName } from './../TopicForm/media';
import type { TopicType } from '@/services/escola-lms/enums';
import { TopicTypesSelector } from './types';

export const CurriculumList = () => {
  const { state, addNewLesson /*, sortLesson , cloneLesson */, currentEditMode, addNewTopic } =
    useContext(Context);

  // TODO, there should be clone lesson button

  const onNew = useCallback(() => {
    if (addNewLesson && state) {
      const newLesson = addNewLesson();
      history.push(`/courses/list/${state.id}/program/?lesson=${newLesson.id}`);
    }
  }, [addNewLesson, state]);

  /*
  const onSort = useCallback(
    (lesson: API.Lesson, up: boolean) => {
      return lesson.id && sortLesson && sortLesson(lesson.id, up);
    },
    [sortLesson],
  );
  */

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
                  currentEditMode &&
                  currentEditMode.mode === 'lesson' &&
                  currentEditMode.id === lesson.id
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
                          currentEditMode &&
                          currentEditMode.mode === 'topic' &&
                          currentEditMode.id === topic.id
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
