import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import { notification } from 'antd';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import { history, getLocale, addLocale } from 'umi';

import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import type { ResponseError, RequestOptionsInit } from 'umi-request';
import { currentUser as queryCurrentUser } from './services/escola-lms/api';
import { BookOutlined } from '@ant-design/icons';
import RestrictedPage from './pages/403';
import { settings } from './services/escola-lms/settings';
import { translations } from './services/escola-lms/translations';

import { refreshTokenCallback } from './services/token_refresh';

import '@/services/ybug';
import '@/services/sentry';
import './app.css';
import { packages } from './services/escola-lms/packages';
import { FormattedMessage, localeInfo } from '@@/plugin-locale/localeExports';

declare const REACT_APP_API_URL: string;

// const langParser = (lang: string) => lang.split('-')[0];

const authpaths = ['/user/login', '/user/reset-password'];

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.UserItem;
  fetchUserInfo?: () => Promise<API.UserItem | undefined>;
  collapsed?: boolean;
  config?: API.Setting[];
  translations?: API.Translation[];
  packages?: Record<string, string>;
}> {
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

  if (currentUser) {
    const config = await settings({ per_page: -1 });
    const transl = await translations({ per_page: 10000, page: -1, current: -1, group: 'Admin' });
    const packs = await packages();

    if (transl.success) {
      const messages = {};
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
      translations: transl.success ? transl.data : [],
      currentUser,
      settings: {},
      collapsed: false,
      packages: packs.success ? packs.data : {},
    };
  }
  return {
    config: [],
    translations: [],
    fetchUserInfo,
    settings: {},
    collapsed: false,
    packages: {},
  };
}

// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  if (initialState?.currentUser && authpaths.includes(history.location.pathname)) {
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
    rightContentRender: () => <RightContent />,
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

/**
 * @see https://beta-pro.ant.design/docs/request-cn
 */
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

export const request: RequestConfig = {
  errorHandler,
  requestInterceptors: [authHeaderInterceptor],
};
