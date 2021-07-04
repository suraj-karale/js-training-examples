function grandfather(age) {
  var gfname = "ahmed";

  function parent() {
    console.log(gfname);
    var parentname = "abc";

    function child() {
      console.log(age);
      var chidname = "XYZ";
    }
  }
}

grandfather(12);
