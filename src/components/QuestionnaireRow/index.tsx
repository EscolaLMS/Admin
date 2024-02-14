import { getQuestionnaire } from '@/services/escola-lms/questionnaire';
import { Button, message } from 'antd';
import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

export const QuestionnaireRow: React.FC<{
  id: number;
  onLoaded: (questionnaire: API.Questionnaire) => void;
  text?: React.ReactNode;
}> = ({ id, text, onLoaded }) => {
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

    getQuestionnaire(id)
      .then((response) => {
        setLoading(false);
        if (response.success) {
          onLoaded(response.data);
          hide();
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
        hide();
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
          <FormattedMessage id="questionnaire" />
          {id}
        </>
      )}
    </Button>
  );
};

export default QuestionnaireRow;
