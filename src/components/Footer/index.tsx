// import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import DefaultFooter from '@ant-design/pro-layout/lib/Footer';

export default () => (
  <DefaultFooter
    copyright="2021 EscolaSoft"
    links={[
      {
        key: 'Wellms',
        title: 'Wellms',
        href: 'https://www.wellms.io/',
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
