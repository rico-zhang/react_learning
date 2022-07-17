import { combineReducers } from 'redux'
import counter from './counter'
import student from './student'
import {connectRouter} from 'connected-react-router'
import history from '../history'
export default combineReducers({
    student,
    counter,
    //添加路由状态
    router:connectRouter(history)
})