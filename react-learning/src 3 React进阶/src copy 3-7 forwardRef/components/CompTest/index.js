import React, { Component } from 'react'

function A(props) {
    return (
        <h1 ref={props.ref1}>A</h1>
    )
}

class B extends Component {
    render() {
        return <p ref={this.props.ref1}>B</p>
    }
}

export default class CompTest extends Component {
    myRefA = React.createRef();
    myRefB = React.createRef();

    componentDidMount() {
        console.log(this.myRefA);
        console.log(this.myRefB);
    }
    handleClick = () => {
        console.log(this.myRefA);
        console.log(this.myRefB);
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                <A ref1={this.myRefA}></A>
                <B ref1={this.myRefB}></B>
            </div>
        )
    }
}
