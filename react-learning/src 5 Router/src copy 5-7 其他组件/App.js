import React from 'react'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom'


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

export default function App() {
    let ref = React.createRef();
    return (
        <BrowserRouter>
            <Link to="/a">去A</Link>
            <Link to={{pathname:'/b',search:'a=1&b=2',hash:"5451"}} 
            replace={true}
            // innerRef={node=>{console.log(node)}}
            innerRef={ref}
            >去B</Link>
            <Switch>
                <Route path='/a' component={A}></Route>
                <Route path='/b' component={B}></Route>
            </Switch>
        </BrowserRouter>
    )
}




