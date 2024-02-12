import { Spin } from 'antd';
import { useCallback, useContext } from 'react';
import { history } from 'umi';

import { Context } from '@/components/ProgramForm/Context';
import { LessonList } from './LessonList';
import './index.css';

export const CurriculumList = () => {
  const { state, addNewLesson } = useContext(Context);

  // TODO, #1019 there should be clone lesson button

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
        <LessonList onNewLesson={onNew} />
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
