import React, { useContext, useState } from 'react';
import { useParams } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { EditorContextProvider, EditorContext, Player } from 'h5p-headless-player';

import { Divider, List, Typography, Row, Col } from 'antd';
import type { XAPIEvent } from 'h5p-headless-player';
import ProCard from '@ant-design/pro-card';

import './preview.css';

const H5PPreviewPage: React.FC<{ id: number | string }> = ({ id }) => {
  const [XAPIEvents, setXAPIEvents] = useState<XAPIEvent[]>([]);

  const { state } = useContext(EditorContext);

  const cid = `cid-${id}`;

  const content =
    state.value === 'loaded' && state.settings?.contents && state.settings?.contents[cid];

  // eslint-disable-next-line no-nested-ternary
  const title = content ? content.title : id ? 'Loading Content...' : 'Preview Content';

  return (
    <PageContainer
      title={`H5P. HTML5 Content Preview ${title}`}
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'h5ps',
              breadcrumbName: 'HP5s',
            },
            {
              path: title,
              breadcrumbName: 'Preview',
            },
          ],
        },
      }}
    >
      <ProCard direction="column">
        <Row>
          <Col span={24}>
            <Divider />
            <Player
              id={id}
              onXAPI={(event) => setXAPIEvents((prevState) => [...prevState, event])}
            />
            <Divider />
            <div style={{ overflow: 'auto', maxHeight: '200px' }}>
              <List
                bordered
                dataSource={XAPIEvents}
                header="XAPI Events"
                renderItem={(item) => (
                  <List.Item>
                    <Typography.Text code>{JSON.stringify(item)}</Typography.Text>
                  </List.Item>
                )}
              ></List>
            </div>
          </Col>
        </Row>
      </ProCard>
    </PageContainer>
  );
};

export default () => {
  const params = useParams<{ h5p?: string }>();
  const { h5p } = params;
  return (
    <EditorContextProvider url={`${REACT_APP_API_URL}/api/hh5p`}>
      {h5p ? <H5PPreviewPage id={h5p} /> : <React.Fragment />}
    </EditorContextProvider>
  );
};
