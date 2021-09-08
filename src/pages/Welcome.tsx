import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi';
import { Card, Typography } from 'antd';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>
        <Typography.Text strong>
          <FormattedMessage id="pages.welcome.content" />
        </Typography.Text>
      </Card>
    </PageContainer>
  );
};
