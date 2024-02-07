import { LockOutlined, UserOutlined } from '@ant-design/icons';
import ProForm, { ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { Alert, message } from 'antd';
import React, { useState } from 'react';
import { FormattedMessage, addLocale, localeInfo, useIntl, useModel } from 'umi';

import { forgot, login } from '@/services/escola-lms/auth';
import { packages } from '@/services/escola-lms/packages';
import { settings } from '@/services/escola-lms/settings';
import { translations } from '@/services/escola-lms/translations';
import { refreshTokenCallback } from '@/services/token_refresh';
import AuthLayout from '../components/AuthLayout';
import styles from '../components/index.less';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [userLoginState, setUserLoginState] = useState<API.LoginResponse>();
  const { initialState, setInitialState } = useModel('@@initialState');
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    const config = await settings({ per_page: -1 });
    const packs = await packages();
    const transl = await translations({ per_page: 10000, page: -1, current: -1, group: 'Admin' });

    if (transl.success) {
      const messages: Record<string, string> = {};
      transl.data.forEach((t) => {
        Object.keys(t.text).forEach((key) => {
          if (!messages[key]) {
            messages[key] = {};
          }
          messages[key][t.key] = t.text[key];
        });
      });

      try {
        for (const lang in messages) {
          // TODO: localeInfo is undefined!!!
          addLocale(lang, messages[lang], {
            antd: localeInfo[lang]?.antd || '',
            momentLocale: localeInfo[lang]?.momentLocale || lang,
          });
        }
      } catch (err) {
        console.log('translation error', err, translations, messages);
      }
    }

    if (userInfo) {
      setInitialState({
        ...initialState,
        currentUser: userInfo,
        config: config.success ? config.data : [],
        packages: packs.success ? packs.data : {},
        translations: transl.success ? transl.data : [],
      });
    }
  };

  const handleLogin = async (values: API.LoginRequest) => {
    try {
      const msg = await login({ ...values });

      if (msg.success) {
        localStorage.setItem('TOKEN', msg.data.token);
        dispatchEvent(new Event('token_change'));
        refreshTokenCallback();
        await fetchUserInfo();
        message.success(msg.message);
        return;
      }
      setUserLoginState(msg);
    } catch (error: any) {
      console.log(error);
      message.error(error?.data?.message || 'Error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleForgot = async (values: API.ForgotRequest) => {
    try {
      const request = await forgot({ ...values });

      if (request.success) {
        message.success(request.message);

        return;
      }
    } catch (error: any) {
      message.error(error?.data?.message || 'Error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = async (values: API.LoginRequest | API.ForgotRequest) => {
    console.log('handleSubmit');
    setSubmitting(true);
    if ('password' in values) {
      handleLogin(values);
    } else {
      handleForgot({ ...values, return_url: `${window.location.origin}/#/user/reset-password` });
    }
  };
  return (
    <AuthLayout>
      <ProForm
        initialValues={{
          autoLogin: true,
        }}
        isKeyPressSubmit
        submitter={{
          searchConfig: {
            submitText: isPasswordReset
              ? intl.formatMessage({
                  id: 'send',
                  defaultMessage: 'send',
                })
              : intl.formatMessage({
                  id: 'pages.login.submit',
                  defaultMessage: 'submit',
                }),
          },
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            loading: submitting,
            size: 'large',
            style: {
              width: '100%',
            },
          },
        }}
        onFinish={async (values) => {
          handleSubmit(values as API.LoginRequest);
        }}
      >
        {userLoginState && !userLoginState.success && (
          <LoginMessage
            content={intl.formatMessage({
              id: 'pages.login.accountLogin.errorMessage',
              defaultMessage: '（admin/ant.design)',
            })}
          />
        )}

        <>
          <ProFormText
            name="email"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={styles.prefixIcon} />,
            }}
            placeholder={intl.formatMessage({
              id: 'email_field',
              defaultMessage: 'Please enter your email',
            })}
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage id="pages.login.username.required" defaultMessage="required!" />
                ),
              },
            ]}
          />
          {!isPasswordReset && (
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              placeholder={intl.formatMessage({
                id: 'password_field',
                defaultMessage: 'Please enter your password',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.password.required"
                      defaultMessage="required"
                    />
                  ),
                },
              ]}
            />
          )}
        </>

        <div
          style={{
            marginBottom: 24,
          }}
        >
          {!isPasswordReset ? (
            <ProFormCheckbox noStyle name="remember_me">
              <FormattedMessage id="pages.login.rememberMe" defaultMessage="rememberMe" />
            </ProFormCheckbox>
          ) : (
            <a
              onClick={(e) => {
                e.preventDefault();
                setIsPasswordReset(false);
              }}
            >
              <FormattedMessage id="back" defaultMessage="back" />
            </a>
          )}
          {!isPasswordReset && (
            <a
              style={{
                float: 'right',
              }}
              onClick={(e) => {
                e.preventDefault();
                setIsPasswordReset(true);
              }}
            >
              <FormattedMessage id="pages.login.forgotPassword" defaultMessage="forgotPassword" />
            </a>
          )}
        </div>
      </ProForm>
    </AuthLayout>
  );
};

export default Login;
