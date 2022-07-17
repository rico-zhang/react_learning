import React, { Component } from 'react'


const ctx1 = React.createContext({ xxx: 1 });
ctx1.displayName = "ctx1";
const ctx2 = React.createContext({ yyy: 2 })
ctx2.displayName = "ctx2";

class A extends Component {
    // static contextType = ctx1;
    render() {
        // console.log(this.context);
        return (
            <ctx2.Provider value={{ b: 2 }}>
                <ctx1.Consumer>
                    {context => {
                        console.log(context);
                        return <B></B>
                    }}
                </ctx1.Consumer>
            </ctx2.Provider>
        )
    }
}

function B() {
    return (
        <ctx1.Consumer>
            {
                context => {
                    console.log(context);
                    return (
                        <p>
                            组件B
                            <ctx2.Consumer>
                                {context => {
                                    console.log(context, 11);
                                    return <span>11</span>
                                }}
                            </ctx2.Consumer>
                        </p>
                    )
                }
            }
        </ctx1.Consumer>
    )
}


export default class NewContext extends Component {
    state = { a: 1 }
    handleClick = () => {
        this.setState({
            a: this.state.a + 1
        })
    }
    render() {
        return (
            <>
                <ctx1.Provider value={this.state}>
                    <A></A>
                </ctx1.Provider>
                <button onClick={this.handleClick}>改变state</button>
            </>

        )
    }
}
