import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


const middleWare = applyMiddleware(thunk,logger);
const store = createStore(reducer, middleWare);

export default store;