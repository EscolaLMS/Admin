import { studentUserGroup as fetchStudentUserGroup } from '@/services/escola-lms/student_user_groups';
import { Button, message } from 'antd';
import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

export const StudentsRow: React.FC<{
  id: number;
  onLoaded: (students: API.StudentUserGroup) => void;
}> = ({ id, onLoaded }) => {
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const fetch = useCallback(() => {
    setLoading(true);
    const controller = new AbortController();
    fetchStudentUserGroup(id)
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
      <FormattedMessage id="groupId" defaultMessage="Group ID: " />
      {id}
    </Button>
  );
};

export default StudentsRow;
