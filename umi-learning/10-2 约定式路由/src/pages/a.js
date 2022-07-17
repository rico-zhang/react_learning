import React from 'react';
import { history } from 'umi';
import A from '@/components/A';

export default function a() {
  return (
    <div>
      <h1>页面a</h1>
      <A />
      <button
        onClick={() => {
          history.push('/b');
        }}
      >
        跳转到b页面
      </button>
    </div>
  );
}
