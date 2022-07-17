export default class Task {
  constructor(next, cbObj) {
    this.next = next;
    this.cbObj = cbObj;
    this.cbObj.callback = () => {
      //结束了
      this.resolve && this.resolve();
    };
  }
  cancel() {
    this.next(null, null, true);
  }

  toPromise() {
    return new Promise((resolve) => {
      this.resolve = resolve;
    });
  }
}
