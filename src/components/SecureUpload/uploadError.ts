import type { IntlShape } from 'react-intl';

// The backend returns upload errors in English only (it ignores X-locale), so they are translated
// on the client. Topic content validation puts them under `data`, e.g.
// { "data": { "value": ["Unsupported video codec: hevc. Allowed: h264."] } }
const CODEC_RULE = /Unsupported video codec: (.+?)\./;

export const formatUploadError = (intl: IntlShape, body: unknown): string => {
  const { data } = (body ?? {}) as { data?: unknown };
  const codec = (data && typeof data === 'object' ? Object.values(data).flat() : [])
    .map((message) => (typeof message === 'string' ? CODEC_RULE.exec(message)?.[1] : undefined))
    .find(Boolean);

  // The allowed format shown is the client-approved MP4 (H.264/AVC), not the backend list
  return codec
    ? intl.formatMessage(
        {
          id: 'upload_error_unsupported_codec',
          defaultMessage:
            'Unsupported video format (codec {codec}). Allowed format: MP4 (H.264/AVC)',
        },
        { codec },
      )
    : intl.formatMessage({ id: 'upload_error', defaultMessage: 'File upload failed' });
};
