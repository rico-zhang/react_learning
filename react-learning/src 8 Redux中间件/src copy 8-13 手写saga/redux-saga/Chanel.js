export default class Chanle {
  listener = {};
  take(propName, fn) {
    if (this.listener[propName]) {
      this.listener[propName].push(fn);
    } else {
      this.listener[propName] = [fn];
    }
  }

  put(propName, ...args) {
    const fns = this.listener[propName] || [];
    delete this.listener[propName];
    fns.forEach((fn) => {
      fn(...args);
    });
  }
}
