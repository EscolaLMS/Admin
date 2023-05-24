import React, { useCallback, useState } from 'react';
import { Button, message } from 'antd';
import { FormattedMessage, useIntl } from 'umi';
import { getGiftQuiz } from '@/services/escola-lms/gift_quiz';

export const GiftQuizRow: React.FC<{
  id: number;
  onLoaded: (giftQuiz: API.GiftQuiz) => void;
}> = ({ id, onLoaded }) => {
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const fetch = useCallback(() => {
    setLoading(true);
    const controller = new AbortController();

    getGiftQuiz(id, { signal: controller.signal })
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
    <Button size="small" loading={loading} onClick={fetch}>
      <FormattedMessage id="gift_quiz_id" defaultMessage="GIFT Quiz ID: " />
      {id}
    </Button>
  );
};

export default GiftQuizRow;
