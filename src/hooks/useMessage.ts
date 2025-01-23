import { getTranslationKeyAndModel } from '@/utils/response_map';
import { message } from 'antd';
import { useIntl } from 'umi';

type NotificationResponse = API.DefaultResponse<any>;

export const useShowNotification = () => {
  const intl = useIntl();

  const showNotification = (response: NotificationResponse) => {
    const { translationKey, model } = getTranslationKeyAndModel(response.message);

    const isSuccess = response.success && !('error' in response);

    if (translationKey) {
      message[isSuccess ? 'success' : 'error'](
        intl.formatMessage(
          {
            id: translationKey,
          },
          {
            id: model ? intl.formatMessage({ id: model.toLocaleLowerCase() }) : undefined,
          },
        ),
      );
    } else {
      message[isSuccess ? 'success' : 'error'](
        isSuccess
          ? response.message
            ? (response.message as string)
            : intl.formatMessage({
                id: 'updated_at',
              })
          : intl.formatMessage({
              id: 'notifications.unexpectedError',
            }),
      );
    }
  };

  return { showNotification };
};
