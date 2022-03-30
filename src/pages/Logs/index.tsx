import React from 'react';

import LogsWidget from '@/components/LogsWidget';
import { PageContainer } from '@ant-design/pro-layout';

const Logs: React.FC = () => {
  return (
    <PageContainer>
      <LogsWidget />
    </PageContainer>
  );
};

export default Logs;
