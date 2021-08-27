import React, { useState, useCallback } from 'react';
import { Button } from 'antd';

import { user as fetchUser } from '@/services/escola-lms/user';

export const UserRow: React.FC<{
  id: number;
  onLoaded: (user: API.UserItem) => void;
}> = ({ id, onLoaded }) => {
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(() => {
    setLoading(true);
    const controller = new AbortController();

    fetchUser(id, { signal: controller.signal })
      .then((response) => {
        setLoading(false);
        if (response.success) {
          onLoaded(response.data);
        }
      })
      .catch(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [id, onLoaded]);

  return (
    <Button loading={loading} onClick={fetch} size="small">
      User ID: {id}
    </Button>
  );
};

export default UserRow;
