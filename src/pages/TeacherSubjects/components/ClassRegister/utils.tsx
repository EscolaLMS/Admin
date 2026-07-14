import AttendanceCheckbox from '@/components/AttendanceCheckbox';
import { DAY_FORMAT } from '@/consts/dates';
import { ExamGradeType } from '@/services/escola-lms/enums';
import { DeleteOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import { Checkbox, Space, Table, Tooltip } from 'antd';
import { format } from 'date-fns';
import React from 'react';
import { FormattedMessage } from 'umi';
import { ExamGradeInput } from '../ExamGradeInput';
import { FinalGradeSelect } from '../FinalGradeSelect';
import type { StudentExam } from '../FinalGradesDetails/types';
import type {
  ClassRegisterTableItem,
  ClassRegisterTableItemAttendance,
  ClassRegisterTableItemExamResult,
  ClassRegisterTableItemFinalGrade,
} from './types';

/* Attendance */

import { getScheduleAttendanceHeaderState } from './helpers';

export { isGroupStudent } from './helpers';

interface AttendanceProps {
  groupAttendanceSchedule: API.GroupAttendanceSchedule[];
  handleDeleteColumn: (columnIndex: number, columnTitle: string) => void;
  scheduleDeletePermission?: boolean;
  onAttendanceChange: (scheduleId: number, studentId: number, value: API.AttendanceValue) => void;
}

export const getAttendanceCols = ({
  groupAttendanceSchedule,
  handleDeleteColumn,
  scheduleDeletePermission = false,
  onAttendanceChange,
}: AttendanceProps): ProColumns<ClassRegisterTableItem> => {
  const dynamicCols = groupAttendanceSchedule.reduce<ProColumns<ClassRegisterTableItem>[]>(
    (acc, curr) => [
      ...acc,
      {
        title: (
          <Space>
            {format(new Date(curr.date_from), DAY_FORMAT)}
            {scheduleDeletePermission && curr.is_outdated && (
              <DeleteOutlined
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteColumn(curr.id, format(new Date(curr.date_from), DAY_FORMAT));
                }}
              />
            )}
          </Space>
        ),
        dataIndex: `attendance-${curr.id}`,
        hideInSearch: true,
        width: 100,
        align: 'center',
        render: (_, record) => (
          <AttendanceCheckbox
            groupAttendanceScheduleId={curr.id}
            attendance={record[`attendance-${curr?.id}`]}
            studentId={record.id}
            onSuccess={(value) => onAttendanceChange(curr.id, record.id, value)}
          />
        ),
      },
    ],
    [],
  );

  if (!dynamicCols.length)
    return { title: <FormattedMessage id="attendance" />, hideInSearch: true, hideInTable: true };

  return {
    title: <FormattedMessage id="attendance" />,
    hideInSearch: true,
    children: dynamicCols,
  };
};

export const getStudentAttendances = (
  groupAttendanceSchedules: API.GroupAttendanceSchedule[],
  student_id: number,
): ClassRegisterTableItemAttendance =>
  groupAttendanceSchedules.reduce((innerAcc, groupAttendanceSchedule) => {
    const studentAttendance = groupAttendanceSchedule.attendances.find(
      (attendance) => attendance.user_id === student_id,
    );
    if (!studentAttendance) return innerAcc;

    return {
      ...innerAcc,
      [`attendance-${groupAttendanceSchedule.id}`]: studentAttendance.value,
    };
  }, {});

interface AttendanceSummaryCellsProps {
  dynamicCols: ProColumns<ClassRegisterTableItem>[];
  attendanceBySchedule: Record<number, Record<number, API.AttendanceValue>>;
  groupStudentIds: number[];
  togglingScheduleId: number | null;
  onToggle: (scheduleId: number, checked: boolean) => void;
}

