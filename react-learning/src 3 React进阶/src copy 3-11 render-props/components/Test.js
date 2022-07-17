import React from 'react'
import MovablePanel from './MovablePanel'
import ShowMousePoint from './ShowMousePoint'
import MoveListener from './MoveListener'
import WithMouseListener from "./WithMouseListener"

function movable(props) {
    return <div className="move" style={{
        width: 100,
        height: 100,
        backgroundColor: "#ccc",
        position: "absolute",
        left: props.x - 50,
        top: props.y - 50
    }}>
    </div>
}

function showMouse(props) {
    return <p>
        left:{parseInt(props.x)}
        top:{parseInt(props.y)}
    </p>
}
const NewMovable = WithMouseListener(movable);
const NewShowMouse = WithMouseListener(showMouse);

export default function Test() {



    return (
        <div>
            <p>基础</p>
            <MovablePanel />
            <ShowMousePoint />
            <p>render-props</p>
            <MoveListener render={movable} />
            <MoveListener render={showMouse} />
            <p>HOC</p>
            <NewMovable />
            <NewShowMouse />
        </div>
    )
}
