import React, { Component, memo, PureComponent } from 'react'
import "./Task.css"
import PropTypes from "prop-types"
import { ObjectEqual } from "./helper"

export default class Task extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        isFinish: PropTypes.bool.isRequired
    }

    render() {
        console.log("task render");
        return (
            <li className={`task ${this.props.isFinish && "finish"}`}>
                {this.props.name}
            </li>
        )
    }
}

//模拟 PureComponent
/* export default class Task extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        isFinish: PropTypes.bool.isRequired
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return !(ObjectEqual(this.props, nextProps) && ObjectEqual(this.state, nextState));
    }


    render() {
        console.log("task render");
        return (
            <li className={`task ${this.props.isFinish && "finish"}`}>
                {this.props.name}
            </li>
        )
    }
} */


// 函数组件使用React.memo
/* function Task(props) {
    console.log("task render");
    return (
        <li className={`task ${props.isFinish && "finish"}`}>
            {props.name}
        </li>
    )
}


Task.propTypes = {
    name: PropTypes.string.isRequired,
    isFinish: PropTypes.bool.isRequired
}

export default React.memo(Task) */


//模拟memo
/* export default myMemo(Task)

function myMemo(Comp) {
    return class WithMemo extends PureComponent {
        render() {
            return (
                // <Comp {...this.props}></Comp>
                <>
                    {
                        Comp(this.props)
                    }
                </>

            )
        }
    }
}
 */
