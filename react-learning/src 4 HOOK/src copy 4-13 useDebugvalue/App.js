import React, { useState, useEffect, useRef,useDebugValue } from 'react'


function useStudent() {
    const [stu, setStu] = useState([]);
    //可以去掉这一句看控制台components面板右侧hooks的区别
    useDebugValue("学生集合");
    useDebugValue(stu);
    return stu;
}

export default function App() {
    const [n, setN] = useState(0);
    const ref = useRef();
    useEffect(() => {
        console.log(1);
    })
    //自定义的hook
    useStudent();

    return (
        <div className="app">
            <div ref={ref}>{n}</div>
        </div>
    )
}
