import React, { useContext, useMemo } from 'react';
import { ProFormTreeSelect } from '@ant-design/pro-form';
import { FormattedMessage } from '@@/plugin-locale/localeExports';
import { Context } from '@/components/ProgramForm/Context';
import type { DefaultOptionType } from 'antd/es/select';
import { useIntl } from 'umi';

type TreeData = Omit<DefaultOptionType, 'label'>;

const traverse = (lessons: API.Lesson[]): TreeData[] =>
  lessons.reduce<TreeData[]>(
    (acc, lesson) => [
      ...acc,
      {
        value: lesson.id,
        title: lesson.title,
        label: lesson.title,
        children: lesson.lessons ? traverse(lesson.lessons) : [],
      },
    ],
    [],
  );

export const ParentLesson: React.FC<{ name: string }> = ({ name }) => {
  const intl = useIntl();
  const { state } = useContext(Context);

  const treeData: TreeData[] = useMemo(
    () => [
      {
        // This have to be empty string
        value: '',
        title: intl.formatMessage({
          id: 'root',
          defaultMessage: 'Root',
        }),
        label: intl.formatMessage({
          id: 'root',
          defaultMessage: 'Root',
        }),
        children: traverse(state?.lessons ?? []),
      },
    ],
    [state],
  );

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
