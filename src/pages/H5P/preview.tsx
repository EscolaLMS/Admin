import { useState } from 'react';
import { useParams } from 'umi';
import { FormattedMessage, useIntl } from 'umi';

import H5Player from '@/components/H5P/player';
import { PageContainer } from '@ant-design/pro-layout';
import { Row, Col } from 'antd';

import ProCard from '@ant-design/pro-card';

export default () => {
  const params = useParams<{ h5p?: string }>();
  const intl = useIntl();

  const { h5p } = params;
  const [title, setTitle] = useState<string>('');
  return (
    <PageContainer
      title={
        <>
          {title ? (
            <FormattedMessage id="H5P_edit_content_title" />
          ) : (
            <FormattedMessage id="H5P_new_content_title" />
          )}

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
                id: 'form',
              }),
            },
          ],
        },
      }}
    >
      <ProCard direction="column">
        <Row>
          <Col span={24}>
            <H5Player
              onLoaded={(data) => {
                const contents = data.contents && data.contents[`cid-${h5p}`];
                if (contents && contents.title) {
                  setTitle(contents.title);
                }
              }}
              id={Number(h5p)}
            />{' '}
          </Col>
        </Row>
      </ProCard>
    </PageContainer>
  );
};
