import React, { Component } from 'react';
import DefaultPropsFunc from "./components/DefaultPropsFunc"
import DefaultPropsClass from"./components/DeaultPropsClass"

export default class App extends Component {

    render() {
        return (
            <>
                <DefaultPropsFunc ></DefaultPropsFunc>
                <DefaultPropsClass ></DefaultPropsClass>
            </>
        )
    }
}

