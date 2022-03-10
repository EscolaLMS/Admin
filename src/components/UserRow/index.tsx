import React, { useState, useCallback } from 'react';
import { Button, message } from 'antd';
import { FormattedMessage, useIntl } from 'umi';
import { user as fetchUser } from '@/services/escola-lms/user';

export const UserRow: React.FC<{
  id: number;
  onLoaded: (user: API.UserItem) => void;
}> = ({ id, onLoaded }) => {
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const fetch = useCallback(() => {
    setLoading(true);
    const hide = message.loading(
      intl.formatMessage({
        id: 'loading',
      }),
    );
    const controller = new AbortController();

    fetchUser(id, { signal: controller.signal })
      .then((response) => {
        setLoading(false);
        if (response.success) {
          onLoaded(response.data);
          hide();
        }
      })
      .catch(() => {
        hide();
        setLoading(false);
      });

    return () => {
      controller.abort();
      hide();
    };
  }, [id, onLoaded]);

  return (
    <Button loading={loading} onClick={fetch} size="small">
      <FormattedMessage id="user_id" />
      {id}
    </Button>
  );
};

export default UserRow;
