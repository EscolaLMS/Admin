import { useState, useEffect, useCallback } from 'react';
import { Alert, Spin } from 'antd';

import ProCard from '@ant-design/pro-card';
import { useParams, history } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { useIntl, FormattedMessage } from 'umi';

import { configs as fetchConfigs } from '@/services/escola-lms/settings';

import UserSettings from './user';
import PackageForm from './package';
import GlobalSettings from './global';
import { useModel } from '@@/plugin-model/useModel';

const sanitizePackageName = (name: string) => name.replaceAll('escolalms', '').split('_').join('');

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
      title={<FormattedMessage id={'settings'} />}
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
              breadcrumbName: String(tab),
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

        <ProCard.TabPane key={'global_settings'} tab={<FormattedMessage id="global_settings" />}>
          <GlobalSettings />
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
