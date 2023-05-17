import React, { useEffect, useMemo, useState } from 'react';
import { FormattedMessage, Link } from 'umi';
import { Button, Divider, Select } from 'antd';
import ProForm from '@ant-design/pro-form';
import ProTable from '@ant-design/pro-table';
import type { ProColumns } from '@ant-design/pro-table';
import { EditOutlined } from '@ant-design/icons';

import { getGroupFinalGrades } from '@/services/escola-lms/grades';
import { useTeacherSubject } from '../context';

interface TableData {
  loading: boolean;
  dataSource?: API.FinalGradeItem[];
}

const staticColumns: ProColumns<API.FinalGradeItem>[] = [
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
    render: (_n, row) => (row.grades[0] ? row.grades[0].grade_value : '-'),
  },
];

export const FinalGradesList: React.FC = () => {
  const { teacherSubjectData, semester_subject_id } = useTeacherSubject();
  const [tableData, setTableData] = useState<TableData>({ loading: false });

  const [selectedGroup, setSelectedGroup] = useState<number | undefined>(
    teacherSubjectData?.groups?.[0].id,
  );
  const groupsSelectOptions = useMemo(
    () => (teacherSubjectData?.groups ?? []).map(({ id, name }) => ({ label: name, value: id })),
    [teacherSubjectData?.groups],
  );

  useEffect(() => {
    if (selectedGroup === undefined) return;

    setTableData((prev) => ({ ...prev, loading: true }));
    getGroupFinalGrades(selectedGroup)
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
  }, [selectedGroup]);

  return (
    <>
      <ProForm.Item label={<FormattedMessage id="group" />}>
        <Select
          options={groupsSelectOptions}
          value={selectedGroup}
          onChange={(v) => setSelectedGroup(v)}
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
                to={`/teacher/subjects/${semester_subject_id}/final-grades?user_id=${row.user.id}`}
              >
                <Button type="primary" icon={<EditOutlined />} />
              </Link>,
            ],
          },
        ]}
      />
    </>
  );
};
