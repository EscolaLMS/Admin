import { message } from 'antd';

type IntlShape = ReturnType<typeof import('umi').useIntl>;

export const notifyResult = (
  success: boolean,
  intl: IntlShape,
  onSuccess?: () => void,
): boolean => {
  if (!success) {
    message.error(intl.formatMessage({ id: 'error', defaultMessage: 'error' }));
    return false;
  }

  message.success(intl.formatMessage({ id: 'success', defaultMessage: 'success' }));
  onSuccess?.();
  return true;
};
