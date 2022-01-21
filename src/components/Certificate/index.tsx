import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';
import { certificates as fetchCertificates } from '@/services/escola-lms/certificate';
import { FormattedMessage } from 'umi';
import { useCallback } from 'react';

export const CertificatSelector: React.FC<{
  state?: {
    type: number;
  };
  value?: API.CERTIFICATE;
  onChange?: (value: number) => void;
}> = ({ value, onChange }) => {
  // const [template, setTemplate] = useState<API.CERTIFICATE[]>([]);
  const [fetching, setFetching] = useState(false);
  const [certificates, setCertificate] = useState<API.CERTIFICATE[]>([]);
  const [currCertificate, setCurrCertificate] = useState<API.CERTIFICATE[]>();

  const abortController = useRef<AbortController>();

  const fetch = useCallback((search?: string) => {
    setFetching(true);
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();
    fetchCertificates({ search }, { signal: abortController.current.signal })
      .then((response) => {
        if (response.success) {
          return Array.isArray(response.data) && setCertificate(response.data);
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
    console.log('aaa', value);
    if (Array.isArray(value)) {
      setCurrCertificate(value.flat()[0]);
    } else {
      setCurrCertificate(certificates.filter((certificate) => certificate.id === value).flat()[0]);
    }
  }, [value]);

  return (
    <Select
      onFocus={() => fetch()}
      allowClear
      style={{ width: '100%' }}
      value={currCertificate ? `${currCertificate?.name}` : undefined}
      // onChange={onChange}
      onChange={(changeValue: string) => onChange && onChange(changeValue)}
      showSearch
      onSearch={onSearch}
      placeholder={<FormattedMessage id="select_person" defaultMessage="Select a person" />}
      optionFilterProp="children"
      filterOption={(input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {certificates.map((certificate) => (
        <Select.Option key={certificate.id} value={certificate.id}>
          {certificate.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default CertificatSelector;
