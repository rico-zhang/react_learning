import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
// import promise from '../redux-promise'


const middleWare = applyMiddleware(promise,logger);
const store = createStore(reducer, middleWare);

export default store;