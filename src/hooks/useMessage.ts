import { getTranslationKeyAndModel } from '@/utils/response_map';
import { message } from 'antd';
import { useIntl } from 'umi';

export const useShowNotification = () => {
  const intl = useIntl();

  const showNotification = (serverMessage: string) => {
    const { translationKey, model } = getTranslationKeyAndModel(serverMessage);

    const isSuccess = serverMessage.toLowerCase().includes('successfully');

    if (translationKey) {
      message[isSuccess ? 'success' : 'error'](
        intl.formatMessage(
          {
            id: translationKey,
          },
          {
            id: intl.formatMessage({ id: model }),
          },
        ),
      );
    } else {
      message[isSuccess ? 'success' : 'error'](serverMessage);
    }
  };

  return { showNotification };
};
