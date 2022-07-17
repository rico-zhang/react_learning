// import { combineReducers } from 'redux';
import {combineReducers}from '../../redux/index'
import loginUser from './loginUser';
import users from './users';

export default combineReducers({
    loginUser,
    users
});
