import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import React from 'react';
import { FormattedMessage, history } from 'umi';

import ModelFields from '@/components/ModelFields';

const UserFields: React.FC = () => {
  return (
    <PageContainer>
      <ProCard
        tabs={{
          type: 'card',
          activeKey: 'fields',
          onChange: (key) => history.push(`/users/${key}`),
        }}
      >
        <ProCard.TabPane key="list" tab={<FormattedMessage id="list" />} />

        <ProCard.TabPane key="fields" tab={<FormattedMessage id="ModelFields" />}>
          <ModelFields class_type="EscolaLms\Auth\Models\User" />
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};

export default UserFields;
