import React from 'react'
import "./index.css"

export default function Arrow(props) {

    function handleClick(type) {
        props.onChange && props.onChange(type)
    }

    return (
        <div className="arrow">
            <span className="arrow-left" onClick={() => handleClick(-1)}>&lt;</span>
            <span className="arrow-right" onClick={() => handleClick(1)}>&gt;</span>
        </div>
    )
}
