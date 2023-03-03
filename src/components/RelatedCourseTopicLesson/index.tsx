import React, { useEffect, useState } from 'react';
import { TreeSelect } from 'antd';
import { course, program } from '@/services/escola-lms/course';
import type { DefaultOptionType } from 'antd/es/select';

type TreeData = Omit<DefaultOptionType, 'label'>;

export type RelatedValue =
  | `EscolaLms\\Courses\\Course:${number}`
  | `EscolaLms\\Courses\\Lesson:${number}`
  | `EscolaLms\\Courses\\Topic:${number}`;

const traverse = (lessons: API.Lesson[]): TreeData[] => {
  return lessons.reduce(
    (acc, lesson) => [
      ...acc,
      {
        value: `EscolaLms\\Courses\\Lesson:${lesson.id}`,
        title: lesson.title,
        label: lesson.title,
        children: lesson.lessons ? traverse(lesson.lessons) : [],
      },
      ...(lesson.topics
        ? lesson.topics.map((topic) => ({
            value: `EscolaLms\\Courses\\Topic:${topic.id}`,
            title: `Unit: ${topic.title}`,
            label: topic.title,
          }))
        : []),
    ],
    [] as TreeData[],
  );
};

export const Related: React.FC<{
  value?: RelatedValue;
  onChange?: (value: RelatedValue) => void;
  state?: {
    type: number;
  };
}> = ({ value, onChange }) => {
  const [treeData, setTreeData] = useState<TreeData[]>([]);

  useEffect(() => {
    (async () => {
      const courses = await course({ page: -1, pageSize: 100 });
      if (courses.success) {
        const programs = await Promise.all(
          courses.data
            .filter((courseRow) => courseRow.id)
            .map((courseRow) =>
              // Listen TS :D there is filter above course is success for sure
              //@ts-ignore
              program(courseRow.id),
            ),
        );

        const tree = programs
          .filter((programRow) => programRow.success)
          .map((programRow) => ({
            value: `EscolaLms\\Courses\\Course:${programRow.success && programRow.data.id}`,
            title: programRow.success ? programRow.data.title : '',
            label: programRow.success ? programRow.data.title : '',
            children: programRow.success ? traverse(programRow.data.lessons) : undefined,
          }));

        setTreeData(tree);
      }
    })();
  }, []);

  return (
    <TreeSelect
      loading={treeData.length === 0}
      treeLine
      showSearch
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={(val) => onChange && onChange(val)}
      treeData={treeData}
    />
  );
};
