import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';
import { Link } from 'umi';

import { scorms as fetchScorms } from '@/services/escola-lms/scorm';
import { useCallback } from 'react';

export const ScormSelect: React.FC<{
  state?: {
    type: number;
  };
  value?: number;
  onChange?: (value: string) => void;
}> = ({ value, onChange }) => {
  const [scorms, setScorms] = useState<API.SCORM[]>([]);
  const [fetching, setFetching] = useState(false);

  const abortController = useRef<AbortController>();

  const fetch = useCallback((search?: string) => {
    setFetching(true);
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();
    fetchScorms({ search }, { signal: abortController.current.signal })
      .then((response) => {
        if (response.success) {
          setScorms(response.data.data);
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
    fetch();
  }, [value]);

  return (
    <Select
      allowClear
      style={{ width: '100%' }}
      value={value?.toString()}
      onChange={onChange}
      showSearch
      onSearch={onSearch}
      placeholder="Select Scorm Package"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {scorms.map((scorm) => (
        <Select.Option key={scorm.id} value={scorm.id.toString()}>
          <React.Fragment>
            {scorm.id}:{' '}
            {scorm.scos.map((sco) => (
              <React.Fragment>
                {sco.title}
                {'  '}
                <Link key={sco.uuid} to={`/scorms/preview/${sco.uuid}`}>
                  preview
                </Link>
              </React.Fragment>
            ))}
          </React.Fragment>
        </Select.Option>
      ))}
    </Select>
  );
};

export default ScormSelect;
