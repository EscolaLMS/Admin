import { ExamGradePassType } from '@/services/escola-lms/enums';
import { FormattedMessage } from 'umi';

export const TEACHER_SUBJECTS_PAGE_SIZE = 30;

export const passOptions = [
  {
    label: <FormattedMessage id="pass" defaultMessage="pass" />,
    value: ExamGradePassType.Passed,
  },
  {
    label: <FormattedMessage id="fail" defaultMessage="fail" />,
    value: ExamGradePassType.Failed,
  },
];

export const gradesOptions = [
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '3,5', value: 3.5 },
  { label: '4', value: 4 },
  { label: '4,5', value: 4.5 },
  { label: '5', value: 5 },
];
