import { IConfig } from 'umi-types'; // ref: https://umijs.org/config/

const config: IConfig = {
  treeShaking: true,
  block: {
    defaultGitUrl: 'https://github.com/ant-design/pro-blocks',
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/demo',
          component: './Demo',
        },
        {
          path: '/account-center',
          component: './account-center',
        },
        {
          path: '/dashboard/workplace',
          component: './dashboard/workplace',
        },
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          immer: true,
          hmr: true,
        },
        dynamicImport: {
          webpackChunkName: true,
        },
        title: '10-9 umi脚手架',
        dll: true,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
        locale: {
          baseNavigator: false,
          default: 'en-US',
        },
        hd: false,
      },
    ],
  ],
};
export default config;
