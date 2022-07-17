import React from 'react';
import { getAllStudents } from '@/services/student';
function index() {
  getAllStudents().then((resp) => {
    // console.log(resp);
  });
  return (
    <div>
      <h1>首页</h1>
    </div>
  );
}
index.title1 = '首页';
index.wrappers = ['@/routes/HandleTitle.js'];
export default index;
