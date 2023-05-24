// import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import DefaultFooter from '@ant-design/pro-layout/lib/Footer';
import { useModel } from '@@/plugin-model/useModel';
import { useMemo } from 'react';

export default () => {
  const { initialState } = useModel('@@initialState');
  const companyName = useMemo(
    () =>
      initialState?.config?.find((item) => item.group === 'companyInfo' && item.key === 'name')
        ?.value,
    [initialState?.config],
  );
  const companyUrl = useMemo(
    () =>
      initialState?.config?.find((item) => item.group === 'companyInfo' && item.key === 'url')
        ?.value,
    [initialState?.config],
  );

  return (
    <DefaultFooter
      copyright="2021 EscolaSoft"
      links={[
        {
          key: companyName || 'Wellms',
          title: companyName || 'Wellms',
          href: companyUrl || 'https://www.wellms.io/',
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
