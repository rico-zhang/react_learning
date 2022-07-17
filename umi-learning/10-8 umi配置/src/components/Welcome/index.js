import React from 'react';
import { connect, history } from 'umi';
import { routerRedux } from 'dva';

function Welcome(props) {
  return (
    <div>
      <h1>欢迎你,{props.loginId}</h1>
      <p>
        <button onClick={props.loginOut}>注销</button>
      </p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loginId: state.loginUser,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    async loginOut() {
      const result = await dispatch({
        type: 'loginUser/loginOut',
      });
      if (result) {
        // history.push('/login');
        dispatch(routerRedux.push('/login'));
      }
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
