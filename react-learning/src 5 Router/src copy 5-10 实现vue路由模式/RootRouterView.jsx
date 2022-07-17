import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routerConfig'

function getRoutes(routes, basePath) {
    if (!Array.isArray(routes))
        return null;
    return routes.map((it, i) => {
        const { children, component: Comp, path, ...rest } = it;
        let newPath = basePath + path;
        newPath = newPath.replace(/\/\//g, '/');
        return <Route {...rest} path={newPath} render={(values) => {
            return <Comp>
                {getRoutes(it.children, newPath)}
            </Comp>
        }} />
    })
}


export default function RootRouterView() {
    return <Switch>
        {getRoutes(routes, '')}
    </Switch>;
}
