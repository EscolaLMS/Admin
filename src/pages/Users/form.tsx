import React, { useMemo, useState, useEffect } from 'react';
import { message, Spin, Form, Button, Space, Typography, Table } from 'antd';
import ProForm, { ProFormText, ProFormSwitch, ProFormCheckbox } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { user as fetchUser, updateUser, createUser, resendEmail } from '@/services/escola-lms/user';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import { PageContainer } from '@ant-design/pro-layout';
import SecureUpload from '@/components/SecureUpload';
import ResponsiveImage from '@/components/ResponsiveImage';
import { useParams, history } from 'umi';
import { useCallback } from 'react';
import { useIntl, FormattedMessage } from 'umi';

export default () => {
  const intl = useIntl();
  const params = useParams<{ user?: string }>();
  const { user } = params;
  const isNew = user === 'new';

  const [data, setData] = useState<Partial<API.UserItem>>();

  const fetchData = useCallback(async () => {
    const response = await fetchUser(Number(user));
    if (response.success) {
      setData({
        ...response.data,
        bio: response.data.bio || '',
      });
    }
  }, [user]);

  useEffect(() => {
    if (user === 'new') {
      setData({});
      return;
    }

    fetchData();
  }, [user, fetchData]);

  const formProps = useMemo(
    () => ({
      // @ts-ignore
      onFinish: async (values) => {
        let response: API.DefaultResponse<API.UserItem>;
        const postData: Partial<API.UserItem> = {
          ...values,
          bio: values.bio ? values.bio : undefined,
        };

        if (user === 'new') {
          response = await createUser(postData);
          if (response.success) {
            history.push(`/users/${response.data.id}`);
          }
        } else {
          response = await updateUser(Number(user), postData);
        }

        message.success(response.message);
      },
      initialValues: data,
      /*
      request: async () => {
        const response = await getCourse(Number(course));
        if (response.success) {
          return response.data;
        }
        return {};
      },
      */
    }),
    [data, user],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={isNew ? <FormattedMessage id="new_user" /> : <FormattedMessage id="edit_user" />}
    >
      <ProCard>
        <ProForm {...formProps}>
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
            <ProFormText
              width="md"
              name="email"
              label={<FormattedMessage id="email" />}
              tooltip={<FormattedMessage id="email" />}
              placeholder={intl.formatMessage({
                id: 'email',
              })}
              required
            />
            <ProFormText.Password
              width="md"
              name="password"
              label={<FormattedMessage id="password" />}
              tooltip={<FormattedMessage id="password" />}
              placeholder={intl.formatMessage({
                id: 'password',
              })}
              required={user === 'new'}
            />

            {user !== 'new' && (
              <Space direction="vertical">
                {/* if he is an admin, do not display the switch */}
                {!data.roles?.includes('admin') && (
                  <ProFormSwitch
                    name="email_verified"
                    label={<FormattedMessage id="is_email_verified" />}
                  />
                )}

                <Form.Item noStyle shouldUpdate>
                  {(form) => {
                    return form.getFieldValue('email_verified') ? (
                      <React.Fragment />
                    ) : (
                      <Button
                        size="small"
                        onClick={() => {
                          resendEmail(form.getFieldValue('email')).then(() => {
                            message.success(
                              intl.formatMessage({
                                id: 'email_resend',
                              }),
                            );
                          });
                        }}
                      >
                        <FormattedMessage id="resend" />
                      </Button>
                    );
                  }}
                </Form.Item>
              </Space>
            )}

            <ProFormSwitch name="is_active" label={<FormattedMessage id="is_active" />} />

            <ProFormCheckbox.Group
              name="roles"
              layout="horizontal"
              label={<FormattedMessage id="roles" />}
              options={['student', 'tutor', 'admin']}
            />
          </ProForm.Group>
          <ProForm.Item
            name="bio"
            label={<FormattedMessage id="bio" />}
            tooltip={<FormattedMessage id="bio_tooltip" />}
            valuePropName="value"
          >
            <WysiwygMarkdown directory={`users/${user}/wysiwyg`} />
          </ProForm.Item>
          <ProForm.Item
            name="settings"
            label={<FormattedMessage id="settings" />}
            valuePropName="settings"
          >
            <Table
              columns={[
                {
                  title: <FormattedMessage id="Name" defaultMessage="Name" />,
                  dataIndex: 'settings',
                },
              ]}
              request={() => {
                return [{ setting: 'default' }];
              }}
            />
          </ProForm.Item>
          {user !== 'new' && (
            <ProForm.Group>
              <ProForm.Item name="avatar" label={<FormattedMessage id="avatar" />}>
                {data.path_avatar ? (
                  <ResponsiveImage path={data.path_avatar} size={600} width={200} />
                ) : (
                  <Typography>
                    <FormattedMessage id="avatar_placeholder" />
                  </Typography>
                )}
              </ProForm.Item>
              <Form.Item noStyle shouldUpdate>
                {() => (
                  <SecureUpload
                    wrapInForm={false}
                    url={`/api/admin/users/${user}/avatar`}
                    name="avatar"
                    accept="image/*"
                    onChange={(info) => {
                      if (info.file.status === 'done') {
                        if (info.file.response.success) {
                          fetchData();
                          // setData(info.file.response.data);
                        }
                      }
                    }}
                  />
                )}
              </Form.Item>
            </ProForm.Group>
          )}
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
