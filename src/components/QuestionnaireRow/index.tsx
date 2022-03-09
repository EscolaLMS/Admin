import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import { FormattedMessage } from 'umi';
import { questionnaireById } from '@/services/escola-lms/questionnaire';

export const QuestionnaireRow: React.FC<{
  id: number;
  onLoaded: (questionnaire: API.Questionnaire) => void;
}> = ({ id, onLoaded }) => {
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(() => {
    setLoading(true);
    const controller = new AbortController();

    questionnaireById(id, { signal: controller.signal })
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
      <FormattedMessage id="questionnaire" />
      {id}
    </Button>
  );
};

export default QuestionnaireRow;
