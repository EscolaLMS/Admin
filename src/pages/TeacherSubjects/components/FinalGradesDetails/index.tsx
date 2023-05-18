import React, { useMemo } from 'react';
import { FormattedMessage } from 'umi';
import { format } from 'date-fns';
import { Checkbox, Col, Divider, Row, Spin, Typography } from 'antd';
import ProForm, { ProFormSelect } from '@ant-design/pro-form';
import ProTable from '@ant-design/pro-table';
import type { ProColumns } from '@ant-design/pro-table';

import { DAY_FORMAT } from '@/consts/dates';
import { AttendanceValue } from '@/services/escola-lms/enums';
import { useFinalGrades, useGradeScales, useGradeTerms, useUserAttendanceSchedules } from './hooks';

interface Props {
  user_id: number;
  group_id: number;
}

interface FormData {
  term: number;
  grade_value: number;
}

const gradeScalesColumns: ProColumns<API.GradeScale>[] = [
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

const TABLE_PAGE_SIZE = 6;

export const FinalGradesDetails: React.FC<Props> = ({ user_id, group_id }) => {
  const { finalGrades } = useFinalGrades(group_id, user_id);
  const { gradeTerms } = useGradeTerms();
  const { gradeScales } = useGradeScales(finalGrades.data?.s_subject_scale_form_id);
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
      (gradeScales.data ?? []).map(({ name, grade_value }) => ({
        label: name,
        value: grade_value,
      })),
    [gradeScales.data],
  );

  // TODO
  const proposedGrade = useMemo(() => '3+', []);

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
          {/* TODO */}
          <ProTable
            rowKey="id"
            headerTitle={<FormattedMessage id="TeacherSubjects.FinalGrades.StudentPartialGrades" />}
            search={false}
            pagination={{ pageSize: TABLE_PAGE_SIZE }}
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
            dataSource={gradeScales.data}
            loading={gradeScales.loading}
            columns={gradeScalesColumns}
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
      {/* TODO */}
      <ProForm<FormData> form={form} onFinish={async (v) => console.log(v)}>
        <ProForm.Group
          style={{ display: 'flex', flexDirection: 'column', paddingTop: '48px' }}
          title={<FormattedMessage id="Wystaw ocenę końcową" />}
          titleStyle={{ flex: 'unset' }}
          align="center"
        >
          <ProFormSelect
            name="term"
            rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
            label={<FormattedMessage id="TeacherSubjects.FinalGrades.GradeTerm" />}
            options={gradeTermsSelectOptions}
            width="sm"
            fieldProps={{ loading: gradeTerms.loading }}
          />
          <ProFormSelect
            name="grade_value"
            rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
            label={<FormattedMessage id="TeacherSubjects.FinalGrades.FinalGrade" />}
            options={gradesSelectOptions}
            fieldProps={{ loading: finalGrades.loading || gradeScales.loading }}
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
