// Arrow Function

/* 1.Function as statement
2.Function as expression */

// function statement 
var array = [10,2,1,1];
function test(){
  array.forEach(element =>{
    console.log(this);
  });
  array.forEach(function(element) {
    console.log("------------------------------------",this);
  });
}
test();
//function Expression
var test = function (){
}

// Arrow function
var test = () => {};
var test1 = num => {return num};
var test2 = (num1,num2) => {return num1 + num2};
var test2 = (num1=1,num2=2) => {return num1 + num2};
var test2 = (...num) => {return num[0] + num[1]};



/* There are few restrictions that apply with arrow functions to be aware of:

The arrow function does not have an arguments object
The arrow function cannot be used with the new operator so it can’t work as a constructor.
The arrow function does not have the prototype property. */