export const getAttendanceSummaryCells = ({
  dynamicCols,
  attendanceBySchedule,
  groupStudentIds,
  togglingScheduleId,
  onToggle,
}: AttendanceSummaryCellsProps): React.ReactNode[] => {
  const attendanceChildren = (dynamicCols[0]?.children ??
    []) as ProColumns<ClassRegisterTableItem>[];
  const examsCount = (dynamicCols[1]?.children ?? []).length;
  const finalGradeCount = (dynamicCols[2]?.children ?? []).length;

  if (!attendanceChildren.length) return [];

  const cells: React.ReactNode[] = [];
  let index = 0;

  cells.push(
    <Table.Summary.Cell key="full_name" index={index++}>
      <Tooltip title={<FormattedMessage id="bulkAttendanceRowTooltip" />}>
        <strong>
          <FormattedMessage id="bulkAttendanceRowLabel" />
        </strong>
      </Tooltip>
    </Table.Summary.Cell>,
  );

  attendanceChildren.forEach((col) => {
    const dataIndex = col.dataIndex as `attendance-${string}`;
    const scheduleId = Number(String(dataIndex).replace('attendance-', ''));
    // Derive from the whole group (not the current page / name filter) so the
    // header state matches what the group-wide bulk action actually writes.
    const { allPresent, allEmpty } = getScheduleAttendanceHeaderState(
      attendanceBySchedule,
      scheduleId,
      groupStudentIds,
    );

    cells.push(
      <Table.Summary.Cell key={dataIndex} index={index++} align="center">
        <Tooltip title={<FormattedMessage id="markAllPresent" />}>
          <Checkbox
            checked={allPresent}
            indeterminate={!allPresent && !allEmpty}
            disabled={togglingScheduleId === scheduleId}
            onChange={(e) => onToggle(scheduleId, e.target.checked)}
          />
        </Tooltip>
      </Table.Summary.Cell>,
    );
  });

  if (examsCount > 0) {
    cells.push(<Table.Summary.Cell key="exams" index={index} colSpan={examsCount} />);
    index += examsCount;
  }

  if (finalGradeCount > 0) {
    cells.push(<Table.Summary.Cell key="final-grades" index={index} colSpan={finalGradeCount} />);
    index += finalGradeCount;
  }

  cells.push(<Table.Summary.Cell key="proposed_grade" index={index++} />);
  cells.push(<Table.Summary.Cell key="option" index={index++} />);

  return cells;
};

/* Exams */
export const getExamsCols = (exams: API.Exam[]): ProColumns<ClassRegisterTableItem> => {
  const dynamicCols = exams.reduce<ProColumns<ClassRegisterTableItem>[]>(
    (acc, exam) => [
      ...acc,
      {
        dataIndex: `exam-${exam.id}`,
        title:
          exam.type === ExamGradeType.Manual ? (
            <FormattedMessage id="examTitleWithWeight" values={exam} />
          ) : (
            <FormattedMessage id="examTitleWithoutWeight" values={exam} />
          ),
        hideInSearch: true,
        width: 100,
        render: (_n, record) => (
          <ExamGradeInput
            type={exam.type}
            result={record?.[`exam-${exam.id}`]?.result}
            exam_id={exam.id}
            student_id={record.id}
          />
        ),
      },
    ],
    [],
  );

  if (!dynamicCols.length)
    return { title: <FormattedMessage id="exams" />, hideInSearch: true, hideInTable: true };

  return { title: <FormattedMessage id="exams" />, hideInSearch: true, children: dynamicCols };
};

export const getStudentExamResults = (
  studentExams: StudentExam[],
): ClassRegisterTableItemExamResult =>
  studentExams.reduce(
    (innerAcc, { result, id: exam_id }) => ({
      ...innerAcc,
      [`exam-${exam_id}`]: result,
    }),
    {},
  );

/* Final grades */
export const getFinalGradesCols = (
  gradeTerms: API.GradeTerm[],
  subjectGradeScales: API.SubjectGradeScale[],
): ProColumns<ClassRegisterTableItem> => ({
  title: <FormattedMessage id="final-grades" />,
  hideInSearch: true,
  children: gradeTerms.map((term) => ({
    title: term.name,
    hideInSearch: true,
    width: 100,
    align: 'center',
    render: (_n, record) => (
      <FinalGradeSelect
        key={`${record?.final_grades?.group_id}-${term.id}`}
        defaultFinalGrade={record[`final-grade-${term.id}`]}
        finalGrades={record.final_grades}
        term={term}
        gradeScales={subjectGradeScales}
      />
    ),
  })),
});

export const getStudentFinalGrades = (
  finalGrades: API.FinalGradeItem[],
  student_id: number,
): API.FinalGradeItem | undefined =>
  finalGrades.find((finalGradeItem) => finalGradeItem.user.id === student_id);

export const getFinalGrades = (
  studentFinalGrade?: API.FinalGradeItem,
): ClassRegisterTableItemFinalGrade =>
  (studentFinalGrade?.grades ?? []).reduce(
    (acc, grade) => ({ ...acc, [`final-grade-${grade.grade_term.id}`]: grade }),
    {},
  );
