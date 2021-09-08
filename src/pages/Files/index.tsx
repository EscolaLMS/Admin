import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography } from 'antd';
import { FormattedMessage } from 'umi';
import FilesBrowser from '@/components/FilesBrowser';

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
