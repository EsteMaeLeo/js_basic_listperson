class Person {
  constructor(name, lastname, age) {
    this._name = name;
    this._lastname = lastname;
    this._age = age;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get lastname() {
    return this._lastname;
  }
  set lastname(lastname) {
    this._lastname = lastname;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    this._age = age;
  }
}
