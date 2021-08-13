import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';

import { users as fetchUsers, user as fetchUser } from '@/services/escola-lms/user';
import { useCallback } from 'react';

export const UserSelect: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}> = ({ value, onChange, multiple = false }) => {
  const [users, setUsers] = useState<API.UserItem[]>([]);
  const [fetching, setFetching] = useState(false);

  const abortController = useRef<AbortController>();

  const fetch = useCallback((search?: string) => {
    setFetching(true);
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();
    fetchUsers({ search }, { signal: abortController.current.signal })
      .then((response) => {
        if (response.success) {
          setUsers(response.data.data);
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
    const controler = new AbortController();

    if (value) {
      fetchUser(Number(value), { signal: controler.signal }).then(
        (user) => user.success && setUsers([user.data]),
      );
    }
    return () => {
      controler.abort();
    };
  }, [value]);

  return (
    <Select
      style={{ width: '100%' }}
      value={value}
      onChange={onChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      onSearch={onSearch}
      placeholder="Select a person"
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
