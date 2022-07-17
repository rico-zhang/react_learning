export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/order',
    name: 'order',
    icon: 'smile',
    component: './Order',
    routes: [
      {
        path: '/order/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '查询表格',
    icon: 'smile',
    path: '/listtablelist',
    component: './ListTableList',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '空白页面',
    icon: 'smile',
    path: '/emptypage',
    component: './EmptyPage',
  },
  {
    name: '分析页',
    icon: 'smile',
    path: '/dashboardanalysis',
    component: './DashboardAnalysis',
  },
  {
    name: '基础详情页',
    icon: 'smile',
    path: '/profilebasic',
    component: './ProfileBasic',
  },
  {
    component: './404',
  },
];
