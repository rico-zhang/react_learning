import React, { Component } from 'react'

export default class Tick extends Component {

    // 状态初始化   es新的语法
    // state = {
    //     left: this.props.number
    // }
    constructor(props) {
        super(props);
        // 状态初始化
        this.state = {
            left: this.props.number
        }
        this.timer = setInterval(() => {

            this.setState({
                left: this.state.left - 1
            });
            if (this.state.left === 0) {
                clearInterval(this.timer)
            }
        }, 1000);
    }

    render() {
        return (
            <h1>
                倒计时剩余时间:{this.state.left}
            </h1>
        )
    }
}
