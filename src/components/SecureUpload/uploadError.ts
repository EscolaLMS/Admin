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
// Topic content validation, e.g. "Unsupported video codec: hevc. Allowed: h264."
const CODEC_RULE = /Unsupported video codec: (.+?)\. Allowed: (.+?)\.?$/;

// Field errors come under `errors` (Laravel validation) or `data` (topic content validation)
const getMessages = (body: unknown): string[] => {
  const { message, errors, data } = (body ?? {}) as {
    message?: unknown;
    errors?: unknown;
    data?: unknown;
  };
  const fieldMessages = [errors, data].flatMap((fields) =>
    fields && typeof fields === 'object' ? Object.values(fields).flat() : [],
  );

  return [...fieldMessages, message].filter((m): m is string => typeof m === 'string');
};

const findMatch = (messages: string[], rule: RegExp) =>
  messages.map((message) => rule.exec(message)).find(Boolean);

export const getUploadErrorMessage = (body: unknown): UploadErrorMessage => {
  const messages = getMessages(body);

  const mimes = findMatch(messages, MIMES_RULE);
  if (mimes) {
    return {
      id: 'upload_error_invalid_file_type',
      defaultMessage: 'Invalid file type. Allowed types: {types}',
      values: { types: mimes[1] },
    };
  }

  const codec = findMatch(messages, CODEC_RULE);
  if (codec) {
    return {
      id: 'upload_error_unsupported_codec',
      defaultMessage: 'Unsupported video codec: {codec}. Allowed: {allowed}',
      values: { codec: codec[1], allowed: codec[2] },
    };
  }

  return { id: 'upload_error', defaultMessage: 'File upload failed' };
};

export const formatUploadError = (intl: IntlShape, body: unknown): string => {
  const { values, ...descriptor } = getUploadErrorMessage(body);
  return intl.formatMessage(descriptor, values);
};
