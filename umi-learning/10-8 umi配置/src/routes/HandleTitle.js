import React from 'react';

export default function HandleTitle(props) {
  document.title = props.route.title1 || '没有title';
  return props.children;
}
