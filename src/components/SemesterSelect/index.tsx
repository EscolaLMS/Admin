import { semesters as fetchSemesters } from '@/services/escola-lms/semester_subject';
import { Select, Spin } from 'antd';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'umi';

export const SemesterSelect: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string | string[] | number | number[];
  onChange?: (value: string | string[] | number | number[]) => void;
  onSelect?: (value: string | number) => void;
  onDeselect?: (value: string | number) => void;
  onClear?: () => void;
  loading?: boolean;
  disabled?: boolean;
}> = ({ value, onChange, onSelect, onDeselect, onClear, loading, disabled, multiple = false }) => {
  const [semesters, setSemesters] = useState<API.Semester[]>([]);
  const [fetching, setFetching] = useState(false);
  const cache = useRef<API.Semester[]>();
  const abortController = useRef<AbortController>();

  const setSemestersFromResponse = useCallback((responseSemesters: API.Semester[]) => {
    setSemesters((prevSemesters) =>
      [...prevSemesters, ...responseSemesters].filter(
        (semester, index, arr) => arr.findIndex((item) => item.id === semester.id) === index,
      ),
    );
  }, []);

  useEffect(() => {
    cache.current = semesters;
  }, [semesters]);

  const fetch = useCallback(
    (academicYearID?: string) => {
      setFetching(true);
      if (abortController.current) {
        abortController.current.abort();
      }

      abortController.current = new AbortController();
      fetchSemesters({ academicYearID }, { signal: abortController.current.signal })
        .then((response) => {
          if (response.success) {
            setSemesters(response.data);
          }
          setFetching(false);
        })
        .catch(() => setFetching(false));
    },
    [setSemestersFromResponse],
  );

  const onSearch = useCallback(
    (search: string) => {
      fetch(search);
    },
    [fetch],
  );

  return (
    <Select
      onSelect={onSelect}
      onDeselect={onDeselect}
      onClear={onClear}
      loading={loading}
      disabled={disabled}
      onFocus={() => fetch()}
      allowClear
      style={{ width: '100%' }}
      value={value}
      onChange={onChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      onSearch={onSearch}
      placeholder={<FormattedMessage id="select_semester" defaultMessage="Select semester" />}
      optionFilterProp="children"
      filterOption={(input, option) => {
        if (option && option.children) {
          return option?.children?.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
        return true;
      }}
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {semesters.map((item) => (
        <Select.Option key={item.id} value={item.id}>
          {`${item.name} ${item.speciality && ` (${item.speciality})`}`}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SemesterSelect;
