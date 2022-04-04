import React, { useState } from 'react';
import { Row, Col, Divider, Button, Typography, Modal } from 'antd';
import H5PContentSelect from '@/components/H5PContentSelect';
import { EditorContextProvider } from '@escolalms/h5p-react';

import UploadH5P from '@/components/H5P/upload';
import { useIntl, FormattedMessage } from 'umi';

import { H5PForm as H5PFormNew } from '@/components/H5PForm';
import H5Player from '@/components/H5Player';
declare const REACT_APP_API_URL: string;

export const H5PFormNewModal: React.FC<{ onData: (id: number) => void; id: 'new' | number }> = ({
  onData,
  id,
}) => (
  <EditorContextProvider url={`${REACT_APP_API_URL}/api/admin/hh5p`}>
    <H5PFormNew id={id === 'new' ? undefined : id} onSubmit={(hid) => onData(hid)} />
  </EditorContextProvider>
);

export const H5PTopicPlayer: React.FC<{ id: string | number }> = ({ id }) => {
  return (
    <EditorContextProvider url={`${REACT_APP_API_URL}/api/admin/hh5p`}>
      <Divider />
      <H5Player id={Number(id)} />
    </EditorContextProvider>
  );
};

export const H5PForm: React.FC<{
  id: string;
  onChange: (value: string) => void;
}> = ({ id, onChange }) => {
  const intl = useIntl();
  const [previewId, setPreviewId] = useState<number>();
  const [editId, setEditId] = useState<number | 'new'>();
  return (
    <React.Fragment>
      <Row gutter={8}>
        <Col span={4}>
          <Typography>
            <FormattedMessage id="reuse_existing" />
          </Typography>
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
            <FormattedMessage id="preview" />
          </Button>

          <Button type="primary" disabled={!id} onClick={() => setEditId(Number(id))}>
            <FormattedMessage id="edit" />
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row gutter={8}>
        <Col span={4}>
          <Typography>
            <FormattedMessage id="create_new" />
          </Typography>
        </Col>

        <Col span={12}>
          <UploadH5P
            onSuccess={(data) => {
              if (data.data.id) {
                onChange(String(data.data.id));
              }
            }}
            onError={() =>
              console.log(
                intl.formatMessage({
                  id: 'error',
                }),
              )
            }
          />
        </Col>

        <Col span={8}>
          <Button type="primary" onClick={() => setEditId('new')}>
            <FormattedMessage id="open_new_content_editor" />
          </Button>
        </Col>
      </Row>
      <Modal
        okButtonProps={{ disabled: true, hidden: true }}
        width="80vw"
        onCancel={() => setEditId(undefined)}
        visible={!!editId}
      >
        {editId && (
          <H5PFormNewModal
            id={editId}
            onData={(hid) => {
              onChange(String(hid));
              setEditId(undefined);
            }}
          />
        )}
      </Modal>

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
