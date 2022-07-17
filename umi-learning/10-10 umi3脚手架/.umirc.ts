import { defineConfig } from 'umi';
import logo from './src/assets/logo.png';

// console.log(logo);

export default defineConfig({
  title: 'site.title',
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  layout: {
    name: 'site.title',
    // logo: '@/assets/logo.png',
    locale: true,
  },
  // ssr: {
  //   // 默认为 true
  //   // devServerRender: false,
  // },
  // exportStatic: {},
  // sass: {
  //   // implementation: 'node-sass'),
  // },
  analytics: {
    ga: '5a66cxxxxxxxxxx9e13444',
    baidu: '5a66cxxxxxxxxxx9e13',
  },
  locale: {
    default: 'zh-CN',
    antd: false,
    title: true,
    baseNavigator: false,
    baseSeparator: '-',
  },

  routes: [
    {
      path: '/',
      component: '@/layouts/index.js',
      flatMenu: true,
      routes: [
        {
          path: '/',
          exact: true,
          component: '@/pages/index.tsx',
          name: '首页',
          access: 'canReadPageA',
          title: 'index.title',
        },
        {
          path: '/plugin-access',
          exact: true,
          component: '@/pages/plugin-access/index.js',
          name: '权限页',
          access: 'canReadPageC',
          title: 'access.title',
          headerRender: false,
        },
        {
          path: '/plugin-initial-state',
          exact: true,
          component: '@/pages/plugin-initial-state/index.js',
        },
        {
          path: '/plugin-locale',
          exact: true,
          component: '@/pages/plugin-locale/index.js',
        },
        {
          path: '/plugin-model',
          exact: true,
          component: '@/pages/plugin-model/index.js',
        },
      ],
    },
  ],
});
