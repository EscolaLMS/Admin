import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';

import { course as fetchCourses, getCourse as fetchCourse } from '@/services/escola-lms/course';
import { FormattedMessage } from 'umi';
import { useCallback } from 'react';
import type { DefaultOptionType } from 'antd/lib/select';

export const CourseSelect: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string | string[] | number | number[] | API.Course[];
  onChange?: (
    value: string | string[] | number | number[],
    option: DefaultOptionType | DefaultOptionType[],
  ) => void;
  showId?: boolean;
  disabled?: boolean;
}> = ({ value, onChange, multiple = false, showId, disabled }) => {
  const [courses, setCourses] = useState<API.Course[]>([]);
  const [fetching, setFetching] = useState(false);
  const [currUsers, setCurrUsers] = useState<number[]>([]);

  const cache = useRef<API.Course[]>();
  const abortController = useRef<AbortController>();

  const setCoursesFromResponse = useCallback((responseCourses: API.Course[]) => {
    setCourses((prevUsers) =>
      [...prevUsers, ...responseCourses].filter(
        (course, index, arr) =>
          arr.findIndex((fCourse) =>
            showId ? fCourse?.id === course?.id : fCourse?.title === course?.title,
          ) === index,
      ),
    );
  }, []);

  useEffect(() => {
    cache.current = courses;
  }, [courses]);

  const fetch = useCallback((title?: string) => {
    setFetching(true);
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();
    fetchCourses({ title }, { signal: abortController.current.signal })
      .then((response) => {
        if (response?.success) {
          setCoursesFromResponse(response.data);
          setFetching(false);
        }
      })
      .catch(() => setFetching(false));
  }, []);

  const onDeselect = useCallback(() => {
    setCurrUsers([]);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    if (value) {
      const val = Array.isArray(value) ? value : [value];
      const values: number[] = val.map((course) => {
        if (typeof course === 'object') {
          return Number((course as API.Course)?.id);
        }
        return Number(course);
      });

      setCurrUsers(values);

      values
        .filter((id) => !cache.current?.find((course) => course?.id === id))
        .forEach((v) => {
          fetchCourse(Number(v), { signal: controller.signal }, false).then((response) => {
            if (response && response.success) {
              setCoursesFromResponse([response.data]);
            }
          });
        });
    }
    return () => {
      controller.abort();
    };
  }, [value]);

  const handleOnChange = useCallback(
    (
      changedValue: string | string[] | number | number[],
      changedOption: DefaultOptionType | DefaultOptionType[],
    ) => {
      if (!changedValue) {
        onDeselect();
      }
      if (onChange) {
        onChange(changedValue, changedOption);
      }
    },
    [onChange, onDeselect],
  );

  return (
    <Select
      disabled={disabled}
      onFocus={() => fetch()}
      allowClear
      style={{ width: '100%', minWidth: '150px' }}
      value={currUsers}
      onChange={handleOnChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      onSearch={fetch}
      onDeselect={onDeselect}
      placeholder={<FormattedMessage id="select_course" defaultMessage="Select a course" />}
      optionFilterProp="children"
      filterOption={(input, option) => {
        if (option && option.children) {
          return (
            String(`${option.course?.title} ${option.course?.id}`)
              .toLowerCase()
              .indexOf((input && input.toLowerCase()) || '') >= 0
          );
        }
        return true;
      }}
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {courses.map((course) => (
        <Select.Option key={course?.id} value={course?.id} course={course}>
          {course?.title} {showId && ` - ${course.id}`}
        </Select.Option>
      ))}
    </Select>
  );
};

export default CourseSelect;
