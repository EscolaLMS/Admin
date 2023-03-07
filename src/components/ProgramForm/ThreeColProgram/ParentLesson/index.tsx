import React, { useContext, useMemo } from 'react';
import { ProFormTreeSelect } from '@ant-design/pro-form';
import { FormattedMessage } from '@@/plugin-locale/localeExports';
import { Context } from '@/components/ProgramForm/Context';
import type { DefaultOptionType } from 'antd/es/select';

type TreeData = Omit<DefaultOptionType, 'label'>;

const traverse = (lessons: API.Lesson[]): TreeData[] => {
  return lessons.reduce(
    (acc, lesson) => [
      ...acc,
      {
        value: lesson.id,
        title: lesson.title,
        label: lesson.title,
        children: lesson.lessons ? traverse(lesson.lessons) : [],
      },
    ],
    [] as TreeData[],
  );
};

export const ParentLesson: React.FC<{ name: string }> = ({ name }) => {
  const { state } = useContext(Context);

  const treeData = useMemo(() => traverse(state?.lessons ?? []), [state]);

  return (
    <div className="tree-select">
      <ProFormTreeSelect
        name={name}
        label={<FormattedMessage id="parent_lesson" />}
        fieldProps={{ treeData, treeDefaultExpandAll: true, treeLine: true }}
      />
    </div>
  );
};
