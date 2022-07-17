import React, { useState } from 'react'


export default function App() {

    const [count, setCount] = useState(0);
    return (
        <div className="app" >
            <button onClick={() => { setCount(count - 1) }}>-</button>
            {count}
            <button onClick={() => { setCount(count + 1) }}>+</button>
        </div>
    )
}
