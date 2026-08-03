import { message } from 'antd';

type IntlShape = ReturnType<typeof import('umi').useIntl>;

/**
 * Standard success/error toast for a `DefaultResponse`-style result, shared by the
 * project solution drawers. On success it fires `onSuccess`; returns whether it succeeded.
 */
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