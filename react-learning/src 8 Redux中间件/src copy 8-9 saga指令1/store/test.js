import store from './index'


import { increase, decrease, asyncIncrease, asyncDecrease } from '../store/action/counter'
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

window.increaseCount = increaseCount;
window.decreaseCount = decreaseCount;
window.asyncIncreaseCount = asyncIncreaseCount;
window.asyncDecreaseCount = asyncDecreaseCount;
window.fetchStudents = fetchStudents1;