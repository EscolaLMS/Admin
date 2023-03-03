import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';

import { users as fetchUsers, user as fetchUser } from '@/services/escola-lms/user';
import { FormattedMessage } from 'umi';
import { useCallback } from 'react';
import type { DefaultOptionType } from 'antd/lib/select';

export const UserSelect: React.FC<{
  state?: {
    type: number;
  };
  role?: string;
  multiple?: boolean;
  value?: string | string[] | number | number[] | API.UserItem[];
  onChange?: (
    value: string | string[] | number | number[],
    option: DefaultOptionType | DefaultOptionType[],
  ) => void;
  showEmail?: boolean;
  disabled?: boolean;
}> = ({ value, onChange, multiple = false, role, showEmail, disabled }) => {
  const [users, setUsers] = useState<API.UserItem[]>([]);
  const [fetching, setFetching] = useState(false);
  const [currUsers, setCurrUsers] = useState<number[]>([]);

  const cache = useRef<API.UserItem[]>();
  const abortController = useRef<AbortController>();

  const setUsersFromResponse = useCallback((responseUsers: API.UserItem[]) => {
    setUsers((prevUsers) =>
      [...prevUsers, ...responseUsers].filter(
        (user, index, arr) =>
          arr.findIndex((fuser) =>
            showEmail ? fuser.email === user.email : fuser.id === user.id,
          ) === index,
      ),
    );
  }, []);

  useEffect(() => {
    cache.current = users;
  }, [users]);

  const fetch = useCallback((search?: string) => {
    setFetching(true);
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();
    fetchUsers({ search, role }, { signal: abortController.current.signal })
      .then((response) => {
        if (response && response.success) {
          setUsersFromResponse(response.data);
          setFetching(false);
        }
      })
      .catch(() => setFetching(false));
  }, []);

  const onSearch = useCallback(
    (search: string) => {
      fetch(search);
    },
    [fetch],
  );

  const onDeselect = useCallback(() => {
    setCurrUsers([]);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    if (value) {
      const val = Array.isArray(value) ? value : [value];
      const values: number[] = val.map((user) => {
        if (typeof user === 'object') {
          return Number((user as API.UserItem).id);
        }
        return Number(user);
      });

      setCurrUsers(values);

      values
        .filter((id) => !cache.current?.find((user) => user.id === id))
        .forEach((v) => {
          fetchUser(Number(v), { signal: controller.signal }, false).then((response) => {
            if (response && response.success) {
              setUsersFromResponse([response.data]);
            }
          });
        });
    }
    return () => {
      controller.abort();
    };
  }, [value]);

  return (
    <Select
      disabled={disabled}
      onFocus={() => fetch()}
      allowClear
      style={{ width: '100%', minWidth: '150px' }}
      value={currUsers}
      onChange={onChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      onSearch={onSearch}
      onDeselect={onDeselect}
      placeholder={<FormattedMessage id="select_person" defaultMessage="Select a person" />}
      optionFilterProp="children"
      filterOption={(input, option) => {
        if (option && option.children) {
          return (
            String(`${option.user.name} ${option.user.email}`)
              .toLowerCase()
              .indexOf((input && input.toLowerCase()) || '') >= 0
          );
        }
        return true;
      }}
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {users.map((user) => (
        <Select.Option key={user.id} value={user.id} user={user}>
          {user.name} {showEmail && ` - ${user.email}`}
        </Select.Option>
      ))}
    </Select>
  );
};

export default UserSelect;
