import { InputNumber, Select } from 'antd';
import { debounce } from 'lodash';
import React, { useCallback } from 'react';

import { gradesOptions, passOptions } from '@/pages/TeacherSubjects/components/consts';
import { ExamGradeType } from '@/services/escola-lms/enums';
import { createExamResult } from '@/services/escola-lms/exams';
import { FormattedMessage, useIntl } from 'umi';

interface Props {
  exam_id: number;
  result: number | string | null;
  student_id: number;
  type: ExamGradeType;
  onSuccess?: (exam: API.Exam) => void;
}

export const ExamGradeInput: React.FC<Props> = ({
  exam_id,
  result,
  student_id,
  type,
  onSuccess,
}) => {
  const intl = useIntl();
  const onChange = useCallback(
    debounce((value: number | string | null) => {
      createExamResult(exam_id, student_id, { result: value }).then((res) => {
        if (res.success) {
          onSuccess?.(res.data);
        }
      });
    }, 300),
    [exam_id, result, student_id],
  );

  const getCorrectInput = () => {
    switch (type) {
      case ExamGradeType.ManualPass:
        return (
          <Select
            allowClear
            style={{ width: '100%' }}
            onChange={onChange}
            options={passOptions}
            defaultValue={result ?? undefined}
            placeholder={<FormattedMessage id="select_grade" />}
          />
        );
      case ExamGradeType.ManualGrades:
        return (
          <Select
            allowClear
            style={{ width: '100%' }}
            onChange={onChange}
            options={gradesOptions}
            defaultValue={result ?? undefined}
            placeholder={<FormattedMessage id="select_grade" />}
          />
        );
      default:
        return (
          <InputNumber
            type="number"
            min={0}
            max={100}
            onChange={onChange}
            defaultValue={result ?? undefined}
            placeholder={intl.formatMessage({ id: 'select_grade' })}
          />
        );
    }
  };

  return getCorrectInput();
};
