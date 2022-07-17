import React from 'react';
import { NavLink } from 'umi';
// import linkStyles from '@/assets/css/link.css';

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
        <NavLink exact to="/">
          首页
        </NavLink>
        <NavLink exact to="/login">
          登录页
        </NavLink>
        <NavLink exact to="/welcome">
          欢迎页
        </NavLink>
        <NavLink exact to="/counter">
          计数器
        </NavLink>
        <NavLink exact to="/student">
          学生
        </NavLink>
      </div>
      {props.children}
    </div>
  );
}
