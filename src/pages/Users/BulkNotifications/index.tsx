import TableList from '@/pages/Users/BulkNotifications/List';
import { BulkNotificationChannelsEnum } from '@/services/escola-lms/enums';
import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import React from 'react';
import { FormattedMessage, history, useParams } from 'umi';

const BulkNotifications: React.FC = () => {
  const params = useParams<{ template?: string }>();
  const { template } = params;

  return (
    <PageContainer>
      <ProCard
        tabs={{
          type: 'card',
          activeKey: template,
          onChange: (key) => history.push(`/configuration/templates/${key}`),
        }}
      >
        <ProCard.TabPane key="push" tab={<FormattedMessage id="Bulknotifications.push" />}>
          <TableList templateType={'push'} channel={BulkNotificationChannelsEnum.PUSH} />
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};

export default BulkNotifications;
