import React from 'react';
import Welcome from '../components/Welcome';

function welcome() {
  const loginId = localStorage.getItem('loginId');
  return (
    <div>
      <Welcome />
    </div>
  );
}

welcome.title1 = '欢迎页';
welcome.wrappers = ['@/routes/PrivateRouter.js', '@/routes/HandleTitle.js'];
export default welcome;
