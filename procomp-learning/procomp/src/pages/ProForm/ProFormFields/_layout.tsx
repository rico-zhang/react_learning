import React from 'react';
import { IRouteComponentProps } from 'umi';

function _layout(props: IRouteComponentProps) {
  return <div>{props.children}</div>;
}

_layout.menu = {
  name: 'ProFormFields',
};
export default _layout;
