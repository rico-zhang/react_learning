import React from 'react';
import ReactDOM from 'react-dom';

import StudentList from './components/StudentList';

const appkey = "demo13_1545210570249";
const url = "https://open.duyiedu.com/api/student/findAll";

async function fetchAllStudents() {
  const data = await fetch(url + "?appkey=" + appkey)
    .then(res => res.json())
    .then(res => res.data);
  return data;
}

async function render() {
  ReactDOM.render("正在加载中", document.getElementById("root"))
  const stus = await fetchAllStudents();
  ReactDOM.render(<StudentList stus={stus}></StudentList>, document.getElementById("root"));
}

render();

