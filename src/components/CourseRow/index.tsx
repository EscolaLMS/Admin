import { getCourse as fetchCourse } from '@/services/escola-lms/course';
import { Button, message } from 'antd';
import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

export const CourseRow: React.FC<{
  id: number;
  onLoaded: (course: API.Course) => void;
  text?: React.ReactNode;
}> = ({ id, onLoaded, text }) => {
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const fetch = useCallback(() => {
    setLoading(true);
    const controller = new AbortController();

    fetchCourse(id, { signal: controller.signal })
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
      {text ?? (
        <>
          <FormattedMessage id="course_id" />
          {id}
        </>
      )}
    </Button>
  );
};

export default CourseRow;
