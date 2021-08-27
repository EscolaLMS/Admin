import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Select, Spin } from 'antd';

import { course as getCourses, getCourse } from '@/services/escola-lms/course';

export const CourseSelect: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}> = ({ value, onChange, multiple = false }) => {
  const [courses, setCourses] = useState<API.Course[]>([]);
  const [fetching, setFetching] = useState(false);

  const abortController = useRef<AbortController>();

  const fetch = useCallback((search?: string) => {
    setFetching(true);
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();
    getCourses({ title: search }, { signal: abortController.current.signal })
      .then((response) => {
        if (response.success) {
          setCourses((prevUsers) => [...prevUsers, ...response.data.data]);
          // TODO: don't reset just add new. unique table
        }
        setFetching(false);
      })
      .catch(() => setFetching(false));
  }, []);

  const onSearch = useCallback(
    (search) => {
      fetch(search);
    },
    [fetch],
  );

  useEffect(() => {
    const controller = new AbortController();

    if (value) {
      getCourse(Number(value), { signal: controller.signal }).then(
        (response) =>
          response.success && setCourses((prevCourses) => [...prevCourses, response.data]),
        // TODO don't reset. unique table
      );
    }
    return () => {
      controller.abort();
    };
  }, [value]);

  return (
    <Select
      onFocus={() => fetch()}
      allowClear
      style={{ width: '100%' }}
      value={value}
      onChange={onChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      onSearch={onSearch}
      placeholder="Select a course"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {courses.map((course) => (
        <Select.Option key={course.id} value={course.id}>
          {course.title}
        </Select.Option>
      ))}
    </Select>
  );
};

export default CourseSelect;
