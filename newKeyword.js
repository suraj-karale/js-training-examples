function abc() {
  (this.name = "Suraj"), (this.num = 25), (a = 15);
}

var obj1 = new abc();

console.log(obj1.name);
console.log(obj1.a);
console.log(abc.prototype);
