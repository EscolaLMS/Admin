import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import type { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
import { getLocale, history } from '@umijs/max';
import { currentUser as queryCurrentUser } from './services/escola-lms/api';
//import { errorConfig } from './requestErrorConfig';
import { localeInfo } from '@@/plugin-locale/localeExports';
import { BookOutlined } from '@ant-design/icons';
import { addLocale } from '@umijs/max';
import { notification } from 'antd';
import { FormattedMessage } from 'umi';
import defaultSettings from '../config/defaultSettings';
import RestrictedPage from './pages/403';
import { packages } from './services/escola-lms/packages';
import { publicSettings as fetchPublicSettings, settings } from './services/escola-lms/settings';
import { translations } from './services/escola-lms/translations';
import { refreshTokenCallback } from './services/token_refresh';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
const authpaths = ['/user/login', '/user/reset-password'];

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.UserItem;
  fetchUserInfo?: () => Promise<API.UserItem | undefined>;
  collapsed?: boolean;
  config?: API.Setting[];
  publicConfig?: API.PublicSettings;
  translations?: API.Translation[];
  packages?: Record<string, string>;
}> {
  console.log('getInitialState to welcome');
  refreshTokenCallback();
  const fetchUserInfo = async () => {
    try {
      const currentUser = await queryCurrentUser();
      if (currentUser.success) {
        return currentUser.data;
      }
      return undefined;
    } catch (error) {
      if (authpaths.includes(history.location.pathname)) {
        history.push(`/user/login`);
      } else {
        const url = history.location.pathname + history.location.search;
        history.push(`/user/login?redirect=${url}`);
      }
    }
    return undefined;
  };

  const currentUser = await fetchUserInfo();
  const publicConfig = await fetchPublicSettings();

  if (currentUser) {
    const config = await settings({ per_page: -1 });
    const transl = await translations({ per_page: 10000, page: -1, current: -1, group: 'Admin' });
    const packs = await packages();

    if (transl.success) {
      const messages: Record<string, Record<string, string>> = {};
      transl.data.forEach((t) => {
        Object.keys(t.text).forEach((key) => {
          if (!messages[key]) {
            messages[key] = {};
          }
          messages[key][t.key] = t.text[key];
        });
      });

      // TODO: fix me

      for (const lang in messages) {
        addLocale(lang, messages[lang], {
          antd: localeInfo[lang]?.antd || '',
          momentLocale: localeInfo[lang]?.momentLocale || lang,
        });
      }
    }

    console.log('getInitialState to welcome', {
      fetchUserInfo,
      config: config.success ? config.data : [],
      publicConfig: publicConfig.success ? publicConfig.data : {},
      translations: transl.success ? transl.data : [],
      currentUser,
      settings: defaultSettings as Partial<LayoutSettings>,
      collapsed: false,
      packages: packs.success ? packs.data : {},
    });

    return {
      fetchUserInfo,
      config: config.success ? config.data : [],
      publicConfig: publicConfig.success ? publicConfig.data : {},
      translations: transl.success ? transl.data : [],
      currentUser,
      settings: defaultSettings as Partial<LayoutSettings>,
      collapsed: false,
      packages: packs.success ? packs.data : {},
    };
  }

  return {
    config: [],
    publicConfig: publicConfig.success ? publicConfig.data : {},
    translations: [],
    fetchUserInfo,
    settings: defaultSettings as Partial<LayoutSettings>,
    collapsed: false,
    packages: {},
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
// export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
//   return {
//     actionsRender: () => [<Question key="doc" />, <SelectLang key="SelectLang" />],
//     avatarProps: {
//       src: initialState?.currentUser?.avatar,
//       title: <AvatarName />,
//       render: (_, avatarChildren) => {
//         return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
//       },
//     },
//     waterMarkProps: {
//       content: initialState?.currentUser?.name,
//     },
//     footerRender: () => <Footer />,
//     onPageChange: () => {
//       const { location } = history;
//       // 如果没有登录，重定向到 login
//       if (!initialState?.currentUser && location.pathname !== loginPath) {
//         history.push(loginPath);
//       }
//     },
//     bgLayoutImgList: [
//       {
//         src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
//         left: 85,
//         bottom: 100,
//         height: '303px',
//       },
//       {
//         src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
//         bottom: -68,
//         right: -45,
//         height: '303px',
//       },
//       {
//         src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
//         bottom: 0,
//         left: 0,
//         width: '331px',
//       },
//     ],
//     links: isDev
//       ? [
//           <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
//             <LinkOutlined />
//             <span>OpenAPI 文档</span>
//           </Link>,
//         ]
//       : [],
//     menuHeaderRender: undefined,
//     // 自定义 403 页面
//     // unAccessible: <div>unAccessible</div>,
//     // 增加一个 loading 的状态
//     childrenRender: (children) => {
//       // if (initialState?.loading) return <PageLoading />;
//       return (
//         <>
//           {children}
//           {isDev && (
//             <SettingDrawer
//               disableUrlParams
//               enableDarkTheme
//               settings={initialState?.settings}
//               onSettingChange={(settings) => {
//                 setInitialState((preInitialState) => ({
//                   ...preInitialState,
//                   settings,
//                 }));
//               }}
//             />
//           )}
//         </>
//       );
//     },
//     ...initialState?.settings,
//   };
// };

export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  console.log('redirect to welcome', initialState);
  if (initialState?.currentUser && authpaths.includes(history.location.pathname)) {
    console.log('redirect to welcome', history.location.query);
    if (history.location.query?.redirect) {
      history.push(history.location.query.redirect.toString());
    } else {
      history.push('/welcome');
    }
  }
  if (!initialState?.currentUser && !authpaths.includes(history.location.pathname)) {
    const url = history.location.pathname + history.location.search;
    history.push(`/user/login?redirect=${url}`);
  }

  let logo = 'logo.svg';

  const configLogo = initialState?.config?.find((row) => row.key === 'logo');
  const backgroundColor = initialState?.publicConfig?.global?.contentBackgroundColor ?? '#f0f2f5';

  if (configLogo) {
    logo = configLogo.data;
    if (!logo.includes('http')) {
      logo = `${window.REACT_APP_API_URL || REACT_APP_API_URL}/storage${logo}`;
    }
  }

  return {
    logo: logo,
    collapsed: initialState?.collapsed,
    onCollapse: (/*collapsed: boolean*/) => {
      setInitialState({
        ...initialState,
        collapsed: !initialState?.collapsed,
      });
    },
    avatarProps: {
      src: initialState?.currentUser?.avatar,
      title: <pre></pre>,
      render: (_, avatarChildren) => {
        return <p>{avatarChildren}</p>;
      },
    },
    //actionsRender: () => ['aaa'],

    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return <>{children}</>;
    },

    actionsRender: () => [<RightContent />],
    contentStyle: { backgroundColor },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // login;

      if (!initialState?.currentUser && !authpaths.includes(location.pathname)) {
        const url = history.location.pathname + history.location.search;
        history.push(`/user/login?redirect=${url}`);
      }
    },
    links: [
      <>
        <BookOutlined />
        <span>
          <a href="http://docs.wellms.io/" target="_blank" rel="noreferrer">
            <FormattedMessage id="documentation" />
          </a>
        </span>
      </>,
    ],
    menuHeaderRender: undefined,
    //  403
    unAccessible: <RestrictedPage />,
    ...initialState?.settings,
  };
};

