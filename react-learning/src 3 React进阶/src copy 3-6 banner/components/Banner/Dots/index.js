import React from 'react'
import "./index.css"

export default function Dots(props) {

    function getDots() {
        let array = new Array(props.total);
        array = array.fill(0).map((it, i) =>
        (<span
            className={i === props.currentIndex ? "active" : ""}
            onClick={() => { props.onChange(i) }}
            key={i}>
        </span>));
        return array;
    }

    return (
        <div className="dots">
            {getDots()}
        </div>
    )
}






