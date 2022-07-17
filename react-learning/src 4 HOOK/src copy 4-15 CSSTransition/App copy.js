import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import "./App.css"

const duration = 2000;

export default function App() {
    const [inProp, setInProp] = useState(true);
    return (
        <div className="app">
            <CSSTransition in={inProp} timeout={duration}
                appear
            // classNames="test"
            >
                <h1>一个标题</h1>
            </CSSTransition>
            <button onClick={() => setInProp(!inProp)}>
                Click
            </button>
        </div>
    )
}
