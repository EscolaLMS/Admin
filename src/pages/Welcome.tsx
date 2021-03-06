import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography } from 'antd';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>
        <Typography.Text strong>Hello and welcome to EscolaLMS!</Typography.Text>
      </Card>
    </PageContainer>
  );
};
