import React from 'react';
import { Link } from 'umi';

export default function index(props) {
  // const config = props.route.routes.find(
  //   (config) => config.path === props.location.pathname
  // );
  // let title = '无标题';
  // if (config) {
  //   title = config.title1;
  // }
  // document.title = title;
  return (
    <div>
      <div>
        <Link to="/">首页</Link>
        <Link to="/login">登录页</Link>
        <Link to="/welcome">欢迎页</Link>
      </div>
      {props.children}
    </div>
  );
}
