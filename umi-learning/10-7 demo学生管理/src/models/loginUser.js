export default {
  state: null,
  subscriptions: {
    syncLocalStorage({ dispatch }) {
      const loginId = localStorage.getItem('loginId');
      if (loginId) {
        dispatch({ type: 'setLoginUser', payload: loginId });
      }
    },
  },
  reducers: {
    setLoginUser(state, action) {
      return action.payload;
    },
  },
  effects: {
    *login({ payload }, { put }) {
      const { loginId, loginPwd } = payload;
      if (loginId === 'admin' && loginPwd === '123456') {
        //登录成功
        yield put({ type: 'setLoading', payload: loginId });
        localStorage.setItem('loginId', loginId);
        return true;
      }
      return false;
    },
    *loginOut(action, { put }) {
      localStorage.removeItem('loginId');
      yield put({ type: 'setLoginUser', payload: null });
      return true;
    },
  },
};
