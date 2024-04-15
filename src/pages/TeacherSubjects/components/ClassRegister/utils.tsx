import AttendanceCheckbox from '@/components/AttendanceCheckbox';
import { DAY_FORMAT } from '@/consts/dates';
import { ExamGradeType } from '@/services/escola-lms/enums';
import type { ProColumns } from '@ant-design/pro-table';
import { format } from 'date-fns';
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
export const getAttendanceCols = (
  groupAttendanceSchedule: API.GroupAttendanceSchedule[],
): ProColumns<ClassRegisterTableItem> => {
  const dynamicCols = groupAttendanceSchedule.reduce<ProColumns<ClassRegisterTableItem>[]>(
    (acc, curr) => [
      ...acc,
      {
        title: format(new Date(curr.date_from), DAY_FORMAT),
        dataIndex: `attendance-${curr.id}`,
        hideInSearch: true,
        width: 100,
        align: 'center',
        render: (_, record) => (
          <AttendanceCheckbox
            groupAttendanceScheduleId={curr.id}
            attendance={record[`attendance-${curr?.id}`]}
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
      [`attendance-${groupAttendanceSchedule.id}`]: studentAttendance.value,
    };
  }, {});

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
