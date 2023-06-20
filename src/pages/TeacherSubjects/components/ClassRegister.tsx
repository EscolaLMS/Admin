import React, { useMemo, useRef, useState } from 'react';
import { format } from 'date-fns';
import { FormattedMessage } from 'umi';
import ProTable from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';

import { DAY_FORMAT } from '@/consts/dates';
import { AttendanceValue } from '@/services/escola-lms/enums';
import { groupAttendanceSchedule as fetchGroupAttendanceSchedule } from '@/services/escola-lms/attendances';
import { studentUserGroup as fetchStudentUserGroup } from '@/services/escola-lms/student_user_groups';
import { getSubjectTutorGrades as fetchSubjectTutorGrades } from '@/services/escola-lms/grades';
import { getGroupFinalGrades as fetchGroupFinalGrades } from '@/services/escola-lms/grades';
import { getExams as fetchExams } from '@/services/escola-lms/exams';
import AttendanceCheckbox from '@/components/AttendanceCheckbox';
import { useTeacherSubject } from '../context';
import { ExamGradeInput } from './ExamGradeInput';
import {
  getProposedGrade,
  getScalesBySubjectScaleFormId,
  getStudentExamsFromExams,
} from './FinalGradesDetails/utils';

type ClassRegisterTableItem = { id: number; full_name: string; proposed_grade: string } & Record<
  string,
  API.AttendanceValue
> &
  Record<`exam-${string}`, API.ExamResult>;

