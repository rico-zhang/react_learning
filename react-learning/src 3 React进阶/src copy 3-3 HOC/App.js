import React, { Component } from 'react';
import CompA from "./components/compA"
import CompB from "./components/compB"
import LogHOC from "./HOC/LogHOC"
import LoginHOC from './HOC/LoginHOC';


const ComALog = LogHOC(CompA);
const ComBLog = LogHOC(CompB);
const COmALogin = LoginHOC(ComALog);
const COmBLogin = LoginHOC(ComBLog);
export default class App extends Component {
    render() {
        return (
            <>
                <COmALogin a="a" login></COmALogin>
                <COmBLogin b="b" login></COmBLogin>

                <button onClick={() => {
                    this.setState({});
                }}>click</button>
            </>
        )
    }
}
