
import React from 'react'
import "./store/test";
import { Provider } from 'react-redux'
import store from './store'
import Counter from './components/Counter'

export default function App() {
    return (
        <Provider store={store} >
            <Counter otherProp={'oo'}/>
        </Provider>
    )
}
