import React, { useRef } from 'react';

function login(props) {
  const textLoginId = useRef();
  const textLoginPwd = useRef();
  return (
    <div>
      <h1>登录页</h1>
      <p>
        账号：
        <input type="text" ref={textLoginId} />
      </p>
      <p>
        密码：
        <input type="password" ref={textLoginPwd} />
      </p>
      <p>
        <button
          onClick={() => {
            if (textLoginPwd.current.value === '123456') {
              localStorage.setItem('loginId', textLoginId.current.value);
              props.history.push('/welcome');
            }
          }}
        >
          登录
        </button>
      </p>
    </div>
  );
}
login.title1 = '登录页';
login.wrappers = ['@/routes/HandleTitle.js'];
export default login;
