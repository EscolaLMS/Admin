import React, { useMemo, useState, useEffect } from 'react';
import { message, Spin } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { profile, updateProfile, updateProfilePassword } from '@/services/escola-lms/user';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import { PageContainer } from '@ant-design/pro-layout';
import SecureUpload from '@/components/SecureUpload';
import ResponsiveImage from '@/components/ResponsiveImage';
import { useIntl, useParams, FormattedMessage, history } from 'umi';
import UserSettings from './User/settings';

export default () => {
  const params = useParams<{ tab?: string }>();
  const intl = useIntl();
  const { tab = 'general' } = params;

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
  console.log({ data });
  return (
    <PageContainer
      title={<FormattedMessage id="my_profile" />}
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'users',
              breadcrumbName: intl.formatMessage({
                id: 'menu.Users',
              }),
            },
            {
              path: 'me',
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
          onChange: (key) => history.push(`/users/me/${key}`),
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

            <ProForm.Item
              name="bio"
              label={<FormattedMessage id="bio" />}
              tooltip={<FormattedMessage id="bio_tooltip" />}
              valuePropName="value"
            >
              <WysiwygMarkdown directory={`users/wysiwyg`} />
            </ProForm.Item>

            <ProForm.Group>
              <ProForm.Item name="avatar" label={<FormattedMessage id="avatar" />}>
                {data.path_avatar && (
                  <ResponsiveImage path={data.path_avatar} size={600} width={200} />
                )}

                <SecureUpload
                  url="/api/profile/upload-avatar"
                  name="avatar"
                  accept="image/*"
                  onChange={(info) => {
                    if (info.file.status === 'done') {
                      if (info.file.response.success) {
                        setData(info.file.response.data);
                      }
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
