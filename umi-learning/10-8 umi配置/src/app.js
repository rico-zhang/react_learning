import React from 'react';
import logger from 'redux-logger';
import { routerRedux } from 'dva';
export function patchRoutes({ routes }) {
  console.log('app.js - patchRoutes', routes);
  //动态的路由配置
  //参数routes是默认的路由配置
  routes[0].routes[0].title1 = '修改了';
  //在此位置 可以动态的修改路由配置
}

export const dva = {
  config: {
    onAction: [logger],
  },
  plugin: [],
};

export function render(oldRender) {
  console.log('app.js - render');
  oldRender();
}

export function modifyClientRenderOpts(memo) {
  console.log('app.js - modifyClientRenderOpts', memo);
  return {
    ...memo,
  };
}

export function onRouteChange(params) {
  console.log('app.js - onRouteChange', params);
}

export function rootContainer(container, args) {
  console.log('app.js - rootContainer', container, args);
  return React.createElement(
    routerRedux.ConnectedRouter,
    { history: args.history },
    container
  );
}
