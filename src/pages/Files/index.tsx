import FilesBrowser from '@/components/FilesBrowser';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography } from 'antd';
import React from 'react';
import { FormattedMessage } from 'umi';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>
        <Typography.Text strong>
          <FormattedMessage id="pages.files.content" />
        </Typography.Text>
        <FilesBrowser />
      </Card>
    </PageContainer>
  );
};
