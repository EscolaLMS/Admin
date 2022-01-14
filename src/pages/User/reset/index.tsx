import { LockOutlined } from '@ant-design/icons';
import { message, Divider } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useIntl, Link, history, FormattedMessage, SelectLang } from 'umi';
import Footer from '@/components/Footer';
import { reset as passwordReset } from '@/services/escola-lms/login';

import styles from '../login/index.less';

const Reset: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const { location } = history;
  //   TODO: validate token for future if is not valid redirect
  const token = location && location.query && location.query.token;
  const email = location && location.query && location.query.email;

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
    <div className={styles.container}>
      <div className={styles.lang}>{SelectLang && <SelectLang />}</div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <img alt="logo" className={styles.logo} src="/logo.svg" />
            </Link>
          </div>
        </div>

        <Divider />

        <div className={styles.main}>
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
                      <FormattedMessage
                        id="pages.login.password.required"
                        defaultMessage="required"
                      />
                    ),
                  },
                ]}
              />
            </>
          </ProForm>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reset;
