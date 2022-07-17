import React from 'react';

export default function HandleTitle(props) {
  console.log('title');
  document.title = props.route.title1;
  return props.children;
}
