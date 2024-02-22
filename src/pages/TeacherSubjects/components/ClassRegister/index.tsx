import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Tooltip, message } from 'antd';
import React, { useMemo, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

import BookmarkNoteModal from '@/components/BookmarkNoteModal';
import { groupAttendanceSchedule as fetchGroupAttendanceSchedule } from '@/services/escola-lms/attendances';
import { getExams as fetchExams } from '@/services/escola-lms/exams';
import {
  getGradeTerms as fetchGradeTerms,
  getGroupFinalGrades as fetchGroupFinalGrades,
  getSubjectGradeScales as fetchSubjectGradeScales,
  getSubjectTutorGrades as fetchSubjectTutorGrades,
} from '@/services/escola-lms/grades';
import { studentUserGroup as fetchStudentUserGroup } from '@/services/escola-lms/student_user_groups';
import { EditOutlined } from '@ant-design/icons';
import { useTeacherSubject } from '../../context';
import {
  getProposedGrade,
  getScalesBySubjectScaleFormId,
  getStudentExamsFromExams,
} from '../FinalGradesDetails/utils';
import { TEACHER_SUBJECTS_PAGE_SIZE } from '../consts';
import type { ClassRegisterTableItem } from './types';
import {
  getAttendanceCols,
  getExamsCols,
  getFinalGrades,
  getFinalGradesCols,
  getStudentAttendances,
  getStudentExamResults,
  getStudentFinalGrades,
} from './utils';

export const ClassRegister: React.FC = () => {
  const { teacherSubjectData, semester_subject_id } = useTeacherSubject();
  const [dynamicCols, setDynamicCols] = useState<ProColumns<ClassRegisterTableItem>[]>([]);
  const [selectedGroupName, setSelectedGroupName] = useState(teacherSubjectData?.groups?.[0]?.name);
  const [userModalData, setUserModalData] = useState<{
    userName: string;
    userId: number;
    groupId: number;
  } | null>(null);
  const intl = useIntl();

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
        title: <FormattedMessage id="surnameAndName" defaultMessage="Name and surname" />,
        dataIndex: 'full_name',
        fixed: 'left',
      },
      ...dynamicCols,
      {
        hideInSearch: true,
        title: <FormattedMessage id="pages.searchTable.titleOption" />,
        dataIndex: 'option',
        valueType: 'option',
        fixed: 'right',
        width: 60,
        render: (_n, record) => (
          <>
            <Tooltip title={<FormattedMessage id="notes" defaultMessage="notes" />}>
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() =>
                  setUserModalData({
                    userName: record.full_name,
                    userId: record.id,
                    groupId: record.final_grades.group_id,
                  })
                }
              />
            </Tooltip>
          </>
        ),
      },
    ],
    [groupOptions, dynamicCols],
  );

  return (
    <>
      {userModalData?.userId && (
        <BookmarkNoteModal
          visible={!!userModalData.userId}
          onClose={() => setUserModalData(null)}
          user={{
            name: userModalData.userName,
            userId: userModalData.userId,
            groupId: userModalData.groupId,
          }}
        />
      )}
      <ProTable<ClassRegisterTableItem>
        sticky
        className="table-standalone"
        request={async ({ group_id = groupOptions[0]?.value, full_name = '' }) => {
          const finalGradesRes = await fetchGroupFinalGrades([group_id]);
          const selectedGroup = groupOptions.find(({ value }) => value === group_id);
          if (
            !finalGradesRes.success ||
            finalGradesRes.data[0] === undefined ||
            semester_subject_id === null
          ) {
            message.error(
              intl.formatMessage({ id: 'groupDataMissing' }, { group_name: selectedGroup?.label }),
            );

            return { data: [], total: 0, success: false };
          }

          const [
            studentUserGroupRes,
            groupAttendanceScheduleRes,
            examsRes,
            tutorGradesRes,
            gradeTermsRes,
            subjectGradeScalesRes,
          ] = await Promise.all([
            fetchStudentUserGroup(group_id),
            fetchGroupAttendanceSchedule(group_id),
            fetchExams({ group_id, per_page: -1 }),
            fetchSubjectTutorGrades(semester_subject_id, finalGradesRes.data?.[0]?.tutor_id),
            fetchGradeTerms(),
            fetchSubjectGradeScales(finalGradesRes.data?.[0]?.s_subject_scale_form_id),
          ]);

          if (
            !studentUserGroupRes.success ||
            !groupAttendanceScheduleRes.success ||
            !examsRes.success ||
            !tutorGradesRes.success ||
            !gradeTermsRes.success ||
            !subjectGradeScalesRes.success ||
            !selectedGroup
          ) {
            message.error(
              intl.formatMessage({ id: 'groupDataMissing' }, { group_name: selectedGroup?.label }),
            );

            return { data: [], total: 0, success: false };
          }
          setSelectedGroupName(selectedGroup.label);

          /* COLS */
          const attendanceCols = getAttendanceCols(groupAttendanceScheduleRes.data);
          const examsCols = getExamsCols(examsRes.data);
          const finalGradeCols = getFinalGradesCols(gradeTermsRes.data, subjectGradeScalesRes.data);

          setDynamicCols([
            attendanceCols,
            examsCols,
            finalGradeCols,
            {
              title: <FormattedMessage id="proposed_grade" />,
              hideInSearch: true,
              dataIndex: 'proposed_grade',
              align: 'center',
              width: 100,
            },
          ]);

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

                const studentAttendances = getStudentAttendances(
                  groupAttendanceScheduleRes.data,
                  id,
                );

                const studentExams = getStudentExamsFromExams(examsRes.data, id);

                const studentFinalGrades = getStudentFinalGrades(finalGradesRes.data, id);

                const tutorScales =
                  getScalesBySubjectScaleFormId(
                    studentFinalGrades?.s_subject_scale_form_id ?? 0,
                    tutorGradesRes.data.grade_scale ?? [],
                  ) ?? [];

                const proposed_grade = getProposedGrade(studentExams, tutorScales);

                const studentExamResults = getStudentExamResults(studentExams);

                const finalGrades = getFinalGrades(studentFinalGrades);

                return [
                  ...acc,
                  {
                    id,
                    full_name: studentFullName,
                    ...studentAttendances,
                    ...studentExamResults,
                    ...finalGrades,
                    proposed_grade,
                    final_grades: studentFinalGrades,
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
        pagination={{
          defaultPageSize: TEACHER_SUBJECTS_PAGE_SIZE,
          onChange: () => actionRef.current?.reload(),
        }}
        rowKey="id"
      />
    </>
  );
};
