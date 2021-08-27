import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';

import { user as fetchUser } from '@/services/escola-lms/user';
import { Link } from 'umi';

export const UserLink: React.FC<{
  id: number;
}> = ({ id }) => {
  const [user, setUser] = useState<API.UserItem>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    fetchUser(id, { signal: controller.signal })
      .then((response) => {
        setLoading(false);
        if (response.success) {
          setUser(response.data);
        }
      })
      .catch(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [id]);

  if (loading) {
    return (
      <Link to={`/users/${id}`}>
        {id}
        <Spin />
      </Link>
    );
  }

  return <Link to={`/users/${id}`}>{user && user.name}</Link>;
};

export default UserLink;
