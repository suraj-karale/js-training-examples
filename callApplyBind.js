var myVar = 100;
function WhoIsThis() {
  console.log(this.myVar);
  // 200
}

var obj1 = { myVar: 200, whoIsThis: WhoIsThis };
var obj2 = { myVar: 300, whoIsThis: WhoIsThis };

// WhoIsThis(); // this will point to window

// WhoIsThis.call(obj1); // this will point to obj1
// WhoIsThis.apply(obj1); // this will point to obj2

// obj1.whoIsThis.call(window); // this will point to window

// -------BIND----------------------------------------------------------------

var myVar = 100;
function SomeFunction(callback) {
  var myVar = 200;
  callback();
}

var obj = {
  myVar: 300,
  WhoIsThis: function () {
    console.log("'this' points to " + this + ", myVar = " + this.myVar);
  },
};

SomeFunction(obj.WhoIsThis.call(obj)); // 'this' points to , myVar =
SomeFunction(obj.WhoIsThis.bind(obj)); // 'this' points to  , myVar =
