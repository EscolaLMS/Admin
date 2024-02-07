import { QuestionCircleOutlined } from '@ant-design/icons';
import { SelectLang as UmiSelectLang } from '@umijs/max';
import { Space, Tag } from 'antd';
import React from 'react';
import { useModel } from 'umi';
import NoticeIconView from '../NoticeIcon';
import Avatar from './AvatarDropdown';
import styles from './index.less';

// import 'ant-design-pro/dist/ant-design-pro.css';
export type SiderTheme = 'light' | 'dark';

import { useMemo } from 'react';
import { useIntl } from 'umi';
import { getLangInfo } from '../../utils/utils';

declare const REACT_APP_ENV: string | undefined;

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight: React.FC = () => {
  return <pre>TODO</pre>;
  const { initialState } = useModel('@@initialState');
  const intl = useIntl();

  const langIcon = useMemo(() => {
    return getLangInfo(intl.locale).icon;
  }, [intl.locale]);

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <Space className={className}>
      {/* {!currentUser?.data.roles.includes('admin') && <NoticeIconView />} */}
      <NoticeIconView />
      <Avatar />
      {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )}
      <SelectLang className={styles.action} icon={langIcon} />
    </Space>
  );
};
export default GlobalHeaderRight;

export const SelectLang = () => {
  return (
    <UmiSelectLang
      style={{
        padding: 4,
      }}
    />
  );
};

export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        window.open('https://pro.ant.design/docs/getting-started');
      }}
    >
      <QuestionCircleOutlined />
    </div>
  );
};
