// import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import DefaultFooter from '@ant-design/pro-layout/lib/Footer';
import { useModel } from '@@/plugin-model/useModel';
import { useMemo } from 'react';

export default () => {
  const { initialState } = useModel('@@initialState');
  const companyInfo = useMemo(
    () => ({
      name: initialState?.config?.find(
        (item) => item.group === 'global' && item.key === 'companyName',
      )?.value,
      url: initialState?.config?.find(
        (item) => item.group === 'global' && item.key === 'companyURL',
      )?.value,
    }),
    [initialState?.config],
  );

  return (
    <DefaultFooter
      copyright="2021 EscolaSoft"
      links={[
        {
          key: companyInfo.name || 'Wellms',
          title: companyInfo.name || 'Wellms',
          href: companyInfo.url || 'https://www.wellms.io/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/EscolaLMS',
          blankTarget: true,
        },
      ]}
    />
  );
};
