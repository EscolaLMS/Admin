import type { IntlShape } from 'react-intl';

// The backend returns validation messages in English only (it ignores X-locale),
// so known rules are mapped to translation keys on the client.

export type UploadErrorMessage = {
  id: string;
  defaultMessage: string;
  values?: Record<string, string>;
};

// Laravel `mimes` rule, e.g. "The value field must be a file of type: mp4, ogg, webm, mov."
const MIMES_RULE = /must be a file of type: (.+?)\.?$/;

const getMessages = (body: unknown): string[] => {
  const { message, errors } = (body ?? {}) as { message?: unknown; errors?: unknown };
  const fieldMessages = errors && typeof errors === 'object' ? Object.values(errors).flat() : [];

  return [...fieldMessages, message].filter((m): m is string => typeof m === 'string');
};

export const getUploadErrorMessage = (body: unknown): UploadErrorMessage => {
  const types = getMessages(body)
    .map((message) => MIMES_RULE.exec(message)?.[1])
    .find(Boolean);

  if (types) {
    return {
      id: 'upload_error_invalid_file_type',
      defaultMessage: 'Invalid file type. Allowed types: {types}',
      values: { types },
    };
  }

  return { id: 'upload_error', defaultMessage: 'File upload failed' };
};

export const formatUploadError = (intl: IntlShape, body: unknown): string => {
  const { values, ...descriptor } = getUploadErrorMessage(body);
  return intl.formatMessage(descriptor, values);
};
