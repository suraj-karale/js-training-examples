function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

//Person class created

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

var person = new Person("ABC", "XYZ", 25);

person.hasOwnProperty("firstName"); //
person.hasOwnProperty("getFullName"); //

person.getFullName(); //
person.__proto__.hasOwnProperty("getFullName");

//
//
//
//
//
//
//

// https://dzone.com/articles/prototype-amp-prototype-chaining-with-object-orien
