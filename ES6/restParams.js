//Params

/* JavaScript had arguments variable to access these unknown or variable number of parameters, which is an array-like object but not an array. We are not able to perform array actions with that..*/

//Arugument Example

function addNumbers(){
  //console.log(arguments);
  //console.log(arguments.pop());
  var result = 0; 
  for(let i=0;i<arguments.length;i++){
      result = result + arguments[i];
  }
  return result; 
}

var res = addNumbers(6,9,3,2);
//console.log(res);


//Rest Parameter

function addNumbersRestParams(...num){
  console.log(num);
  console.log(num.slice());
  var result = 0; 
  for(let i=0;i<arguments.length;i++){
      result = result + arguments[i];
  }
  return result; 
}

var res = addNumbersRestParams(6,9,3,2);
//console.log(res);

//Spliting params
function restParamsEx(a, b, ...num){
  console.log(a);
  console.log(b);
  console.log(num);
}

var res = restParamsEx(6,9,3,2);

//Another way
function add(...[a,b,c]){

    return a+b+c; 
    
}
var r = add(6,3,3);
console.log(r,"result");
var t = add(7,56,9);
console.log(t);

  