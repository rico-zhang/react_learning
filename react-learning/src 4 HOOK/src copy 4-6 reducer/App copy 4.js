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

function useReducer(reducer,initState) {
    const [state, setState] = useState(initState);
    function dispatch(action) {
        const res = reducer(state, action);
        setState(res);
    }
    return [state, dispatch]
}

export default function App() {
    const [count, dispatch] = useReducer(reducer,0);
    return (
        <div className="app" >
            <button onClick={() => { dispatch({ type: "decrease" }) }}>-</button>
            {count}
            <button onClick={() => { dispatch({ type: "increase" }) }}>+</button>
        </div>
    )
}
