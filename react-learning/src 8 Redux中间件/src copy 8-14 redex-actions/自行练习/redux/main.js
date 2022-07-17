import store from './store/index.js'
import { increaseActionCreator, decreaseActionCreator } from './store/action/counter.js'

const { bindActionCreators } = window.Redux;

const content = document.getElementById('content');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const render = () => {
    content.innerHTML = store.getState().counter;
}
render();

const bindActions = bindActionCreators({ increaseActionCreator, decreaseActionCreator }, store.dispatch);
function increaseCount() {
    bindActions.increaseActionCreator();
    render();
}
function decreaseCount() {
    bindActions.decreaseActionCreator();
    render();
}
increaseBtn.addEventListener('click', increaseCount, false);
decreaseBtn.addEventListener('click', decreaseCount, false);

export default render;

