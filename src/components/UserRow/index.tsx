import { user as fetchUser } from '@/services/escola-lms/user';
import { Button, message } from 'antd';
import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

export const UserRow: React.FC<{
  id: number;
  onLoaded: (user: API.UserItem) => void;
  text?: React.ReactNode;
}> = ({ id, onLoaded, text }) => {
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
      .catch((error) => {
        hide();
        setLoading(false);
        if (error?.data?.message) {
          message.error(
            intl.formatMessage({
              id: error.data.message,
            }),
          );
        }
      });

    return () => {
      controller.abort();
      hide();
    };
  }, [id, onLoaded]);

  return (
    <Button loading={loading} onClick={fetch} size="small">
      {text ?? (
        <>
          <FormattedMessage id="user_id" />
          {id}
        </>
      )}
    </Button>
  );
};

export default UserRow;
