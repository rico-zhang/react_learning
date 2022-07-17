import React, { useRef } from 'react';
import LoginForm from '@/components/LoginForm';

function login(props) {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
login.title1 = '登录页';
login.wrappers = ['@/routes/HandleTitle.js'];
export default login;
