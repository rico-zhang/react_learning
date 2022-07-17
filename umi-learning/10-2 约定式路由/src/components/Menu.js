import React from 'react';
import { NavLink, history } from 'umi';

export default function Menu() {
  return (
    <div>
      <NavLink to="/">首页</NavLink>
      <button
        onClick={() => {
          history.push('/a');
        }}
      >
        a页
      </button>
      <NavLink to="/b">b页</NavLink>
      <button
        onClick={() => {
          history.push('/sub');
        }}
      >
        sub页
      </button>
    </div>
  );
}
