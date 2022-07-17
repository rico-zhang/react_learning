import React from 'react';

import Menu from '../components/Menu';
export default function index(props) {
  return (
    <div>
      <Menu />
      {props.children}
      <div>
        <h1>页脚</h1>
      </div>
    </div>
  );
}
