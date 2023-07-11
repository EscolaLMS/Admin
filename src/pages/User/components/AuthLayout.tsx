import React, { type PropsWithChildren, useMemo } from 'react';
import Footer from '@/components/Footer';
import styles from './index.less';
import { Link, SelectLang, useModel } from 'umi';

declare const REACT_APP_API_URL: string;

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { initialState } = useModel('@@initialState');

  const showBackgroundImage = initialState?.publicConfig?.global?.showLoginBackgroundImage ?? true;

  const color = initialState?.publicConfig?.global?.loginHeaderFontColor;
  const backgroundColor = initialState?.publicConfig?.global?.loginHeaderBackgroundColor;

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
    <div className={`${styles.container} ${showBackgroundImage ? styles[`background-image`] : ''}`}>
      <header className={styles.header} style={{ backgroundColor, color }}>
        <div className={styles.lang}>{SelectLang && <SelectLang />}</div>
        <div className={styles['logo-wrapper']}>
          <Link to="/">
            <img
              alt="logo"
              className={configLogo ? styles['custom-logo'] : styles.logo}
              src={configLogo || '/logo.svg'}
            />
          </Link>
        </div>
      </header>

      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
