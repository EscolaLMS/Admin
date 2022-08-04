import React, { useState, useEffect } from 'react';
import { contentSettings } from '@/services/escola-lms/h5p';
import { ContextlessPlayer } from '@escolalms/h5p-react';
import type { EditorSettings } from '@escolalms/h5p-react';
import { useIntl } from 'umi';
import { Col, Row, Spin, Alert } from 'antd';
import ReactJson from 'react-json-view';
import { Divider, Typography } from 'antd';
const { Title } = Typography;
import type { XAPIEvent } from '@escolalms/h5p-react';

export const Player: React.FC<{
  id: 'new' | number;
  onXAPI?: (event: XAPIEvent) => void;
  onLoaded?: (settings: API.H5PObject) => void;
}> = ({ id, onXAPI, onLoaded }) => {
  const [settings, setEditorSettings] = useState<EditorSettings>();
  const [loading, setLoading] = useState<boolean>(false);
  const [XAPIEvents, setXAPIEvents] = useState<XAPIEvent[]>([]);
  const [error, setError] = useState<string>();

  const intl = useIntl();
  const lang = intl.locale.split('-')[0];

  useEffect(() => {
    if (id) {
      setLoading(true);
      contentSettings(id, lang)
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
      <ContextlessPlayer
        contentId={id}
        onError={(err: unknown) => console.error(err)}
        state={settings}
        allowSameOrigin
        loading={loading}
        onXAPI={(event: XAPIEvent) => {
          if (onXAPI) {
            onXAPI(event);
          } else {
            setXAPIEvents((prevState) => [...prevState, event]);
          }
        }}
      />

      {!onXAPI && (
        <React.Fragment>
          <Divider />
          <div style={{ overflow: 'auto', maxHeight: '400px' }}>
            <Title level={5}>XAPI Events</Title>
            <ReactJson src={XAPIEvents} />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Player;
