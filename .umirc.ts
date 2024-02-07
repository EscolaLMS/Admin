import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [],
  npmClient: 'yarn',
  locale: {},
  // locale: {
  //   // default zh-CN
  //   default: 'en-US',
  //   antd: true,
  //   // default true, when it is true, will use `navigator.language` overwrite default
  //   baseNavigator: false,
  // },
});
