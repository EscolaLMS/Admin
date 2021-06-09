import React, { useState, useEffect } from 'react';
import { Select } from 'antd';

import { users as fetchUsers } from '@/services/escola-lms/user';

export const UserSelect: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}> = ({ value, onChange, multiple = false }) => {
  const [users, setUsers] = useState<API.UserItem[]>([]);

  useEffect(() => {
    fetchUsers().then((response) => setUsers(response.data));
  }, []);

  return (
    <Select
      style={{ width: '100%' }}
      value={value}
      onChange={onChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
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
