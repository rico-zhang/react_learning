
import React from 'react'
import "./store/test";
import { Provider } from 'react-redux'
// import { Provider } from './react-redux'
import store from './store'
import Student from './components/Student'


export default function App() {
    return (
        <Provider store={store} >
            <Student />
        </Provider>
    )
}
