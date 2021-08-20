import React from 'react';
import { useParams } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { Divider, Row, Col } from 'antd';
import ProCard from '@ant-design/pro-card';

import './preview.css';

const H5PPreviewPage: React.FC = () => {
  const params = useParams<{ uuid?: string }>();

  const { uuid } = params;

  return (
    <PageContainer
      title={`H5P. Scorm Content Preview`}
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'scorms',
              breadcrumbName: 'Scorms',
            },
            {
              path: 'Preview',
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
            <iframe
              className="scorm-preview-player"
              src={`${REACT_APP_API_URL}/api/scorm/play/${uuid}`}
            />
          </Col>
        </Row>
      </ProCard>
    </PageContainer>
  );
};

export default H5PPreviewPage;
