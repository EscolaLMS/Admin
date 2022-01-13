import React from 'react';
import { useParams } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { Divider, Row, Col } from 'antd';
import ProCard from '@ant-design/pro-card';
import { useIntl, FormattedMessage } from 'umi';
import './preview.css';
import ScormPreview from '@/components/Scorm/preview';

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
                id: 'menu.SCORMs',
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
      <ProCard direction="column">
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
