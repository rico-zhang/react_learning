import { defineConfig } from 'umi';
export default {
  routes: [
    {
      path: '/',
      component: '@/layouts/index.js',
      routes: [
        {
          path: '/',
          exact: true,
          component: '@/pages/index.js',
          title1: '首页',
          wrappers: ['@/routes/HandleTitle.js'],
        },
        {
          path: '/login1',
          exact: true,
          component: '@/pages/login.js',
          title1: '登录页',
          wrappers: ['@/routes/HandleTitle.js'],
        },
        {
          path: '/welcome',
          exact: true,
          component: '@/pages/welcome.js',
          title1: '欢迎页',
          wrappers: ['@/routes/PrivateRouter.js', '@/routes/HandleTitle.js'],
        },
      ],
    },
  ],
};
