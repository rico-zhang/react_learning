import React, { Component } from 'react';
import { getRandom } from "../utils.js";
import Ball from "./Ball";

export default class BallList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ballInfos: []
        }
        this.timer = setInterval(() => {
            let info = {
                left: getRandom(0, document.documentElement.clientWidth - 100),
                top: getRandom(0, document.documentElement.clientHeight - 100),
                xSpeed: getRandom(50, 500),
                ySpeed: getRandom(50, 500),
                bg: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`
            }
            this.setState({
                ballInfos: [...this.state.ballInfos, info]
            });
            if (this.state.ballInfos.length === 10) {
                clearInterval(this.timer)
            }
        }, 1000);
    }

    render() {
        const balls = this.state.ballInfos.map((item, i) => <Ball {...item} key={i}></Ball>)
        return (
            <>
                {balls}
            </>
        )
    }
}
