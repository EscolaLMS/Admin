import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';
import { templates as fetchTemplates } from '@/services/escola-lms/templates';
import { FormattedMessage } from 'umi';
import { useCallback } from 'react';

export const TemplateSelect: React.FC<{
  params?: EscolaLms.Templates.Http.Requests.TemplateListingRequest;
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string | string[] | number | number[];
  onChange?: (value: string | string[] | number | number[]) => void;
}> = ({ value, onChange, multiple = false, params }) => {
  const [templates, setTemplates] = useState<API.Template[]>([]);
  const [fetching, setFetching] = useState(false);
  const [currTemplates, setCurrTemplates] = useState<number[]>([]);

  const abortController = useRef<AbortController>();

  const fetch = useCallback(() => {
    setFetching(true);
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();
    fetchTemplates(params, { signal: abortController.current.signal })
      .then((response) => {
        if (response.success) {
          setTemplates(response.data);
        }
        setFetching(false);
      })
      .catch(() => setFetching(false));
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    if (value) {
      const val = Array.isArray(value) ? value : [value];
      const values: number[] = val.map((template) => {
        if (typeof template === 'object') {
          return Number((template as API.Template).id);
        }
        return Number(template);
      });

      setCurrTemplates(values);
    }
    return () => {
      controller.abort();
    };
  }, [value]);

  return (
    <Select
      onFocus={() => fetch()}
      allowClear
      style={{ width: '100%', minWidth: '400px' }}
      value={currTemplates}
      onChange={onChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      placeholder={<FormattedMessage id="select_template" defaultMessage="Select a template" />}
      optionFilterProp="children"
      filterOption={(input, option) => {
        if (option && option.children) {
          return (
            option?.children
              ?.toString()
              .toLowerCase()
              .indexOf((input && input.toLowerCase()) || '') >= 0
          );
        }
        return false;
      }}
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {templates.map((template) => (
        <Select.Option key={template.id} value={template.id}>
          {template.name}{' '}
          <small>
            <FormattedMessage id={template.channel.split('\\').pop()} />:
            {template.event && <FormattedMessage id={template.event.split('\\').pop()} />}
          </small>
        </Select.Option>
      ))}
    </Select>
  );
};

export default TemplateSelect;
