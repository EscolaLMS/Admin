// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const {
  REACT_APP_ENV,
  REACT_APP_API_URL,
  REACT_APP_YBUG,
  REACT_APP_SENTRYDSN,
  BASE_PATH,
  REACT_APP_SENTRY_RELEASE,
} = process.env;

export default defineConfig({
  history: { type: 'hash' },
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'pt-BR',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: false,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
    'control-border-radius': '4px',
    'input-height-base': '40px',
    'form-vertical-label-padding': '0 0 12px',
    'form-item-margin-bottom': '20px',
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  devtool: 'source-map',
  manifest: {
    basePath: '/',
  },
  define: {
    REACT_APP_API_URL: typeof REACT_APP_API_URL !== 'undefined' ? REACT_APP_API_URL : '', // API address,
    REACT_APP_SENTRYDSN: typeof REACT_APP_SENTRYDSN !== 'undefined' ? REACT_APP_SENTRYDSN : '',
    REACT_APP_YBUG: typeof REACT_APP_YBUG !== 'undefined' ? REACT_APP_YBUG : '',
    REACT_APP_SENTRY_RELEASE:
      typeof REACT_APP_SENTRY_RELEASE !== 'undefined' ? REACT_APP_SENTRY_RELEASE : '',
  },
  base: BASE_PATH || '/',
  publicPath: BASE_PATH || '/',
  access: {
    strictMode: true,
  },
  chainWebpack: (conf) => {
    conf.module
      .rule('mjs$')
      .test(/\.mjs$/)
      .include.add(/node_modules/)
      .end()
      .type('javascript/auto');
  },
});
