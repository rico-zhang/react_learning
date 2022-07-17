import React from 'react';
import ReactDOM from 'react-dom';


function handleClick(e) {
  console.log("click", e);
}

const btn = <button onClick={handleClick}>点击</button>

ReactDOM.render(btn, document.getElementById("root"));




