import { Dashboard } from '@/components/Dashboard';
import { FormattedMessage } from '@@/plugin-locale/localeExports';
import { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
import React from 'react';
import { useModel } from 'umi';

export default (): React.ReactNode => {
  const { initialState } = useModel('@@initialState');

  const baseUrl = initialState?.config?.filter((item) => item.key === 'frontURL')[0]?.data;
  const token = localStorage.getItem('TOKEN');
  const url = `${baseUrl}#/login${token ? `?token=${token}` : ''}`;

  return (
    <PageContainer
      extra={
        baseUrl && (
          <Button type="primary" href={url} target="_blank">
            <FormattedMessage id="go_to_platform" />
          </Button>
        )
      }
    >
      <Dashboard />
    </PageContainer>
  );
};
