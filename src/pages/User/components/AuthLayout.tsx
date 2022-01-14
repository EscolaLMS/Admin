import Footer from '@/components/Footer';
import styles from './index.less';
import { Link, SelectLang } from 'umi';
import { Divider } from 'antd';

const AuthLayout: React.FC<{}> = ({ children }) => {
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

        <div className={styles.main}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
