class Author {
  constructor(name,email,gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }
  get name() {
    return this._name;
  }

  get email() {
    return this.email;
  }
  get gender() {
    return this.gender;
  }

  toString() {
 const res = this.gender === "female" ?"ms" :"mrs";
 return `${res} ${this.name}`;
  }
}

class book {
  constructor(tittle,price,author,quantity) {
    this.tittle = tittle;
    this.price = price;
    this.quantity = quantity;
   this.author = author;
  }

  get tittle() {
    return this._tittle;
  }
  set(value) {
    if(typeof value !== "string")
    {
      throw new Error ("invalid tittle");
    } 
    this._tittle = value;
  }

  get() {
    return this.price;
  }

  set(val) {
    if(price > 0)
     this._price = val;
  }

  get() {
    return this.quantity;
  }

  set(v) {
    if(v < 0)
    { 
      throw new Error ("value must be possitive")
    }
    this._quantity = v;

  }

  getProfit() {
let p = this.price * this.quantity;
return p;
  }

  toString() {
return `${this.tittle} by ${this.author};`
  }
}
  let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
author.name = 12; // throws error
