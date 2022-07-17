import React from 'react'
import { BrowserRouter, Route, Switch,withRouter } from 'react-router-dom'
import qs from 'query-string'


function A(props) {
    console.log(props);
    console.log(qs.parse(window.location.search));
    return (
        <div>
            <h1>A</h1>
            <button onClick={() => { props.history.push('/b') }}>跳转到B</button>
        </div>
    )
}

const CWrapper=withRouter(C);
function B(props) {
    console.log(props);
    return (
        <div>
            <h1>B</h1>
            <button onClick={() => { props.history.push('/a') }}>跳转到A</button>
            <CWrapper></CWrapper>
        </div>
    )
}

function C(props) {
    console.log(props);
    return (
        <div>
            <h1>C</h1>
            <button onClick={() => { props.history.goBack() }}>返回</button>
        </div>
    )
}
function PageNotFound(props) {
    console.log(props);
    return <div>404</div>
}

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/a' component={A}></Route>
                {/*     /a/2021/5/12
                <Route path='/a/:year/:month/:day'  component={A}></Route> */}
                {/*     /a-2021-5-12
                <Route path='/a-:year-:month-:day'  component={A}></Route>  */}
                <Route path='/b' component={B}></Route>
                <Route component={PageNotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}
