import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import type { AxiosRequestConfig, RunTimeLayoutConfig } from '@umijs/max';
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
import {
  configs,
  publicSettings as fetchPublicSettings,
  settings,
} from './services/escola-lms/settings';
import { translations } from './services/escola-lms/translations';
import './services/sentry';
import { refreshTokenCallback } from './services/token_refresh';
const authpaths = ['/user/login', '/user/reset-password'];

declare global {
  interface Window {
    REACT_APP_API_URL?: string;
  }
}
declare const REACT_APP_API_URL: string;

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
  packagesConfigs?: API.Configs;
}> {
  refreshTokenCallback();
  const fetchUserInfo = async () => {
    // Combine the current pathname and search parameters into a full URL
    const url = history.location.pathname + history.location.search;

    try {
      // Attempt to fetch the current user's data
      const currentUser = await queryCurrentUser();

      // If the user query is successful, return the user data
      if (currentUser.success) {
        return currentUser.data;
      }

      // If the user query fails (not successful), return undefined
      return undefined;
    } catch (error) {
      if (history.location.pathname === '/user/reset-password') {
        return;
      }
      // Check if the current path is in the list of authenticated paths
      if (authpaths.includes(history.location.pathname)) {
        // If the URL does not already include a redirect parameter
        if (!url.includes('redirect')) {
          // Redirect the user to the login page
          history.push(`/user/login`);

          // If there is a "redirect" key in local storage, remove it
          if (localStorage.getItem('redirect')) {
            localStorage.removeItem('redirect');
          }
        }
      } else {
        // If the path is not in the authenticated paths, redirect the user to the login page
        // Include the current URL as the "redirect" query parameter to return after login
        history.push(`/user/login?redirect=${url}`);
      }
    } finally {
      // If the URL includes a "redirect" parameter and it is not already in local storage
      if (url.includes('redirect') && !localStorage.getItem('redirect')) {
        // Save the "redirect" value to local storage for future use
        localStorage.setItem('redirect', url.split('redirect=')[1]);
      }
    }

    // Return undefined if no user data is fetched or an error occurs
    return undefined;
  };

  const currentUser = await fetchUserInfo();
  const publicConfig = await fetchPublicSettings();

  if (currentUser) {
    const config = await settings({ per_page: -1 });
    const packagesConfig = await configs();
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

      for (const lang in messages) {
        addLocale(lang, messages[lang], {
          antd: localeInfo[lang]?.antd || '',
          momentLocale: localeInfo[lang]?.momentLocale || lang,
        });
      }
    }

    return {
      fetchUserInfo,
      config: config.success ? config.data : [],
      publicConfig: publicConfig.success ? publicConfig.data : {},
      translations: transl.success ? transl.data : [],
      currentUser,
      settings: defaultSettings as Partial<LayoutSettings>,
      collapsed: false,
      packages: packs.success ? packs.data : {},
      packagesConfigs: packagesConfig.success ? packagesConfig.data : {},
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

export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  if (initialState?.currentUser && authpaths.includes(history.location.pathname)) {
    const redirectUrl = localStorage.getItem('redirect');
    if (redirectUrl) {
      history.push(redirectUrl);
      localStorage.removeItem('redirect');
    } else {
      history.push('/welcome');
    }
  }
  if (!initialState?.currentUser && !authpaths.includes(history.location.pathname)) {
    const url = history.location.pathname + history.location.search;
    localStorage.setItem('redirect', url);
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
    ...initialState?.settings,
    logo,
    collapsed: initialState?.collapsed,
    onCollapse: (/*collapsed: boolean*/) => {
      setInitialState({
        ...initialState,
        collapsed: !initialState?.collapsed,
      });
    },

    actionsRender: () => [<RightContent key="rightContent" />],
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
  };
};

const authHeaderInterceptor = (url: string, options: AxiosRequestConfig) => {
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

const codeMessage = {
  200: '200',
  201: '201',
  202: '202',
  204: '204',
  400: '400',
  401: '401',
  403: '403',
  404: '404',
  405: '405',
  406: '406',
  410: '410',
  422: '422',
  500: '500',
  502: '502',
  503: '503',
  504: '504',
};

// TODO #1006 there is no type for error
//github.com/ant-design/ant-design-pro/blob/ffff2447d6d717f932f1e9355096ad26f6ad2681/src/requestErrorConfig.ts#L42C27-L42C30
const errorHandler = (error: any) => {
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
    const errorText = codeMessage[status as keyof typeof codeMessage] || response.statusText;

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

export const request = {
  errorHandler,
  requestInterceptors: [authHeaderInterceptor],
};
