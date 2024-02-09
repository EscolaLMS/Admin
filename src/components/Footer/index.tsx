import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useMemo } from 'react';
import { useModel } from 'umi';

import './index.css';

declare const REACT_APP_API_URL: string;

export default () => {
  const { initialState } = useModel('@@initialState');
  const companyInfo = useMemo(
    () => ({
      name: initialState?.config?.find(
        (item) => item.group === 'global' && item.key === 'companyName',
      )?.value,
      url: initialState?.config?.find(
        (item) => item.group === 'global' && item.key === 'companyURL',
      )?.value,
    }),
    [initialState?.config],
  );

  const links = useMemo(
    () => [
      {
        key: companyInfo.name || 'Wellms',
        title: companyInfo.name || 'Wellms',
        href: companyInfo.url || 'https://www.wellms.io/',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/EscolaLMS',
        blankTarget: true,
      },
    ],
    [companyInfo.name, companyInfo.url],
  );

  const footerLogo = useMemo(() => {
    const logo = initialState?.publicConfig?.global?.logoFooter;

    if (!logo) {
      return '';
    }
    if (!logo.includes('http')) {
      return `${window.REACT_APP_API_URL || REACT_APP_API_URL}/storage${logo}`;
    }

    return logo;
  }, [initialState?.publicConfig?.global?.logoFooter]);

  const backgroundColor = initialState?.publicConfig?.global?.contentBackgroundColor ?? '#f0f2f5';
  const color = initialState?.publicConfig?.global?.footerFontColor ?? '#00000072';

  const currentYear = new Date().getFullYear();

  return (
    <footer className="ant-layout-footer" style={{ padding: 0, backgroundColor }}>
      <div className="ant-pro-global-footer">
        <DefaultFooter
          style={{
            background: 'none',
          }}
          copyright={`${currentYear} ${companyInfo.name || 'Wellms'}`}
          links={links.map(({ key, href, title, blankTarget }) => ({
            key,
            href,
            blankTarget,
            title,
          }))}
        />

        {footerLogo && (
          <div className="ant-pro-global-footer-footer-logo-wrapper">
            <picture className="ant-pro-global-footer-footer-logo">
              <img
                className="ant-pro-global-footer-footer-logo-image"
                alt="footer logo"
                src={footerLogo}
              />
            </picture>
          </div>
        )}
      </div>
    </footer>
  );
};
