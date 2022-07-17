import React from 'react'
import Student from "./Student"
export default function StudentList(props) {
    console.log(props);
    const stus = props.stus.map(item => <Student {...item} key={item.id}></Student>)
    return (
        <ul>
            {stus}
        </ul>
    )
}
