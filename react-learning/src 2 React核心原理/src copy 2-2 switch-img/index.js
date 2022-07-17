import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
const arr = [img1, img2, img3];

const container = document.getElementById("root");
let index = 1;
let timer = null;
function render() {
  ReactDOM.render((<img src={arr[index]} alt=""></img>), container)
}
function start() {
  stop();
  console.log("start");
  timer = setInterval(() => {
    index = (index + 1) % 3;
    console.log(index);
    render();
  }, 1000);
}
function stop(){
  console.log("stop");
  clearInterval(timer);
}

container.addEventListener("mouseenter",stop );
container.addEventListener("mouseleave",start);
start();

