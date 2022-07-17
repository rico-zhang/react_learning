import { createHashHistory } from "history";

window.createHashHistory = createHashHistory;

window.h = createHashHistory({
  hashType: "slash",
  getUserConfirmationL: (msg, callback) => {
    callback(window.confirm(msg));
  },
});
