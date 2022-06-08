import React from 'react';
import { FormattedMessage, history } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

import ModelFields from '@/components/ModelFields';

const UserFields: React.FC = () => {
  return (
    <PageContainer>
      <ProCard
        tabs={{
          type: 'card',
          activeKey: 'fields',
          onChange: (key) => {
            switch (key) {
              case 'list':
                return history.push(`/users`);
              default:
                return history.push(`/users/${key}`);
                break;
            }
          },
        }}
      >
        <ProCard.TabPane key="list" tab={<FormattedMessage id="list" />}></ProCard.TabPane>

        <ProCard.TabPane key={'fields'} tab={<FormattedMessage id="ModelFields" />}>
          <ModelFields class_type="EscolaLms\Auth\Models\User" />
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};

export default UserFields;
