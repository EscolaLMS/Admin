import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Dashdoard } from '@/components/Dashboard';
import { Button } from 'antd';
import { useModel } from '@@/plugin-model/useModel';
import { FormattedMessage } from '@@/plugin-locale/localeExports';

export default (): React.ReactNode => {
  const { initialState } = useModel('@@initialState');

  const baseUrl = initialState?.config?.filter((item) => item.key === 'frontURL')[0]?.data;
  const token = localStorage.getItem('TOKEN');
  const url = `${baseUrl}#/login${token ? `?token=${token}` : ''}`;

  return (
    <PageContainer
      extra={
        url && (
          <Button type="primary" href={url} target="_blank">
            <FormattedMessage id="go_to_platform" />
          </Button>
        )
      }
    >
      <Dashdoard />
    </PageContainer>
  );
};
