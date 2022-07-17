import React, { useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import "./App.css"

const duration = 2000;

export default function App() {
    const [inProp, setInProp] = useState(true);
    return (
        <div className="app">
            <SwitchTransition mode="out-in">
                <CSSTransition key={inProp ? "1" : "2"} timeout={duration}>
                  <h1> {inProp ? "title1" : "title2"}</h1> 
                </CSSTransition>
            </SwitchTransition>
            <button onClick={() => setInProp(!inProp)}>
                Click
            </button>
        </div>
    )
}
