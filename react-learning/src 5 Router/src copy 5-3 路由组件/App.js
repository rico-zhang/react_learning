import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "./App.css"

function A() {
    return <h1>组件A</h1>
}

function B() {
    return <h1>组件B</h1>
}

function C() {
    return <h1>组件C</h1>
}
export default function App() {
    return (
        <BrowserRouter>
            <Route path="/a" component={A}>  </Route>
            <Route path="/b" component={B}></Route>
            <Route component={C}></Route>
        </BrowserRouter>
    )
}
