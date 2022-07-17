import reducer from './reducer/index.js'
const {createStore} = window.Redux;
const store = createStore(reducer);
export default store;