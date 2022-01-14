import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import { notification } from 'antd';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import { history, Link } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import type { ResponseError, RequestOptionsInit } from 'umi-request';
import { currentUser as queryCurrentUser } from './services/escola-lms/api';
import { BookOutlined } from '@ant-design/icons';
import RestrictedPage from './pages/403';
import '@/services/ybug';

const authpaths = ['/user/login', '/user/reset-password'];

const isDev = process.env.NODE_ENV === 'development';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.User;
  fetchUserInfo?: () => Promise<API.User | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const currentUser = await queryCurrentUser();
      return currentUser;
    } catch (error) {
      history.push('/user/login');
    }
    return undefined;
  };
  // 如果是登录页面，不执行
  if (!authpaths.includes(history.location.pathname)) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
    };
  }
  return {
    fetchUserInfo,
    settings: {},
  };
}

// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // login;

      if (!initialState?.currentUser && !authpaths.includes(location.pathname)) {
        history.push('/user/login');
      }
    },
    links: isDev
      ? [
          <>
            <BookOutlined />
            <span>
              <Link to="/~docs">Documentation</Link>
            </span>
          </>,
        ]
      : [],
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

    if (message && errors) {
      notification.error({
        message,
        description: Object.keys(errors).map(
          (errorKey) => `${errorKey}: ${errors[errorKey].join(', ')}`,
        ),
      });
    }
    if (typeof data.error === 'string') {
      notification.error({
        message: 'Error',
        description: data.error,
      });
    }

    if (typeof data.data === 'object') {
      notification.error({
        description: data.data.value.map((errorMessage: string) => `${errorMessage}`),
        message: data.message,
      });
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

  if (url.includes('login')) {
    return {
      url: `${REACT_APP_API_URL}${url}`,
      options,
    };
  }

  return {
    url: `${REACT_APP_API_URL}${url}`,
    options: {
      ...options,
      interceptors: true,
      headers: token
        ? { ...options.headers, Accept: 'application/json', Authorization: `Bearer ${token}` }
        : options.headers,
    },
  };
};

export const request: RequestConfig = {
  errorHandler,
  requestInterceptors: [authHeaderInterceptor],
};
