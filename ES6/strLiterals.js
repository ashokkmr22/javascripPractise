//In ES6, two types of literals were introduced:

/* 
1.Template Literals for string concatenation and expression embedding in a string
2.Tagged Template Literals to tag the Template Literal in a function so the literal can be evaluated in the function 
*/



//"hai this is "+name+" and my name is "+age
var name = "ashok";
var age = 26;
var result = `Hai this is ${name} and my age is ${age}`;
console.log(result);


//Passing string literals
function strLiterals(string, name, age){
  console.log(string);
  console.log(name);
  console.log(age);
}
var test =  strLiterals `Hai this is ${name} and my age is ${age}`;

//rest Params

function strLiterals(string, ...details){
  console.log(string);
  console.log(details);
}
var test =  strLiterals `Hai this is ${name} and my age is ${age}`;