import React, { useState } from 'react';
import { Row, Col, Divider, Button, List, Typography, Alert } from 'antd';
import H5PContentSelect from '@/components/H5PContentSelect';
import { EditorContextProvider } from 'h5p-player/src/components/hh5p/context/index';
import Player from 'h5p-player/src/components/hh5p/player/index';
import type { XAPIEvent } from 'h5p-player/src/types/index';
import { FormattedMessage, Link } from 'umi';

export const H5PTopicPlayer: React.FC<{ id: string | number }> = ({ id }) => {
  const [XAPIEvents, setXAPIEvents] = useState<XAPIEvent[]>([]);
  return (
    <EditorContextProvider url={`${REACT_APP_API_URL}/api/hh5p`}>
      <Divider />
      <Player id={id} onXAPI={(event) => setXAPIEvents((prevState) => [...prevState, event])} />
      <Divider />
      <div style={{ overflow: 'auto', maxHeight: '200px' }}>
        <List
          dataSource={XAPIEvents}
          header="XAPI Events"
          renderItem={(item) => (
            <List.Item>
              <Typography.Text code>{JSON.stringify(item)}</Typography.Text>
            </List.Item>
          )}
        ></List>
      </div>
    </EditorContextProvider>
  );
};

export const H5PForm: React.FC<{ id: string; onChange: (value: string) => void }> = ({
  id,
  onChange,
}) => {
  const [previewId, setPreviewId] = useState<number>();
  return (
    <React.Fragment>
      <Row>
        <Col span={12}>
          <Row>
            <Col span={12}>
              <H5PContentSelect
                value={id}
                onChange={(value) => {
                  onChange(value);
                }}
              />
            </Col>
            <Col span={12}>
              <Button
                disabled={!id}
                onClick={() => {
                  setPreviewId(Number(id));
                }}
              >
                <FormattedMessage id="preview" />
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Alert
            message="H5P Info"
            description={
              <span>
                <FormattedMessage id="h5p.description.first" />
                <Link to="/h5ps/new">
                  <FormattedMessage id="h5p.description.second" />
                </Link>
                <FormattedMessage id="h5p.description.third" />
                <Link to="/h5ps">
                  <FormattedMessage id="h5p.description.fourth" />
                </Link>{' '}
                <FormattedMessage id="h5p.description.fifth" />
                <Button
                  size="small"
                  disabled={!id}
                  onClick={() => {
                    setPreviewId(Number(id));
                  }}
                >
                  <FormattedMessage id="preview" />
                </Button>
                <FormattedMessage id="h5p.description.sixth" />
              </span>
            }
            type="info"
          />
        </Col>
      </Row>
      {previewId && (
        <Row>
          <Col span={24}>
            <H5PTopicPlayer id={previewId} />
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
};

export default H5PForm;
