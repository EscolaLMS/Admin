import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import { Alert, Spin } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import type { IntlShape } from 'react-intl';
import { FormattedMessage, history, useIntl, useModel, useParams } from 'umi';

import { configs as fetchConfigs } from '@/services/escola-lms/settings';
import GlobalSettings from './global';
import PackageForm from './package';
import UserSettings from './user';

function transformPackageName(rawPackageName: string): string {
  const packageName = rawPackageName.replaceAll('escolalms', '');
  const words = packageName.split('_');
  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  return capitalizedWords.join(' ');
}

function getTabNameForBreadcrumbs(tab: string, intl: IntlShape): string {
  const NON_PACKAGE_TABS = ['global_settings', 'user_settings'];

  return NON_PACKAGE_TABS.includes(tab)
    ? intl.formatMessage({ id: String(tab) })
    : intl.formatMessage({ id: 'Settings.package' }, { package: transformPackageName(tab) });
}

export default () => {
  const params = useParams<{ course?: string; tab?: string }>();
  const intl = useIntl();
  const { tab = 'user_settings' } = params;

  const [configs, setConfigs] = useState<API.Configs>();

  const refetchConfigs = useCallback(() => {
    fetchConfigs().then((response) => {
      if (response.success) {
        setConfigs(response.data);
      }
    });
  }, []);

  const { initialState } = useModel('@@initialState');

  const checkGlobalConfigs = useCallback(() => {
    return initialState?.config?.length !== 0;
  }, [initialState]);

  useEffect(() => {
    refetchConfigs();
  }, []);

  if (!configs) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={getTabNameForBreadcrumbs(tab, intl)}
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'settings',
              breadcrumbName: intl.formatMessage({
                id: 'menu.Configuration.settings',
              }),
            },

            {
              path: String(tab),
              breadcrumbName: getTabNameForBreadcrumbs(tab, intl),
            },
          ],
        },
      }}
    >
      {!checkGlobalConfigs() && (
        <Alert
          message={
            <FormattedMessage
              id="global_settings_alert_title"
              defaultMessage="Add global settings"
            />
          }
          description={
            <FormattedMessage
              id="global_settings_alert_description"
              defaultMessage="Global settings are used to configure the entire LMS. You can add global settings by clicking the button below."
            />
          }
          type="warning"
          showIcon
          style={{ marginBottom: '20px' }}
        />
      )}
      <ProCard
        tabs={{
          type: 'card',
          activeKey: tab,
          onChange: (key) => history.push(`/configuration/settings/${key}`),
        }}
      >
        <ProCard.TabPane key="user_settings" tab={<FormattedMessage id="user.settings" />}>
          <UserSettings />
        </ProCard.TabPane>

        <ProCard.TabPane key="global_settings" tab={<FormattedMessage id="global_settings" />}>
          <GlobalSettings />
        </ProCard.TabPane>

        {Object.keys(configs).map((pkg) => (
          <ProCard.TabPane
            key={pkg}
            tab={
              <span>
                <FormattedMessage
                  id="Settings.package"
                  values={{ package: transformPackageName(pkg) }}
                />
              </span>
            }
          >
            <PackageForm
              values={configs}
              packageName={pkg}
              onValueUpdated={() => refetchConfigs()}
            />
            {pkg}
          </ProCard.TabPane>
        ))}
      </ProCard>
    </PageContainer>
  );
};
