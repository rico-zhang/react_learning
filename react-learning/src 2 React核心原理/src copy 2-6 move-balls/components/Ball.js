import React, { Component } from 'react';
import "./Ball.css"

export default class Ball extends Component {

    constructor(props) {
        super(props);
        //属性总需要分别传递横纵坐标的速度
        this.state = {
            left: this.props.left || 0,//x位置
            top: this.props.top || 0,//y位置
        }
        this.xSpeed = this.props.xSpeed;
        this.ySpeed = this.props.ySpeed;
        var duration = 16;

        setInterval(() => {
            const xDis = this.xSpeed * duration / 1000,
                yDis = this.ySpeed * duration / 1000;
            let newLeft = this.state.left + xDis,
                newTop = this.state.top + yDis;

            //横向边界处理
            if (newLeft < 0) {
                newLeft = 0;
                this.xSpeed *= -1;
            } else if (newLeft > document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100;
                this.xSpeed *= -1;
            }

            //纵向边界处理
            if (newTop < 0) {
                newTop = 0;
                this.ySpeed *= -1;
            } else if (newTop > document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100;
                this.ySpeed *= -1;
            }
            this.setState({
                left: newLeft,
                top: newTop
            })
        }, duration);

    }

    render() {
        return (
            <div className="ball" style={{
                left: this.state.left,
                top: this.state.top,
                background: this.props.bg || "red"
            }}>

            </div>
        )
    }
}
