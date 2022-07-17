import React from 'react';
import { NavLink } from 'umi';

export default function index(props) {
  console.log(props);
  const getLinks = () => {
    return props.routes[0].routes[0].routes.map((item) => {
      return (
        <NavLink
          key={item.path}
          to={item.path}
          exact
          style={{ marginLeft: 20 }}
        >
          {item.path}
        </NavLink>
      );
    });
  };
  return (
    <div>
      <div> {getLinks()}</div>
      {props.children}
    </div>
  );
}
