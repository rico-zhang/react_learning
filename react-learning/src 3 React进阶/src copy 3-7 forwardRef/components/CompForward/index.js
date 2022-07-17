import React, { Component } from 'react'

function A(props, ref) {
    return <h1 ref={ref}>A</h1>
}

const NewA = React.forwardRef(A);

export default class CompForward extends Component {

    myRef = React.createRef();
    componentDidMount() {
        console.log(this.myRef);
    }
    handleClick = () => {
        console.log(this.myRef);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <NewA ref={this.myRef}></NewA>
            </div>
        )
    }
}
