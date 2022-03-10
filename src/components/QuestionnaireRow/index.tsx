import React, { useState, useCallback } from 'react';
import { Button, message } from 'antd';
import { FormattedMessage, useIntl } from 'umi';
import { questionnaireById } from '@/services/escola-lms/questionnaire';

export const QuestionnaireRow: React.FC<{
  id: number;
  onLoaded: (questionnaire: API.Questionnaire) => void;
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

    questionnaireById(id)
      .then((response) => {
        setLoading(false);
        if (response.success) {
          onLoaded(response.data);
          hide();
        }
      })
      .catch(() => {
        setLoading(false);
        hide();
      });

    return () => {
      controller.abort();
      hide();
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