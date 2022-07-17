import React, { Component, PureComponent, useState, useCallback, useMemo, useRef } from 'react'


function Item(props) {
    console.log("item render" + props.value);
    return (
        <li>{props.value}</li>
    )
}



function Test() {
    let ref;
    if (Math.random() > 0.5) {
        ref = useRef(0);
    }
    const ref1 = useRef(0);
    console.log(ref == ref1);
    return (
        <div>
            1
        </div>
    )
}


export default function App() {
    console.log("APP render");
    return (
        <div className="app">
            <Test />
        </div>
    )
}
