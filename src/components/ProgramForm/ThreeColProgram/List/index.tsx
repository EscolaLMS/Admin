import { useContext, useCallback } from 'react';
import { FormattedMessage, history } from 'umi';
import { Button, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { Context } from '@/components/ProgramForm/Context';
import './index.css';
import { LessonList } from './LessonList';

export const CurriculumList = () => {
  const { state, addNewLesson } = useContext(Context);

  // TODO, there should be clone lesson button

  const onNew = useCallback(() => {
    if (addNewLesson && state) {
      const newLesson = addNewLesson();
      history.push(`/courses/list/${state.id}/program/?lesson=${newLesson.id}`);
    }
  }, [addNewLesson, state]);

  if (state && state.lessons) {
    return (
      <aside
        className={`program-sidebar program-sidebar--left ${
          state.lessons.length > 0 ? '' : 'program-sidebar--empty'
        }`}
      >
        <LessonList />
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
