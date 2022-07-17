import React, { useState, useEffect } from 'react'
import { getAllStudents } from '../services/api'

export default function StudentContainer() {
    const [stus, setStus] = useState([]);
    console.log(stus);

    useEffect(() => {
        (async () => {
            const all = await getAllStudents();
            console.log("all",all);
            setStus(all);
        })()
    }, []);

    return (
        <ul>
            {stus.map(it => (<li key={it.id}>name:{it.name}</li>))}
        </ul>
    )
}
