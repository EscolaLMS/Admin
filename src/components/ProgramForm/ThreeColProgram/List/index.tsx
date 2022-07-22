import { useContext, useCallback } from 'react';
import { Button, Spin } from 'antd';

import { NavLink, history } from 'umi';

import { Context } from '@/components/ProgramForm/Context';
import { FolderOutlined, PlusOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'umi';
import { getTypeIcon } from './../TopicForm/index';
import { getTypeName } from './../TopicForm/media';
import type { TopicType } from '@/services/escola-lms/enums';
import { TopicTypesSelector } from './types';
import './index.css';

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
      <aside className={'program-sidebar program-sidebar--left'}>
        <ul className={'program-sidebar__list'}>
          {state.lessons
            .sort((lessonA, lessonB) => (lessonA.order || 0) - (lessonB.order || 0))
            .map((lesson) => (
              <li key={lesson.id}>
                <div className={'program-sidebar__list-item program-sidebar__list-item--lesson'}>
                  <NavLink to={`/courses/list/${state.id}/program/?lesson=${lesson.id}`}>
                    <FolderOutlined />
                    {lesson.title}
                  </NavLink>

                  <TopicTypesSelector
                    onSelected={(topic_type) =>
                      lesson.id && addNewTopicToLesson(lesson.id, topic_type)
                    }
                  />
                </div>

                {lesson.topics && lesson.topics?.length > 0 && (
                  <ul>
                    {lesson.topics?.map((topic) => (
                      <li
                        key={topic.id}
                        className={
                          currentEditMode &&
                          currentEditMode.mode === 'topic' &&
                          currentEditMode.id === topic.id
                            ? 'program-sidebar__list-item program-sidebar__list-item--active'
                            : 'program-sidebar__list-item'
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
        <Button
          onClick={onNew}
          type="primary"
          className="program-sidebar__add-btn"
          icon={<PlusOutlined />}
        >
          <span>
            <FormattedMessage id="add_new_lesson" />
          </span>
        </Button>
      </aside>
    );
  }

  return (
    <div>
      <Spin />
    </div>
  );
};

export default CurriculumList;
