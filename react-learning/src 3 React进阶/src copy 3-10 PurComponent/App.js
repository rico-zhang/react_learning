import React, { Component } from 'react';

import Test from "./components/Test"

export default class App extends Component {
    render() {
        console.log("App render");
        return (
            <Test></Test>
        )
    }
}
