import React, { useState } from 'react';
import { Row, Col, Divider, Button, List, Typography, Modal } from 'antd';
import H5PContentSelect from '@/components/H5PContentSelect';
import { EditorContextProvider, Player } from 'h5p-headless-player';
import type { XAPIEvent } from 'h5p-headless-player';
import UploadH5P from '@/components/H5P/upload';

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
      <Row gutter={8}>
        <Col span={4}>
          <Typography>Reuse existing</Typography>
        </Col>

        <Col span={12}>
          <H5PContentSelect
            value={id}
            onChange={(value) => {
              onChange(value);
            }}
          />
        </Col>

        <Col span={8}>
          <Button
            disabled={!id}
            onClick={() => {
              setPreviewId(Number(id));
            }}
          >
            Preview
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row gutter={8}>
        <Col span={4}>
          <Typography>Create new</Typography>
        </Col>

        <Col span={12}>
          <UploadH5P
            onSuccess={(data) => {
              if (data.id) {
                onChange(String(data.id));
              }
            }}
            onError={() => console.log('error')}
          />
        </Col>

        <Col span={8}>
          <Button type="primary">Open new content editor</Button>
        </Col>
      </Row>

      <Modal
        width="80vw"
        onOk={() => setPreviewId(undefined)}
        onCancel={() => setPreviewId(undefined)}
        visible={!!previewId}
      >
        {previewId && <H5PTopicPlayer id={previewId} />}
      </Modal>
    </React.Fragment>
  );
};

export default H5PForm;
