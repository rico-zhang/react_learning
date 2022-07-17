import React, { Component,useRef } from 'react'


class Test extends Component {
    method() {
        console.log("call method");
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}


export default function App() {

   const ref = useRef();
    function callMethod() {
        ref.current.method();
    }
    return (
        <div className="app">
            <Test ref={ref} />
            <button onClick={callMethod}>调用</button>
        </div>
    )
}
