import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';

export default (): React.ReactNode => {
  const intl = useIntl();
  return (
    <PageContainer>
      <Card>
        <Typography.Text strong>Hello I'm new Escola LMS Page</Typography.Text>
      </Card>
    </PageContainer>
  );
};
