import React, { Component, PureComponent, useState, useCallback, useMemo } from 'react'




class Test extends PureComponent {
    render() {
        console.log("Test render");
        return (
            <div>
                {this.props.txt}
                <button onClick={this.props.onClick}>改变文本</button>
            </div>
        )
    }
}



function Parent() {
    console.log("Parent render");
    const [txt, setTxt] = useState(123);
    const [val, setVal] = useState('');
    // const callback = useCallback(
    //     () => {
    //         setTxt(123)
    //     },
    //     []
    // );
    //利用useMemo 实现 useCallback的效果
    const callback = useMemo(() => () => { setTxt(123) }, [])

    console.log(callback);
    return (
        <div>
            <Test txt={txt} onClick={callback} />
            <input type="text" value={val} onChange={e => setVal(e.target.value)} />
        </div>
    )
}


export default function App() {
    console.log("APP render");
    return (
        <div className="app">
            <Parent />
        </div>
    )
}
