import React from 'react';
import { Link } from 'umi';

export default function PrivateRouter(props) {
  console.log('private');
  const loginId = localStorage.getItem('loginId');
  if (loginId) {
    return props.children;
  } else {
    document.title = '请先登录';
    return (
      <div>
        该页面必须登录后才可以访问
        <Link to="/login">请先登录</Link>
      </div>
    );
  }
}
