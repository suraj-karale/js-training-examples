function Person(firstName, lastName) {
  this.FirstName = firstName || "unknown";
  this.LastName = lastName || "unknown";
}

Person.prototype.getFullName = function () {
  return this.FirstName + " " + this.LastName;
};
function Student(firstName, lastName, schoolName, grade) {
  Person.call(this, firstName, lastName);

  this.SchoolName = schoolName || "unknown";
  this.Grade = grade || 0;
}
//Student.prototype = Person.prototype;
Student.prototype = new Person();
Student.prototype.constructor = Student;

var std = new Student("James", "Bond", "XYZ", 10);

const obj1 = new Student("Suraj", "Karale", "Terna School", "A+++");
console.log(obj1);

alert(std.getFullName()); //
alert(std instanceof Student); //
alert(std instanceof Person); //
