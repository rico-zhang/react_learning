import React from 'react'
export default function MyComp(props) {
    console.log(props);
    return <h1>函数组件的内容{props.number}</h1>
}