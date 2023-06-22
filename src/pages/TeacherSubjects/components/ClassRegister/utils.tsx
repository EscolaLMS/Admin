import { FormattedMessage } from 'umi';
import { format } from 'date-fns';
import type { ProColumns } from '@ant-design/pro-table';

import { DAY_FORMAT } from '@/consts/dates';
import { AttendanceValue } from '@/services/escola-lms/enums';
import AttendanceCheckbox from '@/components/AttendanceCheckbox';

import type { StudentExam } from '../FinalGradesDetails/types';
import { FinalGradeSelect } from '../FinalGradeSelect';
import { ExamGradeInput } from '../ExamGradeInput';
import type {
  ClassRegisterTableItemAttendance,
  ClassRegisterTableItemFinalGrade,
  ClassRegisterTableItem,
  ClassRegisterTableItemExamResult,
} from './types';

/* Attendance */
export const getAttendanceCols = (
  groupAttendanceSchedule: API.GroupAttendanceSchedule[],
): ProColumns<ClassRegisterTableItem> => {
  const dynamicCols = groupAttendanceSchedule.reduce<ProColumns<ClassRegisterTableItem>[]>(
    (acc, curr) => [
      ...acc,
      {
        title: format(new Date(curr.date_from), DAY_FORMAT),
        dataIndex: `attendance-${curr.date_from}`,
        hideInSearch: true,
        width: 100,
        align: 'center',
        render: (_, record) => (
          <AttendanceCheckbox
            groupAttendanceScheduleId={curr.id}
            defaultChecked={record[`attendance-${curr?.date_from}`] === AttendanceValue.PRESENT}
            studentId={record.id}
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
      [`attendance-${groupAttendanceSchedule.date_from}`]: studentAttendance.value,
    };
  }, {});

/* Exams */
export const getExamsCols = (exams: API.Exam[]): ProColumns<ClassRegisterTableItem> => {
  const dynamicCols = exams.reduce<ProColumns<ClassRegisterTableItem>[]>(
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
