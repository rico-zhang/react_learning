import React, { useRef } from 'react';
import { useModel } from 'umi';

export default function index() {
  const { user, signin, signout } = useModel('user', (model) => ({
    user: model.user,
    signin: model.signin,
    signout: model.signout,
  }));
  const textAccountRef = useRef(null);
  const textPwdRef = useRef(null);
  const handleLogin = () => {
    const account = textAccountRef.current.value;
    const pwd = textPwdRef.current.value;
    signin(account, pwd);
  };
  const handleLogOut = () => {
    signout();
  };
  return (
    <div>
      <p>{user}</p>
      <input type="text" ref={textAccountRef} />
      <input type="text" ref={textPwdRef} />
      <button onClick={handleLogin}>登录</button>
      <button onClick={handleLogOut}>注销</button>
    </div>
  );
}
