import React, { useState, useEffect, useCallback } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { Col, Row, Spin, Alert, message } from 'antd';
import {
  ContextlessEditor,
  type EditorSettings,
  type H5PEditorContent,
} from '@escolalms/h5p-react';

import { useTokenChangeListener } from '@/hooks/useTokenChangeListener';
import { editorSettings, updateContent } from '@/services/escola-lms/h5p';

const H5P_EDITOR_IFRAME_ID = 'h5p-editor';
enum EditorMessage {
  TokenChanged = 'TOKEN_CHANGED',
}

const sendNewTokenToIFrame = (newToken: string | null) => {
  const iframe = document.getElementById(H5P_EDITOR_IFRAME_ID) as HTMLIFrameElement | null;

  if (!iframe) {
    console.error(`There is no iframe with id '${H5P_EDITOR_IFRAME_ID}'`);
    return;
  }

  iframe.contentWindow?.postMessage({ type: EditorMessage.TokenChanged, token: newToken }, '*');
};

export const Editor: React.FC<{
  id: 'new' | number;
  onSubmitted: (id: number) => void;
  onLoaded?: (settings: API.H5PObject) => void;
}> = ({ id, onSubmitted, onLoaded }) => {
  const [settings, setEditorSettings] = useState<EditorSettings>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const intl = useIntl();
  const lang = intl.locale.split('-')[0];

  useTokenChangeListener(sendNewTokenToIFrame);

  useEffect(() => {
    if (id) {
      setLoading(true);
      editorSettings(id === 'new' ? undefined : id, lang)
        .then((data) => {
          if (data.success) {
            if (onLoaded) {
              onLoaded(data.data);
            }
            setEditorSettings(data.data);
          } else {
            setError(data.message);
          }
        })
        .catch((err: any) => err && setError(err.toString()))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const onSubmit = useCallback((data: H5PEditorContent) => {
    setLoading(true);
    updateContent(data, id === 'new' ? undefined : id)
      .then((responseData) => {
        if (responseData.success) {
          onSubmitted(responseData.data.id);
          message.success(
            <FormattedMessage
              id="h5p_edited"
              defaultMessage="H5P Element edited and saved successfully"
            />,
          );
        } else {
          setError(responseData.message);
        }
      })
      .catch((err: any) => err && setError(err.toString()))
      .finally(() => setLoading(false));
  }, []);

  if (!settings) {
    return (
      <Col>
        <Row justify="center" align="middle">
          {error && <Alert message={error} type="error" />}
          <Spin />
        </Row>
      </Col>
    );
  }

  return (
    <React.Fragment>
      {error && <Alert message={error} type="error" />}

      {settings && (
        <ContextlessEditor
          onError={(err: unknown) => console.error(err)}
          state={settings}
          allowSameOrigin
          onSubmit={onSubmit}
          loading={loading}
          lang={lang}
          iframeId={H5P_EDITOR_IFRAME_ID}
        />
      )}
    </React.Fragment>
  );
};

export default Editor;
