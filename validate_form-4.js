function validateForm(){
    var valid=true;
    var x=document.form["fname"].value;
    var y=document.form["check"].value;
    if (x=="" || y=="") {
      alert("Please fill data currectly");
      return false;
    }
}