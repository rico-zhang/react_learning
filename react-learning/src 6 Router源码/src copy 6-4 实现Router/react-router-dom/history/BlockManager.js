export default class BlockManager {
  prompt = null;
  constructor(getUserConfirmation) {
    this.getUserConfirmation = getUserConfirmation;
  }
  blcok(prompt) {
    if (typeof prompt !== "string" && typeof prompt !== "function") {
      throw new TypeError("block must be string or function");
    }
    this.prompt = prompt;
    return () => {
      this.prompt = null;
    };
  }

  triggerBlock(location, action, callback) {
    if (!this.prompt) {
      callback();
      return;
    }
    let message;
    if (typeof this.prompt === "string") {
      message = this.prompt;
    } else if (typeof this.prompt === "function") {
      message = this.prompt(location, action);
    }
    this.getUserConfirmation(message, (result) => {
      if (result === true) {
        callback();
      }
    });
  }
}
