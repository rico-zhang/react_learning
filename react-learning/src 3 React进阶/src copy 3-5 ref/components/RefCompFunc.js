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
        this.inp.focus();
        console.log(this.compA);
    }

    getInpRef = (e) => {
        this.inp = e;
    }

    getCompARef = (e) => {
        this.compA = e;
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.getInpRef} />
                <CompA ref={this.getCompARef}></CompA>
                {/* <CompB ref="comB"></CompB> */}
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}
