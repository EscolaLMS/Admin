import React, { useContext } from 'react';
import { useParams } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { EditorContextProvider, EditorContext } from '@escolalms/h5p-react';
import H5Player from '@/components/H5Player';
import { Divider, Row, Col } from 'antd';
declare const REACT_APP_API_URL: string;

import ProCard from '@ant-design/pro-card';
import { useIntl, FormattedMessage } from 'umi';
import './preview.css';

const H5PPreviewPage: React.FC<{ id: number | string }> = ({ id }) => {
  const intl = useIntl();

  const { state } = useContext(EditorContext);

  const cid = `cid-${id}`;

  const content =
    state.value === 'loaded' && state.settings?.contents && state.settings?.contents[cid];

  // eslint-disable-next-line no-nested-ternary
  const title = content ? content.title : id ? 'Loading Content...' : 'Preview Content';

  return (
    <PageContainer
      title={
        <>
          <FormattedMessage id="H5P_preview_title" />
          {` ${title}`}
        </>
      }
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'h5ps',
              breadcrumbName: intl.formatMessage({
                id: 'H5P',
              }),
            },
            {
              path: title,
              breadcrumbName: intl.formatMessage({
                id: 'preview',
              }),
            },
          ],
        },
      }}
    >
      <ProCard direction="column">
        <Row>
          <Col span={24}>
            <Divider />
            <H5Player id={Number(id)} />
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
    <EditorContextProvider url={`${REACT_APP_API_URL}/api/admin/hh5p`}>
      {h5p ? <H5PPreviewPage id={h5p} /> : <React.Fragment />}
    </EditorContextProvider>
  );
};
