import React, { Component } from 'react'
import PropTypes from "prop-types"

class A extends Component {

    static contextTypes = {
        a: PropTypes.number,
        aa: PropTypes.number
    }

    /* constructor(props, context) {
        super(props, context);
        //通过构造函数的第二个参数获取
        console.log(context);
    } */
    render() {
        //通过this.context获取
        console.log(this.context);
        return <B></B>
    }
}

function B(props, context) {
    console.log(context);
    function handleClick() {
        context.change("bb", "bb3")
    }
    return (
        <h1>
            组件B
            <button onClick={handleClick}>子组件改变context</button>
        </h1>
    )
}

B.contextTypes = {
    b: PropTypes.string,
    bb: PropTypes.string,
    change: PropTypes.func
}

export default class OldContext extends Component {

    static childContextTypes = {
        a: PropTypes.number,
        b: PropTypes.string,
        aa: PropTypes.number,
        bb: PropTypes.string,
        change: PropTypes.func
    }
    state = {
        aa: 11,
        bb: "bb"
    }
    getChildContext() {
        console.log("getChildContext");
        return {
            a: 1,
            b: "b",
            aa: this.state.aa,
            bb: this.state.bb,
            change: (key, val) => {
                this.setState({
                    [key]: val
                })
            }
        }
    }
    handleClick = () => {
        this.setState({
            aa: 2, bb: "bb2"
        })
    }
    render() {
        return (
            <div>
                <A></A>
                <button onClick={this.handleClick}>改变state</button>
            </div>
        )
    }
}
