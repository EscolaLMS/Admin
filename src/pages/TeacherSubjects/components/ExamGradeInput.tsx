import React, { useCallback } from 'react';
import { InputNumber } from 'antd';
import { debounce } from 'lodash';

import { createExamResult } from '@/services/escola-lms/exams';

interface Props {
  exam_id: number;
  result: number;
  student_id: number;
  onSuccess?: (exam: API.Exam) => void;
}

export const ExamGradeInput: React.FC<Props> = ({ exam_id, result, student_id, onSuccess }) => {
  const onChange = useCallback(
    debounce((value: number | null) => {
      createExamResult(exam_id, student_id, { result: value ?? 0 }).then((res) => {
        if (res.success) {
          onSuccess?.(res.data);
        }
      });
    }, 300),
    [exam_id, result, student_id],
  );

  return <InputNumber type="number" min={0} max={100} onChange={onChange} defaultValue={result} />;
};
