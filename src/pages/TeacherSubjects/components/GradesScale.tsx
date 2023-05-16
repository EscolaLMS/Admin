import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FormattedMessage } from 'umi';
import { Button, Divider, Select, Spin } from 'antd';
import ProForm from '@ant-design/pro-form';
import { EditableProTable } from '@ant-design/pro-table';
import { CheckOutlined, EditOutlined } from '@ant-design/icons';
import type { ProColumns, ActionType } from '@ant-design/pro-table';

import { createSubjectTutorGrades, getSubjectTutorGrades } from '@/services/escola-lms/grades';
import { useTeacherSubject } from '../context';

type TableGradeScale = API.GradeScale & { id: string };

interface FormData {
  table: TableGradeScale[];
}

const staticColumns: ProColumns<TableGradeScale>[] = [
  {
    title: <FormattedMessage id="grade" />,
    dataIndex: 'grade',
    editable: false,
  },
  {
    title: <FormattedMessage id="degree" />,
    dataIndex: 'name',
    editable: false,
  },
  {
    title: <FormattedMessage id="max_percent" />,
    dataIndex: 'grade_value',
    valueType: 'percent',
    formItemProps: {
      rules: [
        {
          required: true,
          message: <FormattedMessage id="field_required" />,
        },
        {
          type: 'number',
          min: 0,
          max: 100,
          message: <FormattedMessage id="number_between" values={{ min: 0, max: 100 }} />,
        },
      ],
    },
  },
];

export const GradesScale: React.FC = () => {
  const { semester_subject_id, tutors, getTutors } = useTeacherSubject();
  const [form] = ProForm.useForm<FormData>();
  const [editableKeys, setEditableKeys] = useState<React.Key[]>([]);
  const actionRef = useRef<ActionType>();

  const [selectedTutor, setSelectedTutor] = useState<number | null>(null);
  const tutorsSelectOptions = useMemo(
    () =>
      tutors.data.map(({ id, first_name, last_name }) => ({
        label: `${first_name} ${last_name}`,
        value: id,
      })),
    [tutors.data],
  );

  useEffect(() => {
    if (semester_subject_id === null) return;

    getTutors(semester_subject_id).then((response) => {
      if (response && response.success && response.data.tutors?.[0]) {
        setSelectedTutor(response.data.tutors[0].id);
      }
    });
  }, [semester_subject_id]);

  useEffect(() => {
    if (semester_subject_id === null || selectedTutor === null) return;

    getSubjectTutorGrades(semester_subject_id, selectedTutor).then((response) => {
      if (response.success) {
        const gradeScaleWithIds = response.data.grade_scale.map((values, i) => ({
          ...values,
          id: String((i + 1) * 100),
        }));

        form.setFieldValue('table', gradeScaleWithIds);
      }
    });
  }, [semester_subject_id, selectedTutor]);

  const onFormSubmit = useCallback(
    async (formData: FormData) => {
      if (semester_subject_id === null || selectedTutor === null) return;

      await createSubjectTutorGrades(semester_subject_id, selectedTutor, {
        grade_scale: formData.table,
      });
    },
    [selectedTutor, semester_subject_id],
  );

  if (tutors.loading) {
    return <Spin />;
  }

  return (
    <>
      <ProForm.Item label={<FormattedMessage id="menu.Teacher" />}>
        <Select
          options={tutorsSelectOptions}
          value={selectedTutor}
          onChange={(v) => setSelectedTutor(v)}
        />
      </ProForm.Item>
      <Divider />
      <ProForm<FormData>
        form={form}
        onFinish={onFormSubmit}
        submitter={{ render: (_p, [_r, submit]) => [submit] }}
      >
        <EditableProTable<TableGradeScale>
          name="table"
          rowKey="id"
          actionRef={actionRef}
          formItemProps={{ label: <FormattedMessage id="grades-scale" /> }}
          cardProps={{ bodyStyle: { padding: 0 } }}
          recordCreatorProps={false}
          columns={[
            ...staticColumns,
            {
              title: <FormattedMessage id="options" />,
              valueType: 'option',
              render: (_n, row) => (
                <Button
                  type="primary"
                  onClick={() => actionRef.current?.startEditable(row.id)}
                  icon={<EditOutlined />}
                />
              ),
            },
          ]}
          editable={{
            form,
            type: 'multiple',
            editableKeys,
            saveText: <Button type="primary" icon={<CheckOutlined />} />,
            onChange: setEditableKeys,
            actionRender: (_r, _c, dom) => [dom.save],
          }}
        />
      </ProForm>
    </>
  );
};
