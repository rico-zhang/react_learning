import React from 'react';

export default function layout(props) {
  return (
    <div>
      <h1>sub的通用子菜单</h1>
      {props.children}
    </div>
  );
}
