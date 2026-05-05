class Person {
  constructor(firstname,lastname,gender,age) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._gender = gender;
    this._age = age;
  }

get firstname () {
  return this._firstname;
};

set firstname (otherFirstname) {
  this._firstname = otherFirstname;
};

get lastname () {
  return this._lastname;
};

 set lastname (otherLastname) {
  this._lastname = otherLastname;
 };

get gender () {
  return this._gender;
};

set gender(otherGender) {
  this._gender = otherGender;
};

get age() {
  return this._age;
};

set age (otherAge) {
  this._age = otherAge;
};

toString() {
  return `person : ${this._firstname} ${this._lastname},
${this._age} years old`;
};

};

class Student extends Person {
  constructor(firstname,lastname,gender,age,year = 1, fee){
    super(firstname,lastname,gender,age);
  this._year = year;
  this._fee = fee;
  this._program = [];
  }

get year() {
  return this._year;
};

set year(value) {
this._year = value;
};

get fee() {
  return this._fee;
};

set fee(val) {
this._fee = val;
};

get program () {
  return this._program;
};

set program (v) {
  this._program = v;
};

passExam(programName, grade) {
  this._program.push ( {programName,grade} );
if(this.isAllPaseed())
{
  this._year ++;
}
};

isAllPaseed () {
  return this._program.every(mark => mark.grade >= 50);
};

toString() {
  return `Student ${this._firstname}  ${this._lastname}, year ${this._year} , ${this._age} years old`;
}
};

let a = new Student("Lilit", "Avetisyan", "female", 20);

a.passExam("history", 90);
a.passExam("math", 40);
console.log(a.toString());
console.log(a.isAllPaseed());
