import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import sagaTask from './saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import {routerMiddleware} from 'connected-react-router'
import history from './history'
const sagaMid = createSagaMiddleware();//创建一个saga的中间件

const routerMid = routerMiddleware(history);

const middleWare = applyMiddleware(routerMid,sagaMid, logger);
const store = createStore(reducer, composeWithDevTools(middleWare));

//启动saga任务
sagaMid.run(sagaTask);
export default store;