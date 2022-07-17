import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import "./App.css"
import "animate.css"

const duration = 2000;

const Comp1 = ({ inProp }) => {
    return (
        <CSSTransition in={inProp} appear timeout={duration} className="title animate__animated" classNames={{
            appearActive:"animate__backInRight",
            enterActive:"animate__backInRight",
            exitActive:"animate__backOutLeft",
            exitDone:"exit-done"
        }}>
            <h1 >组件1</h1>
        </CSSTransition>
    );
}

const Comp2 = ({ inProp }) => {
    return (
        <CSSTransition in={inProp} timeout={duration} mountOnEnter  className="title animate__animated" classNames={{
            appearActive:"animate__backInRight",
            enterActive:"animate__backInRight",
            exitActive:"animate__backOutLeft",
            exitDone:"exit-done"
        }}>
            <h1>组件2</h1>
        </CSSTransition>
    )
}

export default function App() {
    const [inProp, setInProp] = useState(true);
    return (
        <div className="app">
            <div className="container">
            <Comp1 inProp={inProp}></Comp1>
            <Comp2 inProp={!inProp}></Comp2>
            </div>
            <button onClick={() => setInProp(!inProp)}>
                Click
            </button>
        </div>
    )
}
