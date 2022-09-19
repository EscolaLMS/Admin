import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin, Modal, Button, Space } from 'antd';
import { FormattedMessage } from 'umi';
import { scorms as fetchScorms } from '@/services/escola-lms/scorm';
import { useCallback } from 'react';
import ScormPreview from '@/components/Scorm/preview';

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
  const [previewUuid, setPreviewUuid] = useState<string>();
  const abortController = useRef<AbortController>();

  const fetch = useCallback((search?: string) => {
    setFetching(true);
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();
    fetchScorms({ search, pageSize: 0 }, { signal: abortController.current.signal })
      .then((response) => {
        if (response.success) {
          return Array.isArray(response.data.data) && setScorms(response.data.data);
        }
        setFetching(false);
      })
      .catch(() => setFetching(false));
  }, []);

  const onSearch = useCallback(
    (search: string) => {
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
    <React.Fragment>
      {previewUuid && (
        <Modal
          width={'80vw'}
          bodyStyle={{ height: '70vh' }}
          visible={true}
          onOk={() => setPreviewUuid(undefined)}
          onCancel={() => setPreviewUuid(undefined)}
        >
          <ScormPreview uuid={previewUuid} />
        </Modal>
      )}

      <Space>
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
          filterOption={(input, option) => {
            if (option && option.children) {
              return option?.children?.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0;
            }
            return true;
          }}
          notFoundContent={fetching ? <Spin size="small" /> : null}
        >
          {scorms.map((scorm) => (
            <Select.OptGroup key={scorm.id} label={`${scorm.id}: ${scorm.version}`}>
              <React.Fragment>
                {scorm.scos.map((sco) => (
                  <Select.Option key={sco.id} value={`${sco.id}: ${sco.title}`}>
                    {sco.title}
                  </Select.Option>
                ))}
              </React.Fragment>
            </Select.OptGroup>
          ))}
        </Select>
        {currSco && (
          <Button
            key={value}
            onClick={() => {
              setPreviewUuid(currSco?.uuid);
            }}
          >
            <FormattedMessage id="preview" />
          </Button>
        )}
      </Space>
    </React.Fragment>
  );
};

export default ScormSelect;
