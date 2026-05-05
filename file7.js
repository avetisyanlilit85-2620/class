class Book {
constructor (tittle,author) {
  this._tittle = tittle;
  this._author = author;
}
 
 get tittle () {
  return this._tittle;
 };

 get author () {
  return this._author;
 };

 toString() {
  return `Book : ${this._tittle} by ${this._author}`;
 };

 isTheSameBook (book) {
  if(book && this._tittle === book._tittle && this._author === book._author) 
  {
    return true;
  }
  return false;
 };
 
}

class LibraryBookBase extends Book {
  constructor(tittle,author,bookId) {
  super(tittle,author) ;
  this._bookId = bookId;
}

get bookId () {
  return  this._bookId;
};

toString () {
  return `book: ${this.bookId} ${this._tittle} by ${this._author}`;
};
}


class LibraryBook extends LibraryBookBase {
  constructor (tittle, author, bookId,quantity) {
    super (tittle,author,bookId);
    this.quantity = quantity;
  }

  getQuantity() {
    return this.quantity;
  };

  setQuantity(value) {
    this.quantity = value;
  };

toString() {
return `book: ${this._bookId} ${this._tittle} quantity : ${this.quantity}`;
};

increaseQuantityBy(amount) {
this.quantity += amount;
return this.quantity;
};

decreaseQuantityBy(amount) {
  this.quantity -= amount;
  return this.quantity;
};
}

class ReaderBook extends LibraryBook {
  constructor (tittle,author,bookId,expirationDate,isReaturned = false)
  {
    super(tittle,author,bookId) ;
    this.expirationDate = expirationDate;
    this.isReaturned = isReaturned;
  }

  getExpirationDate () {
    return this.expirationDate;
  };

  setExpirationDate (val) {
this.expirationDate = val;
  };

  getISsReaturned () {
    return this.isReaturned;
  };

  setIsRaeturned (v) {
this.isReaturned = v;
  };

  toString () {
    return `${this._tittle} expires:  ${this.expirationDate} reaturned: ${this.isReaturned}`
  }
}

class Reader {
  constructor(firstname,lastname,readerId,) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.readerId = readerId;
  this.books = [];
  }

  getReaderId () {
    return this.readerId
  };

  setReaderID (a) {
    this.readerId = a;
  };

  getBooks () {
    return this.books;
  };
  setBooks (b) {
  rhis.books = b;
};

toString () {
retutn `${this.firstname} ${this.lastname} ${readerId}`;
};

borrowBook(book,  ){
  if(book instanceof ReaderBook) {
    this.books.push(borrowedBook);
  }
}
}


class Library {
  constructor () {
    this.books = [];
    this.readers = [];
  }

checkReaderId(readerId) {
  return this.readers.some (id => id.getReaderId === readerId) ;
}

lendBook(book , readerId) {
  let found = this.books.find(k => k.isTheSameBook(book) && k.quantity > 0) 
if(!found || !this.checkReaderId(readerId)) {
  return null;
};

return new ReaderBook (
found.tittle,
found.author,
found.bookId,
);

}
}
const lib = new Library();
const a1 = new LibraryBook("ala", "Lilit",4,6);
lib.readers.push(a1);
const b1 = new Reader("Anna","av",24);
lib.readers.push(b1);
const borrowed = lib.lendBook(a1,24);
b1.borrowBook(borrowed);
console.log(a1.toString());
