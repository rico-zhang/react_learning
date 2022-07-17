const counter = {
  namespace: "counter",
  state: 10,
  reducers: {
    increase(state) {
      return state + 1;
    },
    decrease(state) {
      console.log(state);
      return state - 1;
    },
  },
  effects: {
    *asyncIncrease(action, { put, call }) {
      yield call(delay, 2000);
      yield put({
        type: "increase",
      });
      return true;
    },
    *asyncDecrease(action, { put, call }) {
      yield call(delay, 2000);
      yield put({
        type: "decrease",
      });
      return true;
    },
  },
  subscriptions: {
    resizeIncrease({ dispatch }) {
      //订阅窗口尺寸变化，每次变化让数字增加
      window.onresize = () => {
        dispatch({ type: "increase" });
      };
    },
    resizeDecrease({ dispatch, history }) {
      history.listen(() => {
        dispatch({ type: "decrease" });
      });
    },
  },
};

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, duration);
  });
}
export default counter;
