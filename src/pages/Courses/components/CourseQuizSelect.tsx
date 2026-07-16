import { Select, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'umi';

import { getCourseGiftQuizzes } from '@/services/escola-lms/gift_quiz';

export const CourseQuizSelect: React.FC<{
  courseId: number;
  value?: number;
  onChange?: (value?: number) => void;
  disabled?: boolean;
}> = ({ courseId, value, onChange, disabled }) => {
  const [quizzes, setQuizzes] = useState<API.CourseGiftQuiz[]>([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setFetching(true);
    getCourseGiftQuizzes({ course_id: courseId }, { signal: controller.signal })
      .then((response) => {
        if (response.success) {
          setQuizzes(response.data);
        }
        setFetching(false);
      })
      .catch(() => setFetching(false));
    return () => controller.abort();
  }, [courseId]);

  return (
    <Select
      disabled={disabled}
      allowClear
      style={{ width: '100%', minWidth: '150px' }}
      value={value}
      onChange={onChange}
      showSearch
      optionFilterProp="children"
      placeholder={<FormattedMessage id="select_quiz" defaultMessage="Select quiz" />}
      filterOption={(input, option) =>
        String(option?.children ?? '')
          .toLowerCase()
          .includes(input.toLowerCase())
      }
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {quizzes.map((quiz) => (
        <Select.Option key={quiz.id} value={quiz.id}>
          {quiz.title}
        </Select.Option>
      ))}
    </Select>
  );
};

export default CourseQuizSelect;
