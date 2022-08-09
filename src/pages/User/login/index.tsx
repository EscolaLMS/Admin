import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, message } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { useIntl, FormattedMessage, useModel } from 'umi';
import { forgot, login } from '@/services/escola-lms/auth';

import styles from '../components/index.less';
import AuthLayout from '../components/AuthLayout';

import { refreshTokenCallback } from '@/services/token_refresh';

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

    if (userInfo) {
      setInitialState({
        ...initialState,
        currentUser: userInfo,
      });
    }
  };

  const handleLogin = async (values: API.LoginRequest) => {
    try {
      const msg = await login({ ...values });
      if (msg.success) {
        localStorage.setItem('TOKEN', msg.data.token);
        refreshTokenCallback();
        await fetchUserInfo();
        message.success(msg.message);
        return;
      }
      setUserLoginState(msg);
    } catch (error: any) {
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
              id: 'pages.login.username.placeholder',
              defaultMessage: 'admin or user',
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
                id: 'pages.login.password.placeholder',
                defaultMessage: ' ant.design',
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
