class ListenerManager {
  listeners = [];

  addListener(listener) {
    let isActive = true;
    function fn(...args) {
      if (!isActive) return;
      listener.apply(null, args);
    }
    this.listeners.push(fn);
    const unListen = () => {
      isActive = false;
      const index = this.listeners.indexOf(fn);
      this.listeners.splice(index, 1);
    };
    return unListen;
  }

  triggerListener(location, action) {
    for (const listener of this.listeners) {
      listener(location, action);
    }
  }
}

export default ListenerManager;
