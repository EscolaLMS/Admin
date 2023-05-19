import { createFinalGrade, updateFinalGrade } from '@/services/escola-lms/grades';
import React, { useCallback, useMemo } from 'react';
import { FormattedMessage, history } from 'umi';
import { format } from 'date-fns';
import { Checkbox, Col, Divider, message, Row, Spin, Typography } from 'antd';
import ProForm, { ProFormSelect } from '@ant-design/pro-form';
import ProTable from '@ant-design/pro-table';
import type { ProColumns } from '@ant-design/pro-table';

import { DAY_FORMAT } from '@/consts/dates';
import { AttendanceValue } from '@/services/escola-lms/enums';
import { useTeacherSubject } from '../../context';
import {
  useFinalGrades,
  useSubjectGradeScales,
  useGradeTerms,
  useUserAttendanceSchedules,
  useStudentExams,
  StudentExam,
} from './hooks';

interface Props {
  user_id: number;
  group_id: number;
}

interface FormData {
  grade_term_id: number;
  grade_scale_id: number;
}

const subjectGradeScalesColumns: ProColumns<API.GradeScale>[] = [
  {
    title: <FormattedMessage id="grade" />,
    dataIndex: 'grade',
  },
  {
    title: <FormattedMessage id="degree" />,
    dataIndex: 'name',
  },
  {
    title: <FormattedMessage id="max_percent" />,
    dataIndex: 'grade_value',
    valueType: 'percent',
  },
];

const userAttendanceColumns: ProColumns<API.UserAttendanceSchedule>[] = [
  {
    title: <FormattedMessage id="date" />,
    dataIndex: 'date_from',
    render: (_n, row) => format(new Date(row.date_from), DAY_FORMAT),
  },
];

const studentExamsColumns: ProColumns<StudentExam>[] = [
  {
    title: <FormattedMessage id="name" />,
    dataIndex: 'title',
  },
  {
    title: <FormattedMessage id="TeacherSubjects.Exams.grade_weight" defaultMessage="Weight" />,
    dataIndex: 'weight',
    valueType: 'percent',
  },
  {
    title: <FormattedMessage id="created_at" defaultMessage="Created at" />,
    dataIndex: 'created_at',
    render: (_n, row) => format(new Date(row.created_at), DAY_FORMAT),
  },
  {
    title: <FormattedMessage id="grade" />,
    dataIndex: 'result',
    render: (_n, row) => `${row.result.result}%`,
  },
];

const TABLE_PAGE_SIZE = 6;

