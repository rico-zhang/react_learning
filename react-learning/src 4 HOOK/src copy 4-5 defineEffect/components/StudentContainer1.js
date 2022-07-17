import React from 'react'
import useGetAllStudents from "../myHooks/useGetAllStudents";

export default function StudentContainer() {

    const stus = useGetAllStudents();
    return (
        <ul>
            {stus.map(it => (<li key={it.id}>name:{it.name}</li>))}
        </ul>
    )
}
