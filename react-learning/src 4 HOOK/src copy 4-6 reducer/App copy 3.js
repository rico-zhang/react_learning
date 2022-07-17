import React, { useState } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case "decrease":
            return state - 1;
        case "increase":
            return state + 1
        default:
            return state;
    }
}

function useReducer() {
    const [count, setCount] = useState(0);
    function dispatch(action) {
        const res = reducer(count, action);
        setCount(res);
    }
    return [count, dispatch]
}

export default function App() {
    const [count, dispatch] = useReducer();
    return (
        <div className="app" >
            <button onClick={() => { dispatch({ type: "decrease" }) }}>-</button>
            {count}
            <button onClick={() => { dispatch({ type: "increase" }) }}>+</button>
        </div>
    )
}
