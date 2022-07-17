import React, { Component } from 'react';
import RefCompStr from "./components/RefCompStr"
import RefCompObj from "./components/RefCompObj"
import RefCompFunc from "./components/RefCompFunc"

export default class App extends Component {
    render() {
        return (
            <div>
                <RefCompStr></RefCompStr>
                <RefCompObj></RefCompObj>
                <RefCompFunc></RefCompFunc>
            </div>
        )
    }
}
