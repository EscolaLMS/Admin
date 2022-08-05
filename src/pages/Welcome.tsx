import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi';
import { Card, Typography } from 'antd';
import { Dashdoard } from '@/components/Dashboard';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Dashdoard />
    </PageContainer>
  );
};
