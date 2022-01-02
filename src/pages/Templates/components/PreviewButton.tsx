import React, { useState } from 'react';
import { Alert, Button } from 'antd';
import { preview as previewTemplate } from '@/services/escola-lms/templates';
import { FormattedMessage } from 'umi';
import { useCallback } from 'react';

type PreviewButtonState =
  | {
      state: 'ready';
    }
  | {
      state: 'loading';
    }
  | {
      state: 'loaded';
      data: Record<string, string>;
      message: React.ReactNode;
    }
  | {
      state: 'error';
      error: string;
    };

const PreviewButton: React.FC<{
  type: 'email' | 'pdf';
  disabled: boolean;
  id: number;
  onPreviewData?: (data: any) => void;
}> = ({ disabled = false, id, onPreviewData }) => {
  const [state, setState] = useState<PreviewButtonState>({ state: 'ready' });

  const onClick = useCallback(() => {
    setState({ state: 'loading' });
    previewTemplate(id)
      .then((data) => {
        if (data.success) {
          if (onPreviewData) {
            onPreviewData(data.data);
          }
          if (data.data.sent && data.data.to) {
            setState({
              state: 'loaded',
              data: data.data,
              message: `email sent to ${data.data.to}`,
            });
          } else if (data.data.url) {
            setState({
              state: 'loaded',
              data: data.data,
              message: (
                <React.Fragment>
                  Download{' '}
                  <a target="_blank" href={data.data.url}>
                    {data.data.filename}
                  </a>
                </React.Fragment>
              ),
            });
          } else {
            setState({ state: 'loaded', data: data.data, message: data.message });
          }
        } else {
          setState({ state: 'error', error: data.message });
        }
      })
      .catch(() => {
        setState({ state: 'error', error: 'error' });
      });
  }, [id]);
  return (
    <React.Fragment>
      <Button
        type="primary"
        loading={state.state === 'loading'}
        disabled={disabled}
        onClick={onClick}
      >
        <FormattedMessage id="preview" />
      </Button>
      {state.state === 'loaded' && (
        <Alert
          message={state.message}
          type="success"
          closable
          onClose={() => setState({ state: 'ready' })}
        ></Alert>
      )}
      {state.state === 'error' && (
        <Alert
          message={state.error}
          type="error"
          closable
          onClose={() => setState({ state: 'ready' })}
        ></Alert>
      )}
    </React.Fragment>
  );
};

export default PreviewButton;
