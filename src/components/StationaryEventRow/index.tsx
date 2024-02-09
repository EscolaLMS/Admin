import { getStationaryEvent } from '@/services/escola-lms/stationary_events';
import { Button, message } from 'antd';
import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

export const StationaryEventRow: React.FC<{
  id: number;
  onLoaded: (model: EscolaLms.StationaryEvents.Models.StationaryEvent) => void;
}> = ({ id, onLoaded }) => {
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const fetch = useCallback(() => {
    setLoading(true);
    const controller = new AbortController();

    getStationaryEvent(id, { signal: controller.signal })
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
      <FormattedMessage id="stationary_event_id" />
      {id}
    </Button>
  );
};

export default StationaryEventRow;
