import React, { useState, useCallback } from 'react';
import { Button, message } from 'antd';
import { FormattedMessage, useIntl } from 'umi';
import { userGroup as fetchUserGroup } from '@/services/escola-lms/user_groups';

export const UserGroupRow: React.FC<{
  id: number;
  onLoaded: (user: API.UserGroup) => void;
}> = ({ id, onLoaded }) => {
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const fetch = useCallback(() => {
    setLoading(true);
    const controller = new AbortController();

    fetchUserGroup(id, { signal: controller.signal })
      .then((response) => {
        setLoading(false);
        if (response.success) {
          onLoaded(response.data);
        }
      })
      .catch((error) => {
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
    };
  }, [id, onLoaded]);

  return (
    <Button loading={loading} onClick={fetch} size="small">
      <FormattedMessage id="user_group_id" />
      {id}
    </Button>
  );
};

export default UserGroupRow;
