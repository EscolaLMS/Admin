import { describe, expect, it } from '@jest/globals';
import { createIntl } from 'react-intl';

import plPL from '../../locales/pl-PL';
import { formatUploadError } from './uploadError';

const { upload_error, upload_error_unsupported_codec } = plPL;
const intl = createIntl({
  locale: 'pl-PL',
  messages: { upload_error, upload_error_unsupported_codec },
});

describe('formatUploadError', () => {
  it('translates the topic content codec error into the unsupported video format message', () => {
    const body = {
      success: false,
      message: 'Topic Content Validation fails',
      data: { value: ['Unsupported video codec: hevc. Allowed: h264.'] },
    };

    expect(formatUploadError(intl, body)).toBe(
      'Nieobsługiwany format wideo (kodek hevc). Dozwolony format: MP4 (H.264/AVC)',
    );
  });

  it('falls back to the generic translated message for any other failure', () => {
    const generic = 'Nie udało się przesłać pliku';

    expect(
      formatUploadError(intl, {
        message: 'The value field must be a file of type: mp4, ogg, webm, mov.',
        errors: { value: ['The value field must be a file of type: mp4, ogg, webm, mov.'] },
      }),
    ).toBe(generic);
    expect(formatUploadError(intl, undefined)).toBe(generic);
    expect(formatUploadError(intl, '<html>413 Request Entity Too Large</html>')).toBe(generic);
  });
});
