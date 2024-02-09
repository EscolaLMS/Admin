import ScormPreview from '@/components/Scorm/preview';
import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import { Col, Divider, Row } from 'antd';
import React from 'react';
import { FormattedMessage, useIntl, useParams } from 'umi';
import './preview.css';

const H5PPreviewPage: React.FC = () => {
  const intl = useIntl();
  const params = useParams<{ uuid?: string }>();

  const { uuid } = params;

  return (
    <PageContainer
      title={<FormattedMessage id="H5P_scorm_preview" />}
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'scorms',
              breadcrumbName: intl.formatMessage({
                id: 'menu.Courses.SCORMs',
              }),
            },
            {
              path: 'Preview',
              breadcrumbName: intl.formatMessage({
                id: 'preview',
              }),
            },
          ],
        },
      }}
    >
      <ProCard direction="column" style={{ minHeight: '100vh' }}>
        <Row>
          <Col span={24}>
            <Divider />
            {uuid && <ScormPreview uuid={uuid} />}
          </Col>
        </Row>
      </ProCard>
    </PageContainer>
  );
};

export default H5PPreviewPage;
