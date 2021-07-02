import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography } from 'antd';

import FilesBrowser from '@/components/FilesBrowser';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>
        <Typography.Text strong>Pages files list will be here</Typography.Text>
        <FilesBrowser />
      </Card>
    </PageContainer>
  );
};
