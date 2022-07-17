import { useState, useEffect } from 'react'
import { getAllStudents } from '../services/api'

export default function useGetAllStudents() {
    const [stus, setStus] = useState([]);
    console.log(stus);

    useEffect(() => {
        (async () => {
            const all = await getAllStudents();
            console.log("all", all);
            setStus(all);
        })()
    }, []);
    return stus;
}