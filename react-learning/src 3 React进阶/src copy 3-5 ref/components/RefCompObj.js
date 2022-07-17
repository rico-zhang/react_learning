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

    //React.createRef()返回值{ current: null } 所以可以直接赋值为{ current: null }
    inp = React.createRef();
    compA = { current: null };

    handleClick = () => {
        this.inp.current.focus();
        console.log(this.compA.current);
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inp} />
                <CompA ref={this.compA}></CompA>
                {/* <CompB ref="comB"></CompB> */}
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}
