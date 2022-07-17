import store from './store/index.js'
import { increase, decrease } from './store/counter.js'

const { bindActionCreators } = window.Redux;

const content = document.getElementById('content');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const render = () => {
    content.innerHTML = store.getState().counter;
}
render();

const bindActions = bindActionCreators({ increase, decrease }, store.dispatch);
function increaseCount() {
    bindActions.increase();
    render();
}
function decreaseCount() {
    bindActions.decrease();
    render();
}
increaseBtn.addEventListener('click', increaseCount, false);
decreaseBtn.addEventListener('click', decreaseCount, false);

export default render;

