import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import { FormattedMessage } from 'umi';
import { getWebinar } from '@/services/escola-lms/webinars';

export const WebinarRow: React.FC<{
  id: number;
  onLoaded: (course: API.Webinar) => void;
}> = ({ id, onLoaded }) => {
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(() => {
    setLoading(true);
    const controller = new AbortController();

    getWebinar(id, { signal: controller.signal })
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
      <FormattedMessage id="webinar_id" />
      {id}
    </Button>
  );
};

export default WebinarRow;
