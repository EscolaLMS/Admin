import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FormattedMessage, useModel } from 'umi';
import { Button, Divider, Select, Spin, Typography } from 'antd';
import ProForm from '@ant-design/pro-form';
import { EditableProTable } from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { CheckOutlined, EditOutlined } from '@ant-design/icons';

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
    title: <FormattedMessage id="min_percent" />,
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

interface GradeScaleTableProps {
  subjectTutorGradeScale: API.SubjectTutorGradeScale;
  onFormSubmit: (formData: FormData) => Promise<void>;
}

const GradeScaleTable: React.FC<GradeScaleTableProps> = ({
  subjectTutorGradeScale,
  onFormSubmit,
}) => {
  const [editableKeys, setEditableKeys] = useState<React.Key[]>([]);
  const actionRef = useRef<ActionType>();

  const [form] = ProForm.useForm<FormData>();

  useEffect(() => {
    const gradeScaleWithIds = (subjectTutorGradeScale.scale ?? []).map((values, i) => ({
      ...values,
      id: String((i + 1) * 100),
    }));

    form.setFieldValue('table', gradeScaleWithIds);
  }, []);

  return (
    <ProForm<FormData>
      form={form}
      onFinish={onFormSubmit}
      submitter={{ render: (_p, [, submit]) => [submit] }}
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
  );
};

export const GradesScale: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { semester_subject_id, tutors } = useTeacherSubject();

  const [subjectTutorGrades, setSubjectTutorGrades] = useState<API.SubjectTutorGrades>();
  const [loading, setLoading] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState<number | null>(null);

  const tutorViewing = useMemo(
    () => !!tutors.data.find(({ id }) => id === initialState?.currentUser?.id),
    [tutors.data, initialState?.currentUser?.id],
  );
  const tutorsSelectOptions = useMemo(
    () =>
      tutors.data.map(({ id, first_name, last_name }) => ({
        label: `${first_name} ${last_name}`,
        value: id,
      })),
    [tutors.data],
  );

  const refreshSubjectTutorGrades = useCallback(() => {
    if (semester_subject_id === null || selectedTutor === null) return;

    setLoading(true);
    setSubjectTutorGrades(undefined);
    getSubjectTutorGrades(semester_subject_id, selectedTutor)
      .then((response) => {
        if (response.success) {
          setSubjectTutorGrades(response.data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [semester_subject_id, selectedTutor]);

  const onFormSubmitFactory = useCallback(
    (subjectTutorGradeScales: API.SubjectTutorGradeScale[], s_subject_scale_form_id: number) =>
      async (formData: FormData) => {
        if (semester_subject_id === null || selectedTutor === null) return;

        const grade_scale = subjectTutorGradeScales.reduce<API.SubjectTutorGradeScale[]>(
          (acc, tutorGradeScale) =>
            tutorGradeScale.s_subject_scale_form_id === s_subject_scale_form_id
              ? [
                  ...acc,
                  {
                    s_subject_scale_form_id,
                    scale: formData.table.map(({ name, grade, grade_value }) => ({
                      name,
                      grade,
                      grade_value,
                    })),
                  },
                ]
              : [...acc, tutorGradeScale],
          [],
        );

        const res = await createSubjectTutorGrades(semester_subject_id, selectedTutor, {
          grade_scale,
        });

        if (res.success) {
          refreshSubjectTutorGrades();
        }
      },
    [selectedTutor, semester_subject_id],
  );

  useEffect(() => {
    if (!tutorViewing || !initialState?.currentUser?.id) {
      if (tutors.data?.[0]) {
        setSelectedTutor(tutors.data?.[0].id);
      }
      return;
    }

    setSelectedTutor(initialState?.currentUser?.id);
  }, [initialState?.currentUser?.id, tutorViewing]);

  useEffect(() => {
    refreshSubjectTutorGrades();
  }, [refreshSubjectTutorGrades]);

  if (tutors.loading) {
    return <Spin />;
  }

  return (
    <>
      <ProForm.Item label={<FormattedMessage id="menu.Teacher" />}>
        <Select
          disabled={tutorViewing}
          placeholder={<FormattedMessage id="select" />}
          options={tutorsSelectOptions}
          value={selectedTutor}
          onChange={(v) => setSelectedTutor(v)}
        />
      </ProForm.Item>
      <Divider />
      {loading && !subjectTutorGrades && <Spin />}
      {subjectTutorGrades?.grade_scale ? (
        subjectTutorGrades.grade_scale.map((subjectTutorGradeScale, i) => (
          <React.Fragment key={subjectTutorGradeScale.s_subject_scale_form_id}>
            {i > 0 && <Divider />}
            <GradeScaleTable
              subjectTutorGradeScale={subjectTutorGradeScale}
              onFormSubmit={onFormSubmitFactory(
                subjectTutorGrades.grade_scale ?? [],
                subjectTutorGradeScale.s_subject_scale_form_id,
              )}
            />
          </React.Fragment>
        ))
      ) : (
        <Typography.Paragraph style={{ textAlign: 'center' }}>
          <FormattedMessage id="gradesScalesMissing" />
        </Typography.Paragraph>
      )}
    </>
  );
};
