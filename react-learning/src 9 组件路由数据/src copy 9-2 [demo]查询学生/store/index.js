import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import sagaTask from './saga'

const sagaMid = createSagaMiddleware();//创建一个saga的中间件

const middleWare = applyMiddleware(sagaMid, logger);
const store = createStore(reducer, middleWare);

//启动saga任务
sagaMid.run(sagaTask);
export default store;