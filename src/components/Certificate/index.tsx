import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';
import { certificates as fetchCertificates } from '@/services/escola-lms/certificate';
import { FormattedMessage } from 'umi';
import { useCallback } from 'react';

export const CertificatSelector: React.FC<{
  value?: number;
  onChange: (value: number) => void;
}> = ({ value, onChange }) => {
  const [fetching, setFetching] = useState(false);
  const [certificates, setCertificates] = useState<API.CERTIFICATE[]>([]);
  const [currCertificate, setCurrCertificate] = useState<API.CERTIFICATE>();

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
          setCertificates(response.data);
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
      if (Array.isArray(value)) {
        setCurrCertificate(value.flat()[0]);
      } else {
        setCurrCertificate(
          certificates.filter((certificate) => certificate.id === value).flat()[0],
        );
      }
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
      // value={value}
      value={currCertificate ? `${currCertificate?.name}` : ''}
      onChange={onChange}
      showSearch
      onSearch={onSearch}
      placeholder={
        <FormattedMessage
          id="select_certificate_package"
          defaultMessage="Select certificate template"
        />
      }
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
