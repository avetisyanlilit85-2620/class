
//2
class CustomConsole {
  constructor(type) {
    this.type = type;
    this._history = [];
  }

  log(...arg) {
    const res = `${this.type}: ${arg.join(", ")}`;
    this._history.push(res);
    return res;
  }

  history(range) {
    return this._history.join("\n");
  }

  clearHistory() {
    this._history = [];
    return true;
  }
}

const myConsole = new CustomConsole("Regular");
const fancyConsole = new CustomConsole("Fancy");

console.log(myConsole.log([0, 1, 2, 3])); // "Regular: [0,1,2,3]"
console.log(myConsole.log({ a: 1, b: 2 })); // "Fancy: {a:1, b:2}"
console.log(myConsole.log("ok : ", 1, 2, 3)); //"ok : 1, 2, 3"
console.log(myConsole.clearHistory()); // true
console.log(myConsole.history()); // ""

