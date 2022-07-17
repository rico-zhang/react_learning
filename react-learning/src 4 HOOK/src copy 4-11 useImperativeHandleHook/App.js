import React, { Component, useRef, useImperativeHandle } from 'react'


function Test(props, ref) {

    useImperativeHandle(
        ref,
        () => {
            return {
                method() {
                    console.log("call method");
                }
            }
        },
        [],
    )
    return (
        <div >

        </div>
    )
}


const TestWrapper = React.forwardRef(Test);

export default function App() {

    const ref = useRef();
    function callMethod() {
        ref.current.method()
    }
    return (
        <div className="app">
            <TestWrapper ref={ref} />
            <button onClick={callMethod}>调用</button>
        </div>
    )
}
