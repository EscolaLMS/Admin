import ResponsiveImage from '@/components/ResponsiveImage';
import SecureUploadBrowser from '@/components/SecureUpload/browser';
import useModelFields from '@/hooks/useModelFields';
import { profile, updateProfile, updateProfilePassword } from '@/services/escola-lms/user';
import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { Spin, message } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { FormattedMessage, history, useIntl, useParams } from 'umi';
import AdditionalField from './User/components/AdditionalField';
import UserSettings from './User/settings';

export default () => {
  const params = useParams<{ tab?: string }>();
  const intl = useIntl();
  const { tab = 'general' } = params;
  const additionalFields = useModelFields('EscolaLms\\Auth\\Models\\User');
  const [data, setData] = useState<API.UserItem>();

  useEffect(() => {
    const fetch = async () => {
      const response = await profile();
      if (response.success) {
        setData({
          ...response.data,
          bio: response.data.bio || '',
        });
      }
    };

    fetch();
  }, []);

  const formPropsGeneral = useMemo(
    () => ({
      onFinish: async (values: API.UserItem) => {
        const response: API.DefaultResponse<API.UserItem> = await updateProfile(values);
        message.success(response.message);
      },
      initialValues: data,
    }),
    [data],
  );

  const formPropsChangePassword = useMemo(
    () => ({
      onFinish: async (values: API.UserChangePassword) => {
        const response: API.DefaultResponse<API.UserChangePassword> = await updateProfilePassword(
          values,
        );
        message.success(response.message);
      },
      initialValues: data,
    }),
    [data],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={<FormattedMessage id="my_profile" />}
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'my-profile',
              breadcrumbName: intl.formatMessage({
                id: 'my_profile',
              }),
            },
            {
              path: String(tab),
              breadcrumbName: intl.formatMessage({
                id: String(tab),
              }),
            },
          ],
        },
      }}
    >
      <ProCard
        tabs={{
          type: 'card',
          activeKey: tab,
          onChange: (key) => history.push(`/my-profile/${key}`),
        }}
      >
        <ProCard.TabPane key="general" tab={<FormattedMessage id="general" />}>
          <ProForm {...formPropsGeneral}>
            <ProForm.Group>
              <ProFormText
                width="md"
                name="first_name"
                label={<FormattedMessage id="first_name" />}
                tooltip={<FormattedMessage id="first_name" />}
                placeholder={intl.formatMessage({
                  id: 'first_name',
                })}
                required
              />
              <ProFormText
                width="md"
                name="last_name"
                label={<FormattedMessage id="last_name" />}
                tooltip={<FormattedMessage id="last_name" />}
                placeholder={intl.formatMessage({
                  id: 'last_name',
                })}
                required
              />
            </ProForm.Group>
            <ProForm.Group>
              {additionalFields.state === 'loaded' &&
                additionalFields.list.map((field) => (
                  <AdditionalField key={field.id} field={field} />
                ))}
            </ProForm.Group>

            <ProForm.Group>
              <ProForm.Item name="avatar" label={<FormattedMessage id="avatar" />}>
                {data.path_avatar && (
                  <ResponsiveImage path={data.path_avatar} size={600} width={200} />
                )}

                <SecureUploadBrowser
                  folder={`avatars/${data.id}`}
                  url="/api/profile/upload-avatar"
                  name="avatar"
                  accept="image/*"
                  onUpload={(response) => {
                    if (response.success) {
                      // TODO #1044 refresh avatar here
                    }
                  }}
                />
              </ProForm.Item>
            </ProForm.Group>
          </ProForm>
        </ProCard.TabPane>
        <ProCard.TabPane key="change_password" tab={<FormattedMessage id="change_password" />}>
          <ProForm {...formPropsChangePassword}>
            <ProForm.Group>
              <ProFormText.Password
                width="md"
                name="current_password"
                label={<FormattedMessage id="current_password" />}
                placeholder={intl.formatMessage({
                  id: 'current_password',
                })}
                required
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText.Password
                width="md"
                name="new_password"
                label={<FormattedMessage id="new_password" />}
                placeholder={intl.formatMessage({
                  id: 'new_password',
                })}
                required
              />
              <ProFormText.Password
                width="md"
                name="new_confirm_password"
                label={<FormattedMessage id="new_confirm_password" />}
                placeholder={intl.formatMessage({
                  id: 'new_confirm_password',
                })}
                required
              />
            </ProForm.Group>
          </ProForm>
        </ProCard.TabPane>
        <ProCard.TabPane key="user_settings" tab={<FormattedMessage id="user.settings" />}>
          <UserSettings user={String(data.id)} isProfile />
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};
