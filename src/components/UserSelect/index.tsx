import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';

import { users as fetchUsers, user as fetchUser } from '@/services/escola-lms/user';
import { FormattedMessage } from 'umi';
import { useCallback } from 'react';

export const UserSelect: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string | string[] | number | number[];
  onChange?: (value: string | string[] | number | number[]) => void;
}> = ({ value, onChange, multiple = false }) => {
  const [users, setUsers] = useState<API.UserItem[]>([]);
  const [fetching, setFetching] = useState(false);

  const cache = useRef<API.UserItem[]>();
  const abortController = useRef<AbortController>();

  const setUsersFromResponse = useCallback((responseUsers: API.UserItem[]) => {
    setUsers((prevUsers) =>
      [...prevUsers, ...responseUsers].filter(
        (user, index, arr) => arr.findIndex((fuser) => fuser.id === user.id) === index,
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
    fetchUsers({ search }, { signal: abortController.current.signal })
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

  useEffect(() => {
    const controller = new AbortController();

    if (value) {
      const values = Array.isArray(value) ? value : [value];

      values
        .filter((id) => !cache.current?.find((user) => user.id === id))
        .forEach((v) => {
          fetchUser(Number(v), { signal: controller.signal }).then((response) => {
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
      onFocus={() => fetch()}
      allowClear
      style={{ width: '100%' }}
      value={value}
      onChange={onChange}
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
      {users.map((user) => (
        <Select.Option key={user.id} value={user.id}>
          {user.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default UserSelect;
