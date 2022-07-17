import counterReducer from './counter.js'
const { combineReducers } = window.Redux;
const reducer = combineReducers({ counter: counterReducer });



const { createStore } = window.Redux;
const store = createStore(reducer);
export default store;