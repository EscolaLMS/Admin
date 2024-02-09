import { LockOutlined } from '@ant-design/icons';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { message } from 'antd';
import React, { useState } from 'react';
import { FormattedMessage, history, useIntl } from 'umi';

import { reset as passwordReset } from '@/services/escola-lms/auth';

import AuthLayout from '../components/AuthLayout';
import styles from '../components/index.less';

const Reset: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const { location } = history;
  //   TODO: validate token for future if is not valid redirect
  // TODO: test this page
  const token =
    location &&
    new URLSearchParams(location.search).has('token') &&
    new URLSearchParams(location.search).get('token');
  const email =
    location &&
    new URLSearchParams(location.search).has('email') &&
    new URLSearchParams(location.search).get('email');

  const intl = useIntl();

  const handleSubmit = async (values: API.ResetPasswordRequest) => {
    setSubmitting(true);
    try {
      const msg = await passwordReset({ ...values });
      if (msg.success) {
        message.success(msg.message);
        history.push('/user/login');
        return;
      }
    } catch (error: any) {
      message.error(error?.data?.message || 'Error');
    } finally {
      setSubmitting(false);
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
            submitText: intl.formatMessage({
              id: 'reset_password',
              defaultMessage: 'reset_password',
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
          handleSubmit({ ...values, token, email } as API.ResetPasswordRequest);
        }}
      >
        <>
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
                  <FormattedMessage id="pages.login.password.required" defaultMessage="required" />
                ),
              },
            ]}
          />
        </>
      </ProForm>
    </AuthLayout>
  );
};

export default Reset;
