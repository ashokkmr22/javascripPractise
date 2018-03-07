//Object
//object creation types
var test = {
  name:"john"
}
var test = {};
test.name = "john";
var test = Object.create([],{
  name:{value:"john"}
}
);
var test = new Object();


/* 
1.How do I create a read only property?
2.How do I make an unenumerable property?
3.How do I make property not configurable?
4.How do I determine whether a property is read only? 
*/

var obj = {
  name: 'john',
  age: 9
};

var a = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(a);


/* 
1.Value
2.Writeable
3.Enumerable
4.Configurable 
*/

                // Value
/*  Hold the value of a property */

                // Writable

var obj = {
  name: 'john',
  age: 9
};
// or
/* var obj = {
  name: {
      writable: true,
      configurable: true,
      value: 'john'
  },
  age: 9
}; */
Object.defineProperty(obj, 'name', { writable: false });
//console.log(obj.name); // foo 
// obj.name = "mark"; // JavaScript will ignore it as writable is set to false 



                    // Configurable
/* Whether a property’s other characteristics can be configured or not depends on the value of configurable. If a property configurable is set to false, then you cannot change the value of writable and enumerable.  */


var obj = {
  name: 'john',
  age: 9
};

Object.defineProperty(obj, 'name', { configurable: false });
//Object.defineProperty(obj, 'name', { enumerable: false });//Error
//Object.defineProperty(obj, 'name', { configurable: true });//Error Undone
//Object.defineProperty(obj, 'name', { writable: false });//Possible

                  // Enumerable

// Skip the index while looping
var obj = {
  name: 'john',
  age: 9
};
Object.defineProperty(obj, 'name', { enumerable: false });
for (let a in obj) {
  console.log(a); // will print only age 
}
obj.propertyIsEnumerable("name")