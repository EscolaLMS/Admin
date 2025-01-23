import type { IntlShape } from 'react-intl';

export const createRequiredFieldValidator = (intl: IntlShape) => {
  return async (_: unknown, value: string | number) => {
    if (!value) {
      return Promise.reject(
        new Error(
          intl.formatMessage({
            id: 'field_required',
            defaultMessage: 'field_required',
          }),
        ),
      );
    }
    return Promise.resolve();
  };
};
