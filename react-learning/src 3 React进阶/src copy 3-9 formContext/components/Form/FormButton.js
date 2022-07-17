import React from 'react'
import { Consumer } from "./formContext"

export default function FormButton(props) {
    return (
        <Consumer>
            {context => {
                return (
                    <button onClick={() => {
                        context.submit();
                    }}>{props.children}</button>
                )
            }}
        </Consumer>
    )
}
