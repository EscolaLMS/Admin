import React from 'react';
import { FormattedMessage, useParams, history } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

import Emails from './Emails/index';

const Templates: React.FC = () => {
  const params = useParams<{ tab?: string }>();
  const { tab } = params;

  return (
    <PageContainer>
      <ProCard
        tabs={{
          type: 'card',
          activeKey: tab,
          onChange: (key) => history.push(`/templates/${key}`),
        }}
      >
        <ProCard.TabPane key="email" tab={<FormattedMessage id="email" />}>
          <Emails templateType={'email'} />
        </ProCard.TabPane>

        <ProCard.TabPane
          disabled
          key={'PDF'}
          tab={
            <span>
              <FormattedMessage id="PDF" />
            </span>
          }
        >
          PDF
        </ProCard.TabPane>
        <ProCard.TabPane
          disabled
          key={'Push'}
          tab={
            <span>
              <FormattedMessage id="Push" />
            </span>
          }
        >
          Push
        </ProCard.TabPane>
        <ProCard.TabPane
          disabled
          key={'SMS'}
          tab={
            <span>
              <FormattedMessage id="SMS" />
            </span>
          }
        >
          SMS
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};

export default Templates;
