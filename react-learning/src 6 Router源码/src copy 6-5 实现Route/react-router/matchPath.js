import { pathToRegexp } from "path-to-regexp";

const defaultOptions = {
  sensitive: false,
  strict: false,
  exact: false,
};
/**
 * 得到匹配结果（match对象），如果没有匹配，返回null
 * @param {*} pathname 路径
 * @param {*} path 路径规则
 * @param {*} options 相关配置，该配置是一个对象，该对象中，可以出现：exact、sensitive、strict
 */
export default function matchPath(pathname, path, options) {
  const keys = []; //保存路径规则中的关键字
  const regexp = pathToRegexp(path, keys, getOptions(options));
  const result = regexp.exec(pathname); //匹配url地址
  if (result !== null) {
    //匹配了
    let groups = Array.from(result);
    const url = groups.shift(); //匹配的分组结果
    let params = getParams(keys, groups);
    return {
      isExact: pathname === url,
      params: params,
      path: path,
      url: url,
    };
  }
  return null; //没有匹配
}

function getOptions(options = {}) {
  const newOptions = { ...defaultOptions, ...options };
  return {
    sensitive: newOptions.sensitive,
    strict: newOptions.strict,
    end: newOptions.exact,
  };
}

function getParams(keys, groups) {
  let params = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = groups[i];
    params[key.name] = value;
  }
  return params;
}

console.log(matchPath("/useR/aa/bb", "/user/:id/:name"));
