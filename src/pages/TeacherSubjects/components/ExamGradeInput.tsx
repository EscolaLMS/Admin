import { InputNumber, Select } from 'antd';
import { debounce } from 'lodash';
import React, { useCallback } from 'react';

import { gradesOptions, passOptions } from '@/pages/TeacherSubjects/components/consts';
import { defaultResaltGrade } from '@/pages/TeacherSubjects/components/utils';
import { ExamGradeType } from '@/services/escola-lms/enums';
import { createExamResult } from '@/services/escola-lms/exams';

interface Props {
  exam_id: number;
  result: number | string;
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
  const onChange = useCallback(
    debounce((value: number | string | null) => {
      createExamResult(exam_id, student_id, { result: value ?? defaultResaltGrade(type) }).then(
        (res) => {
          if (res.success) {
            onSuccess?.(res.data);
          }
        },
      );
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
            defaultValue={String(result)}
          />
        );
      case ExamGradeType.ManualGrades:
        return (
          <Select
            allowClear
            style={{ width: '100%' }}
            onChange={onChange}
            options={gradesOptions}
            defaultValue={Number(result)}
          />
        );
      default:
        return (
          <InputNumber
            type="number"
            min={0}
            max={100}
            onChange={onChange}
            defaultValue={Number(result)}
          />
        );
    }
  };

  return getCorrectInput();
};
