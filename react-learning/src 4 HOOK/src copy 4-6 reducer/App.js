import React, { useReducer } from 'react'

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

export default function App() {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div className="app" >
            <button onClick={() => { dispatch({ type: "decrease" }) }}>-</button>
            {count}
            <button onClick={() => { dispatch({ type: "increase" }) }}>+</button>
        </div>
    )
}
