import React, { Component } from 'react'
import "./index.css"

export default class MovablePanel extends Component {

    state = {
        x: 100,
        y: 100
    }
    boxRef = React.createRef();
    handleMouseMove = (e) => {
        const { left, top } = this.boxRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        this.setState({
            x, y
        })
    }
    render() {
        return (
            <div className="box" onMouseMove={this.handleMouseMove} ref={this.boxRef}>
                <div className="move" style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "#ccc",
                    position: "absolute",
                    left: this.state.x - 50,
                    top: this.state.y - 50
                }}>

                </div>
            </div>
        )
    }
}
