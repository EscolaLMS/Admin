import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import { FormattedMessage } from 'umi';
import { getConsultation } from '@/services/escola-lms/consultations';

export const ConsultationRow: React.FC<{
  id: number;
  onLoaded: (course: API.Consultation) => void;
}> = ({ id, onLoaded }) => {
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(() => {
    setLoading(true);
    const controller = new AbortController();

    getConsultation(id, { signal: controller.signal })
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
      <FormattedMessage id="consultation_id" />
      {id}
    </Button>
  );
};

export default ConsultationRow;
