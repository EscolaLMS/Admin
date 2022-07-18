import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';

import { roles as getRoles } from '@/services/escola-lms/roles';
import { FormattedMessage } from 'umi';
import { useCallback } from 'react';

export const UserRoleSelect: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string | string[] | number | number[];
  onChange?: (value: string | string[] | number | number[]) => void;
}> = ({ value, onChange, multiple = false }) => {
  const [roles, setRoles] = useState<API.Role[]>();
  const [fetching, setFetching] = useState(false);

  const cache = useRef<API.Role[]>();
  const abortController = useRef<AbortController>();

  const setRolesFromResponse = useCallback((responseUserRoles: API.Role[]) => {
    setRoles(responseUserRoles);
  }, []);

  useEffect(() => {
    cache.current = roles;
  }, [roles]);

  const fetch = useCallback(
    (search?: string) => {
      setFetching(true);
      if (abortController.current) {
        abortController.current.abort();
      }

      abortController.current = new AbortController();
      getRoles({ search })
        .then((response) => {
          if (response.success) {
            setRolesFromResponse(response.data);
          }
          setFetching(false);
        })
        .catch(() => setFetching(false));
    },
    [setRolesFromResponse],
  );

  const onSearch = useCallback(
    (search: string) => {
      fetch(search);
    },
    [fetch],
  );

  return (
    <Select
      onFocus={() => fetch()}
      allowClear
      style={{ width: '100%' }}
      value={value}
      onChange={onChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      onSearch={onSearch}
      placeholder={<FormattedMessage id="select_user_role" defaultMessage="Select role" />}
      optionFilterProp="children"
      filterOption={(input, option) => {
        if (option && option.children) {
          return option?.children?.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
        return true;
      }}
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {roles &&
        roles.map((role) => (
          <Select.Option key={role.id} value={role.name}>
            {role.name}
          </Select.Option>
        ))}
    </Select>
  );
};

export default UserRoleSelect;
