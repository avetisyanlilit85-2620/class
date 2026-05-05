class Account {
  static everyId = 0;
  constructor(name, balance) {
    this.id = Account.everyId++;
    this._name = name;
    this._balance = balance;
  }

  get name() {
    return this._name;
  }

  get balance() {
    return this._balance;
  }

  set name(otherName) {
    this._name = otherName;
  }

  set balance(value) {
    this._balance = value;
  }
  credit(amount) {
    this._balance += amount;
    return this._balance;
  }

  debit(amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
      return this._balance;
    } else {
      return "Amount exceeded balance";
    }
  }

  transferTo(anotherAccount, amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
      anotherAccount._balance += amount;
      return this._balance;
    } else {
      return "Amount exceeded balance.";
    }
  }

  static identifyAccounts(accountFirst, accountSecond) {
    return (
      accountFirst.id === accountSecond.id &&
      accountFirst.name === accountSecond.name &&
      accountFirst.balance === accountSecond.balance
    );
  }

  toString() {
    return `Account id: ${this.id}, name: ${this._name}, balance ${this._balance}`;
  };

}

let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);

console.log(savingAcc); // Account { id: 0, _name: 'Saving account',
//_balance: 2000
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance:
//1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is
//$1400.
