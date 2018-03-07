// getters and setters


//SET

/* The set syntax binds an object property to a function to be called when there is an attempt to set that property. */

/* a setter is used to set the value of a property. */
var obj = {
  a:1,
  set cal(x) {
      this.a = x + 5;
  }
}
//obj.cal = 8;
console.log(obj.a);
obj.cal=2;
console.log(obj.a);

//Get

var cal = {
  name: "ashok",
  lastname: "kumar",
  get full_name() {
      return `${this.name} ${this.lastname}`;
  },
  set lastName(lastname){
    this.fullName = `${this.name} ${lastname}`;
  }
}
console.log(cal.fullName);
console.log(cal.full_name);
cal.lastName = "john";
console.log(cal.fullName);