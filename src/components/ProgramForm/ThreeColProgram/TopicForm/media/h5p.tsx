import React, { useState } from 'react';
import { Row, Col, Divider, Button, Typography } from 'antd';
import H5PContentSelect from '@/components/H5PContentSelect';
import { EditorContextProvider } from '@escolalms/h5p-react';

import UploadH5P from '@/components/H5P/upload';
import { useIntl, FormattedMessage } from 'umi';

import { H5PForm as H5PFormNew } from '@/components/H5PForm';
import H5Player from '@/components/H5Player';
import ProCard from '@ant-design/pro-card';

declare const REACT_APP_API_URL: string;

export const H5PFormEdit: React.FC<{ onData: (id: number) => void; id: 'new' | number }> = ({
  onData,
  id,
}) => {
  const intl = useIntl();
  const lang = intl.locale.split('-')[0];

  return (
    <EditorContextProvider
      defaultLang={lang}
      url={`${window.REACT_APP_API_URL || REACT_APP_API_URL}/api/admin/hh5p`}
    >
      <H5PFormNew id={id === 'new' ? undefined : id} onSubmit={(hid) => onData(hid)} />
    </EditorContextProvider>
  );
};

export const H5PTopicPlayer: React.FC<{ id: string | number }> = ({ id }) => {
  const intl = useIntl();
  const lang = intl.locale.split('-')[0];
  return (
    <EditorContextProvider
      defaultLang={lang}
      url={`${window.REACT_APP_API_URL || REACT_APP_API_URL}/api/admin/hh5p`}
    >
      <H5Player id={Number(id)} />
    </EditorContextProvider>
  );
};

export const H5PForm: React.FC<{
  id: string;
  onChange: (value: string) => void;
}> = ({ id, onChange }) => {
  const intl = useIntl();
  const [editId, setEditId] = useState<number | 'new'>();
  return (
    <React.Fragment>
      <Row gutter={16}>
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
              setEditId(Number(id));
            }}
          />
        </Col>
      </Row>

      <Row
        style={{
          marginTop: '30px',
        }}
      >
        <Col span={24}>
          <ProCard
            tabs={{
              type: 'card',
              defaultActiveKey: 'preview',
              onChange: (key) => {
                if (key === 'edit') {
                  setEditId(Number(id));
                }
              },
            }}
          >
            <ProCard.TabPane key="preview" disabled={!id} tab={<FormattedMessage id="preview" />}>
              {id && <H5PTopicPlayer id={id} />}
            </ProCard.TabPane>
            <ProCard.TabPane key="edit" disabled={!id} tab={<FormattedMessage id="edit" />}>
              {editId && (
                <H5PFormEdit
                  id={editId}
                  onData={(hid) => {
                    onChange(String(hid));
                    setEditId(undefined);
                  }}
                />
              )}
            </ProCard.TabPane>
          </ProCard>
        </Col>
      </Row>

      <Divider />

      <Row gutter={16}>
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
    </React.Fragment>
  );
};

export default H5PForm;
