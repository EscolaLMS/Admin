import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import React from 'react';
import { FormattedMessage, history, useAccess, useParams } from 'umi';

import { useCheckRoles } from '@/hooks/useCheckRoles';
import TableList from '@/pages/Users/BulkNotifications/List';
import { BulkNotificationChannelsEnum } from '@/services/escola-lms/enums';

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
