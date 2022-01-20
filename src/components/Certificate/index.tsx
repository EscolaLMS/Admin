import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';
import { FormattedMessage } from 'umi';
import { certificates as fetchCertificates } from '@/services/escola-lms/certificate';
import { useCallback } from 'react';

export const CertificatSelector: React.FC<{
  value?: number;
  onChange?: (value: number) => void;
}> = ({ value, onChange }) => {
  const [certificates, setCertificates] = useState<API.CERTIFICATE[]>([]);
  const [fetching, setFetching] = useState(false);
  const [currCertificate, setCurrCertificate] = useState<API.CERTIFICATE[]>([]);
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
          return Array.isArray(response.data) && setCertificates(response.data);
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
    console.log('test', certificates, value);
    setCurrCertificate(certificates.filter((certificate) => certificate.id === value).flat()[0]);
  }, [certificates]);

  return (
    <Select
      allowClear
      style={{ width: '100%', minWidth: '300px' }}
      value={currCertificate ? `${currCertificate?.name}` : undefined}
      onChange={(changeValue: string) => onChange && onChange(changeValue)}
      showSearch
      onSearch={onSearch}
      placeholder={<FormattedMessage id="select_certificate_package" />}
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
