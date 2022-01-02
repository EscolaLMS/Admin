import React from 'react';
import { FormattedMessage, useParams, history } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

import Emails from './Emails/index';
import Pdfs from './Pdfs/index';

const Templates: React.FC = () => {
  const params = useParams<{ template?: string }>();
  const { template } = params;

  console.log('tab', template);

  return (
    <PageContainer>
      <ProCard
        tabs={{
          type: 'card',
          activeKey: template,
          onChange: (key) => history.push(`/templates/${key}`),
        }}
      >
        <ProCard.TabPane key="email" tab={<FormattedMessage id="email" />}>
          <Emails templateType={'email'} />
        </ProCard.TabPane>

        <ProCard.TabPane key={'pdf'} tab={<FormattedMessage id="PDF" />}>
          <Pdfs templateType={'pdf'} />
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
