
//3
class Shiritory {
  constructor(game_over) {
    this.game_over = game_over;
    this.words = [];
  }

  play(word) {
    if (this.game_over) {
      return "game over";
    }
    this.game_over = false;

    if (this.words.length === 0) {
      this.words.push(word);
      return this.words;
    }

    if (this.words.includes(word)) {
      this.game_over = true;
      return "game over";
    }

    let last = this.words[this.words.length - 1];
    if (last[last.length - 1] !== word[0]) {
      this.game_over = true;
      return "game over";
    }

    this.words.push(word);
    return this.words;
  }

  restart(words) {
    this.words = [];
    this.game_over = false;
    return "game restarted";
  }
}

const myShiritori = new Shiritory();

console.log(myShiritori.play("apple")); // ["apple"]
console.log(myShiritori.play("ear")); // ["apple", "ear"]
console.log(myShiritori.play("rhino")); // ["apple", "ear", "rhino"]
console.log(myShiritori.play("corn")); // "game over"
// Corn does not start with an "o".
console.log(myShiritori.words); // ["apple", "ear", "rhino"]
// Words should be accessible.
console.log(myShiritori.restart()); // "game restarted"
console.log(myShiritori.words); // []
// Words array should be set back to empty.
console.log(myShiritori.play("hostess")); // ["hostess"]
console.log(myShiritori.play("stash")); // ["hostess", "stash"]
console.log(myShiritori.play("hostess")); // "game over"