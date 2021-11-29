import { useMemo, useState, useEffect } from 'react';
import { message, Spin, Row, Col } from 'antd';

import ProCard from '@ant-design/pro-card';
import { useParams, history } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { useIntl, FormattedMessage } from 'umi';

import { configs as fetchConfigs } from '@/services/escola-lms/settings';

import UserSettings from './user';
import PackageForm from './package';

const sanitizePackageName = (name: string) => name.replaceAll('escolalms', '').split('_').join('');

export default () => {
  const params = useParams<{ course?: string; tab?: string }>();
  const intl = useIntl();
  const { tab = 'user_settings' } = params;

  const [configs, setConfigs] = useState<API.Configs>();

  useEffect(() => {
    fetchConfigs().then((response) => {
      if (response.success) {
        setConfigs(response.data);
      }
    });
  }, []);

  if (!configs) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={<FormattedMessage id={'settings'} />}
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'settings',
              breadcrumbName: intl.formatMessage({
                id: 'menu.Settings',
              }),
            },

            {
              path: String(tab),
              breadcrumbName: String(tab),
            },
          ],
        },
      }}
    >
      <ProCard
        tabs={{
          type: 'card',
          activeKey: tab,
          onChange: (key) => history.push(`/settings/${key}`),
        }}
      >
        <ProCard.TabPane key="user_settings" tab={<FormattedMessage id="user.settings" />}>
          <UserSettings />
        </ProCard.TabPane>

        {Object.keys(configs).map((pkg) => (
          <ProCard.TabPane
            key={pkg}
            tab={
              <span>
                <FormattedMessage id="package" /> {sanitizePackageName(pkg)}
              </span>
            }
          >
            <PackageForm values={configs} packageName={pkg} />
            {pkg}
          </ProCard.TabPane>
        ))}
      </ProCard>
    </PageContainer>
  );
};
