import React from 'react';
import Counter from '../components/Counter';
import { Button } from 'antd';

function counter() {
  return (
    <div>
      <h1>计数器</h1>
      <Counter />
    </div>
  );
}

counter.wrappers = ['@/routes/HandleTitle.js'];
export default counter;
