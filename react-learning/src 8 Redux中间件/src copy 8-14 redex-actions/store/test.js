import store from './index'


import { increase, decrease, asyncIncrease, asyncDecrease, autoIncrease, stopAutoIncrease, add } from '../store/action/counter'
import { fetchStudents } from '../store/action/student/searchResult'
function increaseCount() {
    store.dispatch(increase());
}

function decreaseCount() {
    store.dispatch(decrease());
}

function asyncIncreaseCount() {
    store.dispatch(asyncIncrease());
}
function asyncDecreaseCount() {
    store.dispatch(asyncDecrease());
}

function fetchStudents1() {
    store.dispatch(fetchStudents());
}

function autoIncreaseCount() {
    store.dispatch(autoIncrease());
}

function stopAutoIncreaseCount() {
    store.dispatch(stopAutoIncrease());
}

function addCount(n) {
    store.dispatch(add(n))
}
window.increaseCount = increaseCount;
window.decreaseCount = decreaseCount;
window.asyncIncreaseCount = asyncIncreaseCount;
window.asyncDecreaseCount = asyncDecreaseCount;
window.fetchStudents = fetchStudents1;
window.autoIncreaseCount = autoIncreaseCount;
window.stopAutoIncreaseCount = stopAutoIncreaseCount;
window.addCount = addCount;