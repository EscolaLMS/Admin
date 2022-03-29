import React from 'react';
import { FormattedMessage, useParams, history } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

import ConfigList from './ConfigList/index';

export enum channelType {
  email = 'EscolaLms\\TemplatesEmail\\Core\\EmailChannel',
  pdf = 'EscolaLms\\TemplatesPdf\\Core\\PdfChannel',
}

const Templates: React.FC = () => {
  const params = useParams<{ template?: string }>();
  const { template } = params;

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
          <ConfigList templateType={'email'} channel={channelType.email} />
        </ProCard.TabPane>
        <ProCard.TabPane key={'pdf'} tab={<FormattedMessage id="PDF" />}>
          <ConfigList templateType={'pdf'} channel={channelType.pdf} />
        </ProCard.TabPane>
        {/* // NOTE:for demo only */}
        {/* <ProCard.TabPane
          disabled
          key={'Push'}
          tab={
            <span>
              <FormattedMessage id="Push" />
            </span>
          }
        >
          Push
        </ProCard.TabPane> */}
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
