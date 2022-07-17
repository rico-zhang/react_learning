import React, { useState,useEffect } from 'react'



function CompA(props) {
    const [count, setCount] = useState(0);
    console.log("render");
    function changeCount(num) {
        setCount(count + num);
    }
    useEffect(() => {
        document.title = count;
        return () => {
            document.title = 0;
        }
    }, [count])
    return (<p>
        <button onClick={() => { changeCount(-1) }}>-</button>
        {count}
        <button onClick={() => { changeCount(1) }}>+</button>
    </p>

    )
}

export default function App() {
    return (
        <div className="app" >
            <CompA />
        </div>
    )
}
