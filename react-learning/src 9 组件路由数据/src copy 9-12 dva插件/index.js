import dva from "dva";
import counter from "./models/counter";
import students from "./models/students";
import routerConfig from "./routerConfig";
import { createBrowserHistory } from "history";
import myPlugin from "./myPlugin";
import createLoading from "dva-loading";

const app = dva({
  history: createBrowserHistory(),
  initialState: {
    counter: 100,
  },
  // onError(err, dispatch) {
  //   console.log(err.message);
  // },
  // onAction: logger,
  // onStateChange(state) {
  //   console.log(state.counter);
  // },
  // onReducer(reducer) {
  //   return function (state, action) {
  //     console.log("reducer即将执行");
  //     const newState = reducer(state, action);
  //     console.log("reducer执行完毕");
  //     return newState;
  //   };
  // },
  // onEffect(oldEffect, sagaEffect, model, actionType) {
  //   return function* (action) {
  //     console.log("effect即将执行");
  //     yield oldEffect(action);
  //     console.log("effect执行完毕");
  //   };
  // },
  // extraReducers: {
  //   abc: (state = 23, action) => {
  //     return state;
  //   },
  // },
  // extraEnhancers: [
  //   function (createStore) {
  //     return function (...args) {
  //       console.log("即将创建store1");
  //       const store = createStore(...args);
  //       console.log("创建store1完毕");
  //       return store;
  //     };
  //   },
  //   function (createStore) {
  //     return function (...args) {
  //       console.log("即将创建store2");
  //       const store = createStore(...args);
  //       console.log("创建store2完毕");
  //       return store;
  //     };
  //   },
  // ],
});
app.model(counter);
app.model(students);
app.router(routerConfig);
// app.use(myPlugin);
app.use(createLoading());
app.start("#root");