export const FinalGradesDetails: React.FC<Props> = ({ user_id, group_id }) => {
  const { semester_subject_id } = useTeacherSubject();
  const { studentExams } = useStudentExams(user_id);
  const { finalGrades } = useFinalGrades(group_id, user_id);
  const { gradeTerms } = useGradeTerms();
  const { subjectGradeScales } = useSubjectGradeScales(finalGrades.data?.s_subject_scale_form_id);
  const { userAttendanceSchedules, updateUserAttendanceSchedules } = useUserAttendanceSchedules(
    group_id,
    user_id,
  );

  const [form] = ProForm.useForm<FormData>();

  const gradeTermsSelectOptions = useMemo(
    () => (gradeTerms.data ?? []).map(({ id, name }) => ({ label: name, value: id })),
    [gradeTerms.data],
  );

  const gradesSelectOptions = useMemo(
    () =>
      (subjectGradeScales.data ?? []).map(({ name, id }) => ({
        label: name,
        value: id,
      })),
    [subjectGradeScales.data],
  );

  // TODO
  const proposedGrade = useMemo(() => '3+', []);

  const onFinalGradeSubmit = useCallback(
    async ({ grade_scale_id, grade_term_id }: FormData) => {
      if (finalGrades.data?.id === undefined) return;

      const existingFinalGrade = finalGrades.data?.grades.find(
        ({ grade_term }) => grade_term.id === grade_term_id,
      );

      if (existingFinalGrade) {
        updateFinalGrade(existingFinalGrade.id, { grade_scale_id }).then((response) => {
          message[response.success ? 'success' : 'error'](response.message);
          history.push(`/teacher/subjects/${semester_subject_id}/final-grades`);
        });
        return;
      }

      createFinalGrade({
        grade_scale_id,
        grade_term_id,
        lesson_group_user_id: finalGrades.data.id,
      }).then((response) => {
        message[response.success ? 'success' : 'error'](response.message);
        history.push(`/teacher/subjects/${semester_subject_id}/final-grades`);
      });
    },
    [finalGrades.data, semester_subject_id],
  );

  if (finalGrades.loading) {
    return <Spin />;
  }

  return (
    <>
      {finalGrades.data && (
        <>
          <Typography.Title level={5}>
            <FormattedMessage
              id="TeacherSubjects.FinalGrades.Student"
              values={finalGrades.data.user}
            />
          </Typography.Title>
          <Divider />
        </>
      )}
      <Row gutter={[48, 48]} justify="space-between">
        <Col span={12}>
          <ProTable
            rowKey="id"
            headerTitle={<FormattedMessage id="TeacherSubjects.FinalGrades.StudentPartialGrades" />}
            search={false}
            pagination={{ pageSize: TABLE_PAGE_SIZE }}
            dataSource={studentExams.data}
            loading={studentExams.loading}
            columns={studentExamsColumns}
            options={false}
            cardProps={{ bodyStyle: { padding: 0 } }}
          />
        </Col>
        <Col span={12}>
          <ProTable<API.UserAttendanceSchedule>
            rowKey="id"
            headerTitle={<FormattedMessage id="TeacherSubjects.FinalGrades.Attendances" />}
            search={false}
            options={false}
            pagination={{ pageSize: TABLE_PAGE_SIZE }}
            cardProps={{ bodyStyle: { padding: 0 } }}
            dataSource={userAttendanceSchedules.data}
            loading={userAttendanceSchedules.loading}
            columns={[
              ...userAttendanceColumns,
              {
                title: <FormattedMessage id="TeacherSubjects.FinalGrades.Attendance" />,
                dataIndex: 'attendance',
                render: (_n, row) => (
                  <Checkbox
                    onChange={(e) =>
                      updateUserAttendanceSchedules(
                        row.id,
                        e.target.checked ? AttendanceValue.PRESENT : AttendanceValue.ABSENT,
                      )
                    }
                    checked={row.attendance.value === AttendanceValue.PRESENT}
                  />
                ),
              },
            ]}
          />
        </Col>
        <Col span={12}>
          <ProTable<API.GradeScale>
            rowKey="id"
            headerTitle={<FormattedMessage id="TeacherSubjects.FinalGrades.GradesScale" />}
            search={false}
            options={false}
            pagination={{ pageSize: TABLE_PAGE_SIZE }}
            cardProps={{ bodyStyle: { padding: 0 } }}
            dataSource={subjectGradeScales.data}
            loading={subjectGradeScales.loading}
            columns={subjectGradeScalesColumns}
          />
        </Col>
        <Col span={12}>
          {/* TODO */}
          <ProTable
            rowKey="id"
            headerTitle={<FormattedMessage id="TeacherSubjects.FinalGrades.CoursesProgress" />}
            search={false}
            pagination={{ pageSize: TABLE_PAGE_SIZE }}
            options={false}
            cardProps={{ bodyStyle: { padding: 0 } }}
          />
        </Col>
      </Row>
      <ProForm<FormData> form={form} onFinish={onFinalGradeSubmit}>
        <ProForm.Group
          style={{ display: 'flex', flexDirection: 'column', paddingTop: '48px' }}
          title={<FormattedMessage id="Wystaw ocenę końcową" />}
          titleStyle={{ flex: 'unset' }}
          align="center"
        >
          <ProFormSelect
            name="grade_term_id"
            rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
            label={<FormattedMessage id="TeacherSubjects.FinalGrades.GradeTerm" />}
            options={gradeTermsSelectOptions}
            width="sm"
            fieldProps={{ loading: gradeTerms.loading }}
          />
          <ProFormSelect
            name="grade_scale_id"
            rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
            label={<FormattedMessage id="TeacherSubjects.FinalGrades.FinalGrade" />}
            options={gradesSelectOptions}
            fieldProps={{ loading: finalGrades.loading || subjectGradeScales.loading }}
          />
          <ProForm.Item>
            <FormattedMessage
              id="TeacherSubjects.FinalGrades.ProposedGrade"
              values={{ grade: proposedGrade }}
            />
          </ProForm.Item>
        </ProForm.Group>
      </ProForm>
    </>
  );
};
