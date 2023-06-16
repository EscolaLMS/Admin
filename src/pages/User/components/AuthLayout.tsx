import React, { type PropsWithChildren, useMemo } from 'react';
import Footer from '@/components/Footer';
import styles from './index.less';
import { Link, SelectLang, useModel } from 'umi';
import { Divider } from 'antd';

declare const REACT_APP_API_URL: string;

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { initialState } = useModel('@@initialState');

  const configLogo = useMemo(() => {
    const logo = initialState?.publicConfig?.global?.logoLogin;

    if (!logo) {
      return '';
    }
    if (!logo.includes('http')) {
      return `${window.REACT_APP_API_URL || REACT_APP_API_URL}/storage${logo}`;
    }

    return logo;
  }, [initialState?.publicConfig]);

  return (
    <div className={styles.container}>
      <div className={styles.lang}>{SelectLang && <SelectLang />}</div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <img
                alt="logo"
                className={configLogo ? styles['custom-logo'] : styles.logo}
                src={configLogo || '/logo.svg'}
              />
            </Link>
          </div>
        </div>

        <Divider />

        <div className={styles.main}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
