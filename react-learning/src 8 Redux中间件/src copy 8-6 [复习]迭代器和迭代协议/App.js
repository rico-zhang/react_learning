import React from "react";

//迭代器
const iterator = {
  i: 3,
  next: function () {
    this.i--;
    return {
      done: this.i >= 0 ? false : true,
      value: this.i >= 0 ? Math.random() : undefined,
    };
  },
};

//迭代器创建函数

function iteratorCreator() {
  return {
    i: 3,
    next: function () {
      this.i--;
      return {
        done: this.i >= 0 ? false : true,
        value: this.i >= 0 ? Math.random() : undefined,
      };
    },
  };
}

//可迭代对象
const obj = {
  [Symbol.iterator]: function () {
    return {
      i: 3,
      next() {
        this.i--;
        return {
          done: this.i >= 0 ? false : true,
          value: this.i >= 0 ? Math.random() : undefined,
        };
      },
    };
  },
};

for (const it of obj) {
  console.log(it);
}

export default function App() {
  return <h1>打开控制台</h1>;
}
