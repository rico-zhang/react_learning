import React,{Component} from 'react'

export default function WithMouseListener(Comp) {
    return class WithMouseListener extends Component {
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
                    <Comp {...this.props} x={this.state.x} y={this.state.y} />
                </div>
            )
        }
    }
}
