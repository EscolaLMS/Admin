import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';
import { FormattedMessage, Link } from 'umi';
import { scormssco as fetchScormsSco } from '@/services/escola-lms/scorm';
import { useCallback } from 'react';

export const ScormSelect: React.FC<{
  state?: {
    type: number;
  };
  value?: number;
  onChange?: (value: string) => void;
}> = ({ value, onChange }) => {
  const [scorms, setScorms] = useState<API.SCORM_SCO[]>([]);
  const [fetching, setFetching] = useState(false);

  const abortController = useRef<AbortController>();

  const fetch = useCallback((search?: string) => {
    setFetching(true);
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();
    fetchScormsSco({ search }, { signal: abortController.current.signal })
      .then((response) => {
        if (response.success) {
          return Array.isArray(response.data) && setScorms(response.data);
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
      placeholder={<FormattedMessage id="select_scorm_package" />}
      optionFilterProp="children"
      filterOption={(input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {scorms.map((sco) => (
        <Select.Option key={sco.id} value={sco.id.toString()}>
          <React.Fragment>
            {sco.id}:{' '}
            <React.Fragment>
              {sco.title}
              {'  '}
              <Link key={sco.uuid} to={`/scorms/preview/${sco.uuid}`}>
                <FormattedMessage id="preview" />
              </Link>
            </React.Fragment>
          </React.Fragment>
        </Select.Option>
      ))}
    </Select>
  );
};

export default ScormSelect;
