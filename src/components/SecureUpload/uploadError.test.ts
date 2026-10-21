import { describe, expect, it } from '@jest/globals';

import { getUploadErrorMessage } from './uploadError';

describe('getUploadErrorMessage', () => {
  it('maps the backend mimes rule to the translated invalid file type message', () => {
    const body = {
      message: 'The value field must be a file of type: mp4, ogg, webm, mov.',
      errors: { value: ['The value field must be a file of type: mp4, ogg, webm, mov.'] },
    };

    expect(getUploadErrorMessage(body)).toEqual({
      id: 'upload_error_invalid_file_type',
      defaultMessage: 'Invalid file type. Allowed types: {types}',
      values: { types: 'mp4, ogg, webm, mov' },
    });
  });

  it('finds the mimes rule among several field errors', () => {
    const body = {
      message: 'The title field is required. (and 1 more error)',
      errors: {
        title: ['The title field is required.'],
        value: ['The value field must be a file of type: mp4, ogg, webm, mov.'],
      },
    };

    expect(getUploadErrorMessage(body).values).toEqual({ types: 'mp4, ogg, webm, mov' });
  });

  it('falls back to the generic translated message for any other failure', () => {
    const generic = { id: 'upload_error', defaultMessage: 'File upload failed' };

    expect(getUploadErrorMessage({ message: 'The value has an unsupported video codec.' })).toEqual(
      generic,
    );
    expect(getUploadErrorMessage(undefined)).toEqual(generic);
    expect(getUploadErrorMessage('<html>413 Request Entity Too Large</html>')).toEqual(generic);
  });
});
