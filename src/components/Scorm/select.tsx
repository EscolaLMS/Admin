import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';
import { FormattedMessage, Link } from 'umi';
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
  const [currSco, setCurrSco] = useState<API.SCORM_SCO | undefined>();
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
          return Array.isArray(response.data.data) && setScorms(response.data.data);
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

  useEffect(() => {
    setCurrSco(scorms.map((scorm) => scorm.scos.filter((sco) => sco.id === value)).flat()[0]);
  }, [scorms]);

  return (
    <Select
      allowClear
      style={{ width: '100%', minWidth: '300px' }}
      value={currSco ? `${currSco?.id}: ${currSco?.title}` : undefined}
      onChange={(changeValue: string) =>
        onChange && onChange(changeValue ? changeValue.split(':')[0] : changeValue)
      }
      showSearch
      onSearch={onSearch}
      placeholder={<FormattedMessage id="select_scorm_package" />}
      optionFilterProp="children"
      filterOption={(input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {scorms.map((scorm) => (
        <Select.OptGroup key={scorm.id} label={`${scorm.id}: ${scorm.version}`}>
          <React.Fragment>
            {scorm.scos.map((sco) => (
              <Select.Option key={sco.id} value={`${sco.id}: ${sco.title}`}>
                {sco.title}
                {'  '}
                <Link key={sco.uuid} to={`/scorms/preview/${sco.uuid}`}>
                  <FormattedMessage id="preview" />
                </Link>
              </Select.Option>
            ))}
          </React.Fragment>
        </Select.OptGroup>
      ))}
    </Select>
  );
};

export default ScormSelect;
