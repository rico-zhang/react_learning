import React from 'react';
import { history } from 'umi';

function welcome() {
  const loginId = localStorage.getItem('loginId');
  return (
    <div>
      <h1>欢迎你,{loginId}</h1>
      <p>
        <button
          onClick={() => {
            localStorage.removeItem('loginId');
            history.push('/login');
          }}
        >
          注销
        </button>
      </p>
    </div>
  );
}

welcome.title1 = '欢迎页';
welcome.wrappers = ['@/routes/PrivateRouter.js', '@/routes/HandleTitle.js'];
export default welcome;