export const ClassRegister: React.FC = () => {
  const { teacherSubjectData, semester_subject_id } = useTeacherSubject();
  const [dynamicCols, setDynamicCols] = useState<ProColumns<ClassRegisterTableItem>[]>([]);
  const [selectedGroupName, setSelectedGroupName] = useState(teacherSubjectData?.groups?.[0]?.name);

  const groupOptions = useMemo(
    () => (teacherSubjectData?.groups ?? []).map(({ id, name }) => ({ value: id, label: name })),
    [teacherSubjectData?.groups],
  );

  const actionRef = useRef<ActionType>();

  const columns: ProColumns[] = useMemo(
    () => [
      {
        title: <FormattedMessage id="group" />,
        dataIndex: 'group_id',
        hideInTable: true,
        valueType: 'select',
        fieldProps: {
          options: groupOptions,
          defaultValue: groupOptions?.[0]?.value,
          allowClear: false,
        },
      },
      {
        title: <FormattedMessage id="nameAndSurname" defaultMessage="Name and surname" />,
        dataIndex: 'full_name',
        fixed: 'left',
      },
      ...dynamicCols,
    ],
    [groupOptions, dynamicCols],
  );

  return (
    <ProTable<ClassRegisterTableItem>
      className="table-standalone"
      request={async ({ group_id = groupOptions[0]?.value, full_name = '' }) => {
        const finalGradesRes = await fetchGroupFinalGrades(group_id);
        if (!finalGradesRes.success || semester_subject_id === null)
          return { data: [], total: 0, success: false };

        const [studentUserGroupRes, groupAttendanceScheduleRes, examsRes, tutorGradesRes] =
          await Promise.all([
            fetchStudentUserGroup(group_id),
            fetchGroupAttendanceSchedule(group_id),
            fetchExams({ group_id, per_page: -1 }),
            fetchSubjectTutorGrades(semester_subject_id, finalGradesRes.data?.[0].tutor_id),
          ]);

        const selectedGroup = groupOptions.find(({ value }) => value === group_id);

        if (
          !studentUserGroupRes.success ||
          !groupAttendanceScheduleRes.success ||
          !examsRes.success ||
          !tutorGradesRes.success ||
          !selectedGroup
        )
          return { data: [], total: 0, success: false };

        const attendanceCols = groupAttendanceScheduleRes.data.reduce<
          ProColumns<ClassRegisterTableItem>[]
        >(
          (acc, curr) => [
            ...acc,
            {
              title: String(format(new Date(curr.date_from), DAY_FORMAT)),
              dataIndex: String(curr.date_from),
              hideInSearch: true,
              width: 100,
              align: 'center',
              render: (_, record) => (
                <AttendanceCheckbox
                  groupAttendanceScheduleId={curr.id}
                  defaultChecked={record[`${curr?.date_from}`] === AttendanceValue.PRESENT}
                  studentId={record.id}
                />
              ),
            },
          ],
          [],
        );

        const examsCols = examsRes.data.reduce<ProColumns<ClassRegisterTableItem>[]>(
          (acc, exam) => [
            ...acc,
            {
              dataIndex: `exam-${exam.id}`,
              title: <FormattedMessage id="examTitleWithWeight" values={exam} />,
              hideInSearch: true,
              width: 100,
              render: (_n, record) =>
                record?.[`exam-${exam.id}`]?.result !== undefined ? (
                  <ExamGradeInput
                    result={record?.[`exam-${exam.id}`].result}
                    exam_id={exam.id}
                    student_id={record.id}
                  />
                ) : (
                  '-'
                ),
            },
          ],
          [],
        );

        setSelectedGroupName(selectedGroup.label);
        setDynamicCols(
          [
            {
              title: <FormattedMessage id="attendance" />,
              hideInSearch: true,
              children: attendanceCols,
            },
            { title: <FormattedMessage id="exams" />, hideInSearch: true, children: examsCols },
            {
              title: <FormattedMessage id="proposed_grade" />,
              hideInSearch: true,
              dataIndex: 'proposed_grade',
            },
          ].filter(({ children }) => children === undefined || children.length),
        );

        const data = studentUserGroupRes.data.users
          .reduce<ClassRegisterTableItem[]>(
            (acc, { id, academic_teacher_id, first_name, last_name }) => {
              const studentFullName = `${last_name} ${first_name}`;
              // filter out tutor & first name and second name filter
              if (
                academic_teacher_id !== null ||
                !studentFullName.toLowerCase().includes(full_name.toLowerCase())
              )
                return acc;

              const studentAttendances = groupAttendanceScheduleRes.data.reduce<
                Record<string, API.AttendanceValue>
              >((innerAcc, groupAttendanceSchedule) => {
                const studentAttendance = groupAttendanceSchedule.attendances.find(
                  (attendance) => attendance.user_id === id,
                );
                if (!studentAttendance) return innerAcc;

                return {
                  ...innerAcc,
                  [`${groupAttendanceSchedule.date_from}`]: studentAttendance.value,
                };
              }, {});

              const studentExams = getStudentExamsFromExams(examsRes.data, id);

              const tutorScales =
                getScalesBySubjectScaleFormId(
                  finalGradesRes.data[0].s_subject_scale_form_id,
                  tutorGradesRes.data.grade_scale ?? [],
                ) ?? [];

              const proposed_grade = getProposedGrade(studentExams, tutorScales);

              const studentExamResults = studentExams.reduce<
                Record<`exam-${string}`, API.ExamResult>
              >(
                (innerAcc, { result, id: exam_id }) => ({
                  ...innerAcc,
                  [`exam-${exam_id}`]: result,
                }),
                {},
              );

              return [
                ...acc,
                {
                  id,
                  full_name: studentFullName,
                  proposed_grade,
                  ...studentAttendances,
                  ...studentExamResults,
                },
              ];
            },
            [],
          )
          // sort alphabetically
          .sort((a, b) => a.full_name.localeCompare(b.full_name));

        return { data, total: data.length, success: true };
      }}
      columns={columns}
      headerTitle={
        <FormattedMessage
          id="classRegisterTitleWithGroupName"
          values={{ groupName: selectedGroupName }}
        />
      }
      search={{ layout: 'vertical' }}
      scroll={{ x: 1500 }}
      actionRef={actionRef}
      pagination={{ onChange: () => actionRef.current?.reload() }}
      rowKey="id"
    />
  );
};
