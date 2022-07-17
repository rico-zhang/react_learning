import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { withRouter } from '_react-router-dom@5.2.0@react-router-dom/cjs/react-router-dom.min'

//模拟Link

function A() {
    return (
        <h1>页面A</h1>
    )
}

function B() {
    return (
        <h1>页面B</h1>
    )
}

function Link(props) {
    return (
        <a href={props.to} onClick={(e) => {
            e.preventDefault();
            props.history.push(props.to);
        }}>{props.children}</a>
    )
}

const MyLink = withRouter(Link);

export default function App() {
    return (
        <BrowserRouter>
            <MyLink to="/a">去A</MyLink>
            <MyLink to="/b">去B</MyLink>
            <Switch>
                <Route path='/a' component={A}></Route>
                <Route path='/b' component={B}></Route>
            </Switch>
        </BrowserRouter>
    )
}




