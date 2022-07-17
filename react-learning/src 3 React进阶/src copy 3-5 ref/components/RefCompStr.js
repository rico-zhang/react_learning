import React, { Component } from 'react'


class CompA extends Component {
    method = () => {
        console.log("CompA-method");
    }
    render() {
        return (
            <div>CompA</div>
        )
    }
}

function CompB(props) {
    return (
        <div>CompB</div>
    )
}


export default class RefComp extends Component {
    handleClick = () => {
        this.refs.inp.focus();
        console.log(this.refs.compA);
    }
    render() {
        return (
            <div>
                <input type="text" ref="inp" />
                <CompA ref="compA"></CompA>
                {/* <CompB ref="comB"></CompB> */}
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}
