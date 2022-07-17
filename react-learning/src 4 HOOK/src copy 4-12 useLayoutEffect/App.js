import React, { useState, useEffect, useRef,useLayoutEffect } from 'react'




export default function App() {

    const [n, setN] = useState(0);
    const ref = useRef()
    //会出现闪烁
    // useEffect(() => {
    //     for (let index = 0; index < 1000000; index++) {
    //         for (let index = 0; index < 1000; index++) {
    //         let i = 10;
    //         }
    //     }
    //     ref.current.innerText = Math.random();
    // });
    //不会出现闪烁
    useLayoutEffect(() => {
        for (let index = 0; index < 1000000; index++) {
            for (let index = 0; index < 1000; index++) {
            let i = 10;
            }
        }
        ref.current.innerText = Math.random();
    })
    function callMethod() {
        setN(n + 1);
    }
    return (
        <div className="app">
            <div ref={ref}>{n}</div>
            <button onClick={callMethod}>+</button>
        </div>
    )
}
