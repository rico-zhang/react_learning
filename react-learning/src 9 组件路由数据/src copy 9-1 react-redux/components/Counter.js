import React, { Component } from 'react'
import store from '../store'
import { increase, decrease, asyncIncrease, asyncDecrease } from '../store/action/counter'
import { connect } from 'react-redux'

function Counter(props) {
    return (
        <div>
            <h1>{props.number}</h1>
            <p>
                <button onClick={props.onasyncDecrease}>异步减</button>
                <button onClick={props.ondecrease}>减</button>
                <button onClick={props.onincrease}>加</button>
                <button onClick={props.onasyncIncrease}>异步加</button>
            </p>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        number: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onasyncDecrease() {
            dispatch(asyncDecrease());
        },
        ondecrease() {
            dispatch(decrease());
        },
        onincrease() {
            dispatch(increase());
        },
        onasyncIncrease() {
            dispatch(asyncIncrease());
        }
    }
}
// export default class CounterContainer extends Component {
//     constructor() {
//         super();
//         this.state = mapStateToProps(store.getState());
//         this.event = mapDispatchToProps(store.dispatch);
//         store.subscribe(() => {
//             this.setState(mapStateToProps(store.getState()));
//         });
//     }
//     render() {
//         return (
//             <Counter {...this.state} {...this.event} />
//         )
//     }
// }



//connect 返回一个高阶组件
//export default connect(mapStateToProps, mapDispatchToProps)(Counter)

const obj = {
    onasyncDecrease: asyncDecrease,
    ondecrease:decrease,
    onincrease:increase,
    onasyncIncrease:asyncIncrease
}

export default connect(mapStateToProps,obj)(Counter);


