import React from 'react';
import { Link } from 'react-router-dom';
import routes from './routerConfig'

function getPathByName(routes, name, basePath) {
    if (!Array.isArray(routes))
        return '';
    for (const it of routes) {
        if (it.name === name) {
            let newPath = basePath + it.path;
            newPath = newPath.replace(/\/\//g, '/');
            return newPath;
        } else {
            let path = getPathByName(it.children, name, it.path)
            if (path) {
                return path;
            }
        }
    }
}
export default function BetterLink(props) {
    const { to, ...rest } = props;
    let newPath  = to;
    if (to.name) {
         newPath = getPathByName(routes, to.name, '')
        if (!newPath)
            throw new Error('错误的路由名称')
    }
    return <Link to={newPath}{...rest} />

}
