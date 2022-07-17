import { createBrowserHistory } from "history";

window.createBrowserHistory = createBrowserHistory;
window.h = createBrowserHistory({
  basename: "/news",
  forceRefresh: true,
  keyLength: 4,
  getUserconfirmation: (msg, callback) => {
    callback(window.confirm(msg));
  },
});

window.unblock = window.h.block((location, action) => {
  return `你真的要进入${location.pathname}吗? ${action}`;
});

export const a = 1;
