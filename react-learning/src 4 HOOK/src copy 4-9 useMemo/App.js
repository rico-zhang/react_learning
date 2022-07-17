import React, { Component, PureComponent, useState, useCallback, useMemo } from 'react'


function Item(props) {
    console.log("item render" + props.value);
    return (
        <li>{props.value}</li>
    )
}



function Test() {
    const [option, setOption] = useState({ min: 0, max: 1000 });
    const [val, setVal] = useState(0)

    //不使用useMemo
    // const list = [];
    // for (let i = option.min; i < option.max; i++) {
    //     console.log(i);
    //     const item = <Item key={i} value={i} />
    //     list.push(item);
    // }

    //使用 useMemo
    const list = useMemo(() => {
        const list = [];
        for (let i = option.min; i < option.max; i++) {
            console.log(i);
            const item = <Item key={i} value={i} />
            list.push(item);
        }
        return list;
    }, [option.min, option.max])
    return (
        <ul>
            {list}
            <input type="text" value={val} onChange={e => setVal(e.target.value)} />
        </ul>
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
