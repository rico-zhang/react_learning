import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

import  MyComp from "./MyFuncComp.js";

import MyClassComp from "./MyClassComp.js";

// 当函数来运行 不会形成组件结构
// ReactDOM.render((
//   <div>
//     {MyComp()}
//   </div>
// ), document.getElementById("root"))

// 当组件来使用 可以形成组件结构
ReactDOM.render((
  <div>
    <MyComp number="1"></MyComp>
    <MyComp number={2}></MyComp>
    <MyClassComp number="1"></MyClassComp>
    <MyClassComp number={2}></MyClassComp>
  </div>
), document.getElementById("root"))
