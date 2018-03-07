// 'use strict';
// // Parent Class
// var myParent = function(name, age){
//   this.Name = name;
//   this.Age = age;
// };

// myParent.prototype.sayHello = function(){
//   return this.Name;
// }
// var myInstance = new myParent('suriya');


// //child class

// function myChild(education){
//   this.Education = education;
// }

// myChild.prototype.clgDetails = function(){
//   return 'I am studying ' + this.Education + ' in Kalasalingam'; 
// }

// var myChildInstance = new myChild('B.Tech');

// //console.log(myChildInstance.clgDetails());

// myChild.prototype = Object.create(myParent.prototype);
// myChild.prototype.constructor = myChild;

// console.log(myChild.sayHello());

// var Person = function(firstName) {
//   if (this instanceof Person) {
//     this.firstName = firstName;
//     console.log('sd');
//   } else {
//     console.log('swsewdsd');
//     return new Person(firstName);
//   }
// }
// Person('sur');


var func1 = function(name, age){
  
  this.Name = name;
  this.Age = age;
  console.log(this)
}
Object.defineProperty(func1, 'city',{
  value: 'madurai',
  writable: false, enumerable : true
});
func1.city = 'sad'
console.log(Object.keys(func1));
var func2 = function(Age, Name, gender){
  this.gender = gender;
  console.log(arguments)
  func1.apply(this, arguments);
}

var s = new func2('suriya', 13, 'male');
console.log(s.Age)
