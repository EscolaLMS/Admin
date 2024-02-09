import { EditOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Tooltip, Typography } from 'antd';
import type { Location } from 'history';
import React, { useMemo } from 'react';
import { FormattedMessage, Link, useLocation } from 'umi';

import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import { getGroupFinalGrades } from '@/services/escola-lms/grades';
import { useTeacherSubject } from '../context';
import { FinalGradesDetails } from './FinalGradesDetails';
import { TEACHER_SUBJECTS_PAGE_SIZE } from './consts';

interface TableParams {
  group_id?: number[];
  first_name?: string;
  last_name?: string;
}

const staticColumns: ProColumns<API.FinalGradeItem>[] = [
  {
    title: <FormattedMessage id="first_name" />,
    dataIndex: 'first_name',
    render: (_n, row) => row.user.first_name,
  },
  {
    title: <FormattedMessage id="last_name" />,
    dataIndex: 'last_name',
    render: (_n, row) => row.user.last_name,
  },
  {
    title: <FormattedMessage id="grade" />,
    hideInSearch: true,
    dataIndex: 'grades',
    render: (_n, row) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {row.grades.length
          ? row.grades.map(({ grade_name, grade_term, id }) => (
              <Typography.Text key={id}>
                {grade_term.name}: {grade_name}
              </Typography.Text>
            ))
          : '-'}
      </div>
    ),
  },
];

export const FinalGradesList: React.FC = () => {
  const location = useLocation() as Location & { query: { user_id?: string; group_id?: string } };
  const { user_id, group_id } = useMemo(
    () => ({
      user_id: Number.isNaN(Number(location.query?.user_id))
        ? null
        : Number(location.query?.user_id),
      group_id: Number.isNaN(Number(location.query?.group_id))
        ? null
        : Number(location.query?.group_id),
    }),

    [location.query?.user_id, location.query?.group_id],
  );

  const { teacherSubjectData, semester_subject_id } = useTeacherSubject();

  const groupOptions = useMemo(
    () => (teacherSubjectData?.groups ?? []).map(({ id, name }) => ({ label: name, value: id })),
    [teacherSubjectData?.groups],
  );

  if (user_id !== null && group_id !== null) {
    return <FinalGradesDetails user_id={user_id} group_id={group_id} />;
  }

  return (
    <ProTable<API.FinalGradeItem, TableParams>
      className="table-standalone"
      rowKey="id"
      search={{ layout: 'vertical' }}
      pagination={{ defaultPageSize: TEACHER_SUBJECTS_PAGE_SIZE }}
      request={async ({ group_id: group_ids = [], first_name = '', last_name = '' }) => {
        const allGroups = (teacherSubjectData?.groups ?? []).map(({ id }) => id);

        const response = await getGroupFinalGrades(group_ids.length === 0 ? allGroups : group_ids);

        if (!response.success) {
          return { success: false, total: 0, data: [] };
        }

        // TODO backend filter
        const data = response.data.filter(
          ({ user }) =>
            user.first_name.toLowerCase().includes(first_name.toLowerCase()) &&
            user.last_name.toLowerCase().includes(last_name.toLowerCase()),
        );

        return { success: true, total: data.length, data };
      }}
      columns={[
        {
          title: <FormattedMessage id="group" />,
          dataIndex: 'group_id',
          valueType: 'select',
          fieldProps: {
            options: groupOptions,
            mode: 'multiple',
          },
          render: (_n, row) => (
            <TypeButtonDrawer key={row.group_id} type="Students" type_id={row.group_id} />
          ),
        },
        ...staticColumns,
        {
          title: <FormattedMessage id="options" />,
          hideInSearch: true,
          render: (_n, row) => [
            <Link
              key="edit"
              to={`/teacher/subjects/${semester_subject_id}/final-grades?user_id=${row.user.id}&group_id=${row.group_id}`}
            >
              <Tooltip title={<FormattedMessage id="edit" />}>
                <Button type="primary" icon={<EditOutlined />} />
              </Tooltip>
            </Link>,
          ],
        },
      ]}
    />
  );
};
