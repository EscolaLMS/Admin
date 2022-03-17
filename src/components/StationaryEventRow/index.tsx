import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import { FormattedMessage } from 'umi';
import { getStationaryEvent } from '@/services/escola-lms/stationary_events';

export const StationaryEventRow: React.FC<{
  id: number;
  onLoaded: (model: EscolaLms.StationaryEvents.Models.StationaryEvent) => void;
}> = ({ id, onLoaded }) => {
  const [loading, setLoading] = useState(false);

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
      .catch(() => setLoading(false));

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
