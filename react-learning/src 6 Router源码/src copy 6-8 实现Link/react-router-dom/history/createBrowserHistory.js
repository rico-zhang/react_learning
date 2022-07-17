import ListenerManager from "./ListenManager";
import BlockManager from "./BlockManager";
const defaultOptions = {
  basename: "",
  forceRefresh: false,
  keyLength: 6,
  getUserConfirmation: (message, callback) => {
    callback(window.confirm(message));
  },
};

export default function createBrowserHistory(options = {}) {
  const { basename, forceRefresh, keyLength, getUserConfirmation } = {
    ...defaultOptions,
    ...options,
  };
  const listenerManager = new ListenerManager();
  const blockManager = new BlockManager(getUserConfirmation);
  const history = {
    action: "POP",
    block,
    createHref: createHref,
    go,
    goBack,
    goForward,
    length: window.history.length,
    listen,
    location: createLocationByWinLoc(basename),
    push,
    replace,
  };

  function go(step) {
    window.history.go(step);
  }
  function goBack() {
    window.history.back();
  }

  function goForward() {
    window.history.forward();
  }
  function createHref(location) {
    return (
      basename +
      location.pathname +
      (location.search || "") +
      (location.hash || "")
    );
  }

  function changePath(path, state, isPush) {
    let action = isPush ? "PUSH" : "REPLACE";
    let pathInfo = handlePathAndState(path, state, basename);
    const location = createLocationByPathInfo(pathInfo, basename);
    blockManager.triggerBlock(location, action, () => {
      if (isPush) {
        window.history.pushState(
          {
            key: createKey(keyLength),
            state: pathInfo.state,
          },
          null,
          pathInfo.path
        );
      } else {
        window.history.replaceState(
          {
            key: createKey(keyLength),
            state: pathInfo.state,
          },
          null,
          pathInfo.path
        );
      }
      //必须在改变action和location之前触发listener
      listenerManager.triggerListener(location, action);
      history.action = action;
      history.location = location;
      if (forceRefresh) {
        window.location.href = pathInfo.path;
      }
    });
  }

  function push(path, state) {
    return changePath(path, state, true);
  }

  function replace(path, state) {
    return changePath(path, state, false);
  }

  function listen(listener) {
    return listenerManager.addListener(listener);
  }

  function block(prompt) {
    return blockManager.blcok(prompt);
  }

  /**
   * 添加对地址变化的监听
   */
  function addDomListener() {
    //popstate事件，仅能监听前进、后退、用户对地址hash的改变
    //无法监听到pushState、replaceState
    window.addEventListener("popstate", () => {
      const location = createLocationByWinLoc(basename);
      const action = "POP";
      //这里处理的不好 和 history库不一样  点击浏览器上的前进、回退按钮 会有问题 因为地址栏已经变了 要给还原回去
      blockManager.triggerBlock(location, action, () => {
        listenerManager.triggerListener(location, "POP");
        history.location = location;
      });
    });
  }

  addDomListener();
  return history;
}

/**
 * 根据path和state,basename，得到一个统一的对象格式 (path是加上basename的)
 * @param {*} path
 * @param {*} state
 * @param {*} basename
 */
function handlePathAndState(path, state, basename = "") {
  if (typeof path === "string") {
    return {
      path: basename + path,
      state,
    };
  } else if (typeof path === "object") {
    let pathRessult = basename + path.pathname;
    let { search = "", hash = "" } = path;
    if (search.length > 0 && search[0] !== "?") {
      search = "?" + search;
    }
    if (hash.length > 0 && hash[0] !== "#") {
      hash = "#" + hash;
    }
    pathRessult += search;
    pathRessult += hash;
    return {
      path: pathRessult,
      state: state,
    };
  } else {
    throw new TypeError("path must be string or Object");
  }
}

/**
 * 根据window.location创建一个location对象
 */
function createLocationByWinLoc(basename = "") {
  const winLocation = window.location;
  let pathname = winLocation.pathname;
  //处理basename的情况
  const reg = new RegExp(`^${basename}`);
  pathname = pathname.replace(reg, "");
  const location = {
    pathname,
    search: winLocation.search,
    hash: winLocation.hash,
  };

  //处理state
  let state,
    historyState = window.history.state;
  if (historyState === null) {
    state = undefined;
  } else if (typeof historyState !== "object") {
    state = historyState;
  } else {
    if ("key" in historyState) {
      location.key = historyState.key;
      state = historyState.state;
    } else {
      state = historyState;
    }
  }
  location.state = state;
  return location;
}

/**
 * 根据pathInfo得到一个location对象
 * @param {*} pathInfo  {path:"/news/asdf#aaaaaa?a=2&b=3", state:状态}
 * @param {*} basename
 */
function createLocationByPathInfo(pathInfo, basename) {
  //取出pathname
  let pathname = pathInfo.path.replace(/[#?].*$/, "");
  //处理basename的情况
  let reg = new RegExp(`^${basename}`);
  pathname = pathname.replace(reg, "");
  //search
  var questionIndex = pathInfo.path.indexOf("?");
  var sharpIndex = pathInfo.path.indexOf("#");
  let search;
  if (questionIndex === -1 || questionIndex > sharpIndex) {
    search = "";
  } else {
    search = pathInfo.path.substring(questionIndex, sharpIndex);
  }
  //hash
  let hash;
  if (sharpIndex === -1) {
    hash = "";
  } else {
    hash = pathInfo.path.substr(sharpIndex);
  }
  return {
    hash,
    pathname,
    search,
    state: pathInfo.state,
  };
}

/**
 * 产生一个指定长度的随机字符串，随机字符串中可以包含数字和字母
 * @param {*} keyLength
 */
function createKey(keyLength) {
  return Math.random().toString(36).substr(2, keyLength);
}

window.createBrowserHistory = createBrowserHistory;
window.h = createBrowserHistory({
  basename: "/news",
});
window.unListen = window.h.listen((location, action) => {
  console.log(location.pathname, action);
});

window.unBlock = window.h.block((location, action) => {
  return `${location.pathname + action}`;
});