const authHeaderInterceptor = (url: string, options: RequestOptionsInit) => {
  const token = localStorage.getItem('TOKEN');
  const optionHeaders = {
    ...options.headers,
    'X-locale': getLocale(),
  };

  if (url.includes('login')) {
    return {
      url: `${window.REACT_APP_API_URL || REACT_APP_API_URL}${url}`,
      options,
      headers: optionHeaders,
    };
  }

  return {
    url: `${window.REACT_APP_API_URL || REACT_APP_API_URL}${url}`,
    options: {
      ...options,
      interceptors: true,
      headers: token
        ? {
            ...options.headers,
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'X-locale': getLocale(),
          }
        : optionHeaders,
    },
  };
};

const errorHandler = (error: ResponseError) => {
  const { response, data } = error;

  if (error.name === 'AbortError') {
    return;
  }

  if (data && (data as API.DefaultResponseError)) {
    const { message, errors } = data;

    if (response.status >= 404 && response.status < 422) {
      //

      if (!response.url.includes('productable_id=')) {
        history.push('/404');
      }
    }

    if (message && errors) {
      notification.error({
        message,
        description: Object.keys(errors).map((errorKey) => (
          <p key={errorKey}>
            {errorKey}: {errors[errorKey].join(', ')}
          </p>
        )),
      });
    }
    if (typeof data.error === 'string') {
      notification.error({
        message: 'Error',
        description: data.error,
      });
    }

    if (typeof data.data === 'object') {
      if (data.data.value) {
        notification.error({
          description: data?.data?.value?.map((errorMessage: string) => `${errorMessage}`),
          message: data.message,
        });
      }
    }
  } else if (response && response.status) {
    const { status, url } = response;
    const errorText = codeMessage[status] || response.statusText;

    notification.error({
      message: `Error ${status}: ${url}`,
      description: errorText,
    });
  }

  if (!response && !data) {
    notification.error({
      description: 'Error',
      message: 'Error',
    });
  }

  throw error;
};

export const request: RequestConfig = {
  errorHandler,
  requestInterceptors: [authHeaderInterceptor],
};
