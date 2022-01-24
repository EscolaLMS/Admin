import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';

import {
  certificates as fetchCertificates,
  unassign as unassignCertificate,
  assign as postSetTemplate,
} from '@/services/escola-lms/certificate';
import { FormattedMessage } from 'umi';
import { useCallback } from 'react';
import { message } from 'antd';

export const UserSelect: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  allTemplates?: number[];
  courseId: number | string;
  value?: string | string[] | number | number[];
  onChange?: (value: string | string[] | number | number[]) => void;
}> = ({ value, onChange, multiple = false, allTemplates, courseId }) => {
  const [templates, setTemplates] = useState<API.CERTIFICATE[]>([]);
  const [fetching, setFetching] = useState(false);

  const cacheValues = useRef<number[]>();
  const cache = useRef<API.CERTIFICATE[]>();
  const abortController = useRef<AbortController>();

  const setUsersFromResponse = useCallback((responseUsers: API.CERTIFICATE[]) => {
    setTemplates((prevUsers) =>
      [...prevUsers, ...responseUsers].filter(
        (user, index, arr) => arr.findIndex((fuser) => fuser.id === user.id) === index,
      ),
    );
  }, []);

  useEffect(() => {
    cache.current = templates;
  }, [templates]);

  const fetch = useCallback((search?: string) => {
    setFetching(true);
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();
    fetchCertificates({ search }, { signal: abortController.current.signal })
      .then((response) => {
        if (response.success) {
          setUsersFromResponse(response.data);
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

  const onAssign = (val?: number | null) => {
    postSetTemplate(Number(val), { assignable_id: courseId })
      .then((response) => {
        if (response.success) {
          message.success(response.message);
        }
      })
      .catch((error: any) => {
        message.error(error.data.message);
        const values = value.filter((v) => v !== val);
        onChange(values);
      });
  };

  const onUnassign = (val?: number | null) => {
    unassignCertificate(Number(val), { assignable_id: courseId })
      .then((response) => {
        if (response.success) {
          message.success(response.message);
          const values = value.filter((v) => v !== val);
          onChange(values);
        }
      })
      .catch((error: any) => {
        message.error(error.data.message);
        const values = value.filter((v) => v !== val);
        onChange(values);
      });
  };

  function handleAssigment(arr: number[]) {
    if (cacheValues.current && arr) {
      const cacheArray = cacheValues.current;
      const newArray = arr;

      const unassigned = cacheArray.filter((x) => !newArray.includes(x));
      const assigned = newArray.filter((x) => !cacheArray.includes(x));

      if (unassigned) {
        unassigned.map((item) => {
          onUnassign(item);
        });
      }

      if (assigned) {
        assigned.map((item) => {
          onAssign(item);
        });
      }
    }
  }

  function handleChange(value_) {
    onChange(value_);
    const values = Array.isArray(value_) ? value_ : [value_];
    handleAssigment(values);
  }

  useEffect(() => {
    const controller = new AbortController();
    if (value) {
      const values = Array.isArray(value) ? value : [value];
      cacheValues.current = values;

      values
        .filter((id) => !cache.current?.find((user) => user.id === id))
        .forEach((v) => {
          const filtered = allTemplates.find((tamplate) => tamplate.id === v);
          if (filtered) setUsersFromResponse([filtered]);
        });
    }
    return () => {
      controller.abort();
    };
  }, [value]);

  return (
    <Select
      onFocus={() => fetch()}
      style={{ width: '100%' }}
      value={value}
      onChange={handleChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      onSearch={onSearch}
      placeholder={<FormattedMessage id="select_person" defaultMessage="Select a person" />}
      optionFilterProp="children"
      filterOption={(input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {templates.map((user) => (
        <Select.Option key={user.id} value={user.id}>
          {user.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default UserSelect;
