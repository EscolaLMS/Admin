import { useContext, useCallback } from 'react';
import { Button, Spin } from 'antd';

import { history } from 'umi';

import { Context } from '@/components/ProgramForm/Context';
import { PlusOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'umi';
import './index.css';
import { LessonList } from '@/components/ProgramForm/ThreeColProgram/List/lessonList';

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
