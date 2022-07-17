import React, { Component } from 'react';
import ValidationComp from "./components/ValidationComp"

export default class App extends Component {

    render() {
        return (
            <>
                <ValidationComp a = {1} c={ {a:1} }></ValidationComp>
            </>
        )
    }
}
