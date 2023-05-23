import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import React, { useEffect, useMemo, useState } from 'react';
import type { Location } from 'history';
import { FormattedMessage, Link, useLocation } from 'umi';
import { Button, Divider, Select, Tooltip, Typography } from 'antd';
import ProForm from '@ant-design/pro-form';
import ProTable from '@ant-design/pro-table';
import type { ProColumns } from '@ant-design/pro-table';
import { EditOutlined } from '@ant-design/icons';

import { getGroupFinalGrades } from '@/services/escola-lms/grades';
import { FinalGradesDetails } from './FinalGradesDetails';
import { useTeacherSubject } from '../context';

interface TableData {
  loading: boolean;
  dataSource?: API.FinalGradeItem[];
}

const staticColumns: ProColumns<API.FinalGradeItem>[] = [
  {
    title: <FormattedMessage id="group" />,
    dataIndex: 'group_id',
    render: (_n, row) => (
      <TypeButtonDrawer key={row.group_id} type="Students" type_id={row.group_id} />
    ),
  },
  {
    title: <FormattedMessage id="first_name" />,
    dataIndex: 'user',
    render: (_n, row) => row.user.first_name,
  },
  {
    title: <FormattedMessage id="last_name" />,
    dataIndex: 'user',
    render: (_n, row) => row.user.last_name,
  },
  {
    title: <FormattedMessage id="grade" />,
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
  const [tableData, setTableData] = useState<TableData>({ loading: false });

  const [selectedGroups, setSelectedGroups] = useState<number[]>([
    Number(teacherSubjectData?.groups?.[0].id),
  ]);
  const groupsSelectOptions = useMemo(
    () => (teacherSubjectData?.groups ?? []).map(({ id, name }) => ({ label: name, value: id })),
    [teacherSubjectData?.groups],
  );

  useEffect(() => {
    if (typeof user_id === 'number') return;

    if (!selectedGroups.length) {
      setTableData({ loading: false });
      return;
    }

    setTableData((prev) => ({ ...prev, loading: true }));
    getGroupFinalGrades(selectedGroups)
      .then((response) => {
        if (response.success) {
          const dataSource = response.data.map(({ grades, ...rest }) => ({
            ...rest,
            grades: grades.sort(
              (a, b) => new Date(b.grade_date).getTime() - new Date(a.grade_date).getTime(),
            ),
          }));

          setTableData((prev) => ({ ...prev, dataSource }));
        }
      })
      .finally(() => {
        setTableData((prev) => ({ ...prev, loading: false }));
      });
  }, [selectedGroups, user_id]);

  if (user_id !== null && group_id !== null) {
    return <FinalGradesDetails user_id={user_id} group_id={group_id} />;
  }

  return (
    <>
      <ProForm.Item label={<FormattedMessage id="group" />}>
        <Select
          allowClear
          mode="multiple"
          options={groupsSelectOptions}
          value={selectedGroups}
          onChange={(v) => setSelectedGroups(v)}
        />
      </ProForm.Item>
      <Divider />
      <ProTable
        rowKey="id"
        search={false}
        loading={tableData.loading}
        dataSource={tableData.dataSource}
        columns={[
          ...staticColumns,
          {
            title: <FormattedMessage id="options" />,
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
    </>
  );
};
