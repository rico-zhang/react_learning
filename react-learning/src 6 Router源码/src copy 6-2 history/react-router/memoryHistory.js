import { createMemoryHistory } from "history";

window.createMemoryHistory = createMemoryHistory;

window.h = createMemoryHistory({
  initialEntries: ["/", "/a"], //地址栈的初始内容
  initialIndex: 0, //默认指针指向的数组下标
  keyLength: 6,
  getUserConfirmation: null,
});
